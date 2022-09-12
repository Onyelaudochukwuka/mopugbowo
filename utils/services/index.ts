import { BlogPost } from "../../models/blog"

export const postBlogPost = async (data: BlogPost) => { 
    console.log(JSON.stringify(data));
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}