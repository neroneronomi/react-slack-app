import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [headers, setHeaders] = useState(() => {
        const localData = localStorage.getItem('headers');
        return localData ? JSON.parse(localData) : []
    });
    const getHeaders = (data) => {
        setHeaders(data)
    };
    useEffect(() => {
        localStorage.setItem('headers', JSON.stringify(headers))
    },[headers]);

    
    const [channel, setChannel] = useState()

    const getChannelID = (id) => {
      setChannel(id)
      console.log(channel)
    };
    return (
        <UserContext.Provider value={{ headers, getHeaders, channel, getChannelID }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;