import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { env } from 'hono/adapter'

const app = new Hono<{
  Bindings:
  {
  DATABASE_URL: string
  JWT_SECRET: string
  }
}>()

app.get('/', (c) => {
  return c.json(c.env.DATABASE_URL)
  
})

app.post('/api/v1/signup', async(c) => {
  // dotenv.config()
  // console.log(c.env?.DATABASE_URL)

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())

const body= await c.req.json()

try {
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  });
  const jwt = await sign({ id: user.id }, c.env?.JWT_SECRET);
  return c.json({ jwt });
} catch(e) {
  console.error('Error during signup:', e);
  c.status(403);
  
  return c.json({ error: "error while signing up" });
}


})

app.post('/api/v1/signin',(c) => {
  return c.json({ message: 'Signin' })


})

app.post('/api/v1/blog',(c) => {
  return c.json({ message: 'blog' })


})


app.get('/api/v1/blog/:id',(c) => {
  return c.json({ message: 'blog' })


})


app.put('/api/v1/signup',(c) => {
  return c.json({ message: 'blog' })


})



export default app
