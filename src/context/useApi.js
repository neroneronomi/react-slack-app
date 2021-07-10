export const registerUser = (email, password, password_confirmation) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email, password, password_confirmation)
    };
    return fetch('http://206.189.91.54//api/v1/auth/', requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
}
export const loginUser = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email, password),
    };
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
    });
}
export const getUsers = (headers) => {
    const requestOptions = {
        method: 'GET',
        headers: headers,
      };
    return fetch("http://206.189.91.54//api/v1/users", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
}
export const createChannel = (headers, name, user_ids) => {
    const Form = new FormData()
    Form.set('name', name)
    Form.set('user_ids', user_ids)
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: Form
      };
    return fetch("http://206.189.91.54//api/v1/channels", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
}
export const getChannels = (headers) => {
    const requestOptions = {
        method: 'GET',
        headers: headers,
    };
    return fetch('http://206.189.91.54//api/v1/channels', requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
}