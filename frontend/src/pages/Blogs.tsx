import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton.tsx";
import { useBlogs } from "../hooks";
import { Link } from "react-router-dom";

export const Blogs = () => {
    // @ts-ignore
    const { loading, blogs,login } = useBlogs()
    ;
    if(!login)
    {
       return(
              <div>
                <Appbar/>
                <div className="flex  justify-center">
                     <h1 className="text-4xl font-bold">Please Login to view Blogs</h1>
                      
                     
                </div>
                <div className="text-center my-5  ">
                <Link to={'/signin'} className="text-blue-500 text-xl">Login</Link>
                </div>
              </div>
       )
    }

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    // @ts-ignore
                    authorName={blog.authorName || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
    </div>
}
