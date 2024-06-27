/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yMAaDQt8wdc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from 'react-router-dom';
import "./component.css";
// import image path as "../assets/home.jpg"
import image from  "../assets/home.jpg"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="#" className="flex items-center justify-center" >
          <FeatherIcon className="h-6 w-6" />
          <span className="text-xl font-bold ">WordWave</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Blog
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Best in Blogging
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    WordWave is the premier destination for thought-provoking content and engaging stories. Explore our
                    featured blog posts and join our community of passionate writers and readers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row hover:underline underline-offset-4    ">
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm bg-slate-100 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-black "
                    
                  >
                    Read the Blog
                  </Link>
                </div>
              </div>
              <img
                src={image}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-muted border-b-8">
          <div className=" container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Posts</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Latest Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into our curated selection of thought-provoking blog posts, covering a wide range of topics from
                  lifestyle to technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col overflow-hidden rounded-xl bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={image}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:underline">The Art of Mindful Living</h3>
                    <p className="mt-2 line-clamp-3 text-muted-foreground">
                      Discover the transformative power of mindfulness and how it can enrich your daily life. Explore
                      practical techniques to cultivate inner peace and find greater fulfillment.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      
                    >
                      Read More
                    </Link>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span>May 15, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-xl bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={image}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:underline">The Future of Remote Work</h3>
                    <p className="mt-2 line-clamp-3 text-muted-foreground">
                      Explore the evolving landscape of remote work and how it is shaping the future of the workforce.
                      Discover strategies for thriving in a distributed work environment.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      
                    >
                      Read More
                    </Link>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span>April 28, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col overflow-hidden rounded-xl bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={image}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:underline">The Power of Storytelling</h3>
                    <p className="mt-2 line-clamp-3 text-muted-foreground">
                      Discover the transformative power of storytelling and how it can shape our perspectives, inspire
                      change, and connect us with one another. Explore the art of crafting compelling narratives.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      
                    >
                      Read More
                    </Link>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span>March 12, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Connected with WordWave</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter and be the first to receive updates, exclusive content, and the latest news
                from the WordWave community.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <button type="submit">Subscribe</button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Your email will never be shared.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 WordWave. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4" >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
// @ts-ignore
function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

// @ts-ignore


function FeatherIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  )
}