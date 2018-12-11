let token = '';
const getOptions = (method, data) => {
  const options = {
    method,
    headers: {}
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

  signUp(profile) {
    return fetch('/api/auth/signup', getOptions('POST', profile))
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

  addGoal(goal) {
    return fetch('/api/goals', getOptions('POST', goal))
      .then(response => response.json());
  },

  updateGoal(goal) {
    return fetch(`/api/goals/${goal.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(goal)
    })
      .then(response => response.json());
  }

};