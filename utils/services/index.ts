import { BlogPost } from "../../models/blog"

export const postBlogPost = async (data: BlogPost) => { 
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}
export const getPosts = async () => { 
    const res = await fetch('/api/getPosts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return res.json()
}
export const fetchPost = async (slug:string) => { 
    const res = await fetch(`http://localhost:3000/api/fetchPost?slug=${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return res.json()
}