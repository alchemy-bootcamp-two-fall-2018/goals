// let token = '';

const getOptions = (method, data) => {
    const options = {
        method,
        headers: {}
        };
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    return options;
    };

export default {

    signUp(user) {
        return fetch('api/auth/signup', getOptions('POST', user))
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
            });
        });
    },

    signIn(credentials) {
        return fetch('/api/auth/signin', getOptions('POST', credentials))
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
            });
        });
    },

    getGoals() {
        return fetch('/api/goals', getOptions('GET'))
        .then(response => response.json());
    },

};

