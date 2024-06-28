import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
		authorName: string;
		id:string;

    }
}>();

blogRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    // @ts-ignore
	c.set('userId', payload.id);
	const user = await prisma.user.findUnique({
			where: {
			// @ts-ignore
		  id: payload.id,
		},
		select: {
		  name: true, // Only select the "name" field
		},
	  });
  
	 // @ts-ignore
	c.set('authorName', user.name);
	await next();
});

blogRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const authorName = c.get('authorName');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    // @ts-ignore
	const blog = await prisma.blog.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId,
			authorName: authorName
		}
	});
	return c.json({
		id: blog.id
	});
})

blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    // @ts-ignore
	prisma.blog.update({
		where: {
			id: body.id,
			// authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});


blogRouter.get('/bulk', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    // @ts-ignore

    const blogs = await prisma.blog.findMany();


	return c.json({
        blogs:blogs
    });
})



blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    
	try{
        // @ts-ignore       
	const blog = await prisma.blog.findUnique({
		where: {
			id
		}
	});

	return c.json(blog);
}
catch(e){
    return c.json({error:"Blog not found"})
}
})
