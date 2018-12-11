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
    getGoals() { 
        console.log('hello?');
        return fetch('/api/goals', getOptions('GET'))
            .then(response => response.json());
    }
};
