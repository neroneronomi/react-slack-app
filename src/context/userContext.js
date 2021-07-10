import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    //Headers
    const [headers, setHeaders ] = useState(() => {
        const localData = localStorage.getItem('headers');
        return localData ? JSON.parse(localData) : []
    });
    const getHeaders = (data) => {
        setHeaders(data)
    };
    useEffect(() => {
        localStorage.setItem('headers', JSON.stringify(headers))
    },[headers]);
    //Users
    const [users, setUsers] = useState(() => {
        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : []
    });
    const getUsers = (data) => {
        setUsers(data)
    };
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    },[users]);
   //Channels
    const [channels, setChannels] = useState(() => {
        const localData = localStorage.getItem('users');
        return localData ? JSON.parse(localData) : []
    });
    const getChannels = (data) => {
        setChannels(data)
    };
    useEffect(() => {
        localStorage.setItem('channels', JSON.stringify(channels))
    },[channels]);
    return (
        <UserContext.Provider value={{ headers, getHeaders, getUsers, getChannels }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;