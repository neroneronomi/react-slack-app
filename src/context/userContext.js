import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    //Headers Local Storage
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
    //  Contacts Local Storage
    const [contacts, setContacts] = useState(() => {
      const localData = localStorage.getItem('contacts');
      return localData ? JSON.parse(localData) : []
    });
    const getContacts = (data) => {
      setContacts([...contacts, {data}])
    };

    const deleteContact = (id) => {
      setContacts(contacts.filter(contact => contact.data.id !== id))
    }
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    },[contacts]);
    //Handle Logout
    const logoutUser = () => {
      setHeaders([])
      setContacts([])
    };
    return (
        <UserContext.Provider value={{ headers, getHeaders, contacts, getContacts, deleteContact, logoutUser }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;