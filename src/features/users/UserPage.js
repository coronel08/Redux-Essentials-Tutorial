import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { selectUserById } from './usersSlice'
import { SelectAllPosts } from '../posts/postsSlice'

export function UserPage(){
    const params = useParams()
    const {userId} = params

    const user = useSelector(state => selectUserById(state, userId))

    // Can select the state within the redux useSelector like below
    // const SelectAllPosts = useSelector(state => state.posts)
    // const postsForUser = useSelector(state => {
    //     return SelectAllPosts.filter(post => post.user === userId)
    // })

    // Or can select the logic/state in the slice like below. Imports SelectAllPosts
    const postsForUser = useSelector(state => {
        const allPosts = SelectAllPosts(state)
        return allPosts.filter(post => post.user === userId)
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