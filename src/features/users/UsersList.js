import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './usersSlice'

export const UserList = () => {
    const users = useSelector(selectAllUsers)
    // const users = useSelector(state => state.users) // can also be written this way or abstracted into slice file. 


    return (
        <section>
            <h2>Users</h2>
            <ul>{users.map(user => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}</ul>
        </section>
    )
}