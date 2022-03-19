import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { selectUserById } from './usersSlice'

export function UserPage(){
    // const {userId} = matchMedia.params
    const params = useParams()
    const {userId} = params

    const user = useSelector(state => selectUserById(state, userId))

    const SelectAllPosts = useSelector(state => state.posts)
    const postsForUser = useSelector(state => {
        return SelectAllPosts.filter(post => post.uiser === userId)
    })

    const postTitles = postsForUser.map(post => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ))


    return (
        <section>
            <h2>{user.name}</h2>
            <ul>{postTitles}</ul>
        </section>
    )
}