import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'
import { env, getRuntimeKey } from 'hono/adapter'
import { userRouter } from './routes/userRouter'
import { blogRouter } from './routes/blogRouter'
import { cors } from 'hono/cors'


const app = new Hono<{  
  Bindings:
  {
  DATABASE_URL: string,
  JWT_SECRET: string
  }
}>()

app.use('/*', cors())
// routes
app.post('/', async (c) => {
  return c.text( "Hello, World!");

});
app.route("api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);




export default app
