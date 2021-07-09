import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {

    //Get Headers from login
    const [headers, setHeaders ] = useState(() => {
        const localData = localStorage.getItem('headers');
        return localData ? JSON.parse(localData) : []
    });
    const getHeaders = (userData) => {
        setHeaders(userData)
    }
    useEffect(() => {
        localStorage.setItem('headers', JSON.stringify(headers))
    },[headers])
    //End

    //Get Users List
    const [users, setUsers] = useState(() => {
        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
        if (headers.length === 0 ) {
            return
        } else {
        fetch("http://206.189.91.54//api/v1/users", {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(result => setUsers(result.data))
            
        }
    },[users, headers]);
    //End

    return (
        <UserContext.Provider value={{ users, getHeaders }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;