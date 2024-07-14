import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config.ts";


export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    };
    "authorName":string;

}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log((response.data));
                setBlog(response.data);
                setLoading(false);

            })
    }, [id])

    return {
        loading,
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    // @ts-ignore
    const [login,setLogin]=useState(true);

    useEffect(() => {
        if(!localStorage.getItem("token"))
        {
            setLogin(false);
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }

        })
            .then(response => {
                
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}