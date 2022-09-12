import { BlogPost } from "../../models/blog"

export const postBlog = async (data: BlogPost) => { 
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}