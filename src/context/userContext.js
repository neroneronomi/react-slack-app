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

    return (
        <UserContext.Provider value={{ headers, getHeaders }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;