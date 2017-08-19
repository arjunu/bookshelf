import 'whatwg-fetch';

/**
 * Function to make all fetch calls or rest calls.
 * @param url
 * @param options
 * @return object
 * **/

export default function request(url, options = {}) {
    if (options.body)
        options.body = typeof options.body !== 'string' ? JSON.stringify(options.body) : options.body;

    //Default headers for rest calls.
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    //Other headers for rest calls.
    options.headers = options.headers ? Object.assign({}, defaultHeaders, options.headers) : defaultHeaders;

    return fetch(url, {
        credentials: 'same-origin',
        ...options
    }).then(response => {
        //return if response status code === 200 else throwing error
        if ((response.status === 200 || response.status === 201) && response.length !== 0) {
            return response.json();
        }

        throw response.statusText;
    }).then(response => {
        return response;
    });

}