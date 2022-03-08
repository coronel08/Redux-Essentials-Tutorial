import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate, useParams } from "react-router-dom"

import { postUpdated } from "./postsSlice"


export function EditPostForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const {postId} = params

    const post = useSelector(state => state.posts.find(post => post.id === postId))
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(postUpdated({
                id: postId,
                title, 
                content
            }))
            navigate(`/posts/${postId}`)
        }
    }


    return (
        <section>
            <h2> Edit Post </h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="Whats on your mind"
                    value={title}
                    onChange= {(e) => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content: </label>
                <textarea 
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange= {(e) => setContent(e.target.value) }
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}   

