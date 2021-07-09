export const registerUser = (values) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }
    return fetch('http://206.189.91.54//api/v1/auth/', requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
}

export const loginUser = (values) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        redirect: 'follow'
    }
    return fetch('http://206.189.91.54//api/v1/auth/sign_in', requestOptions)
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.errors) || response.status;
            return Promise.reject(error);
        } else {
            const userData = {
                'access-token': response.headers.get("access-token"),
                client: response.headers.get("client"),
                expiry: response.headers.get("expiry"),
                uid: response.headers.get("uid"),
                id: data.data.id
            }
            return Promise.resolve(userData)
        }
    })
}