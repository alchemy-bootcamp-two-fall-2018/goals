let token = '';
const getOptions = (method, data) => {
    const options = {
        method, headers: {}
    };
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    if(token) {
        options.headers.Authorization = token;
    }
    return options;
};

export default {

    setToken(t) {
        token = t;
    },

    signIn(profile) {
        // posts data to the database and checks if it in the DB 
        return fetch('/api/auth/signin', getOptions('POST', profile))
        // runs a console log to check connection
            .then(response => {
                console.log('response from the API', response);
                // if it passes checks return the reaponse data in json format
                if(response.ok) {
                    return response.json();
                }
                // if it fails return an error in json format
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
                    });
            });

    },

    signUp(profile) {
        // posts data to the database and checks if it in the DB 
        return fetch('/api/auth/signup', getOptions('POST', profile))
            .then(response => {
                console.log('response from the API', response);
    
                if(response.ok) {
                    return response.json();
                }
                // if it fails return an error in json format
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
                    });
            });

    },
    updateGoal(goal) {
        return fetch(`/api/goals/${goal.id}`, getOptions('PUT', goal))
            .then(response => {   
                if(response.ok) {
                    return response.json();
                }
                // if it fails return an error in json format
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
                    });

            });
    },

    getStats() {
        return fetch('/api/goals/stats', getOptions('GET'))
            .then(response => response.json());
    },

    getGoals() {
        return fetch('/api/goals', getOptions('GET')) 
            .then(response => response.json());
    }, 
    addGoal(goal) {
        return fetch('/api/goals', getOptions('POST', goal))
            .then(response => response.json());
    }


};