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
      .then(response => response.json());
  },

  signIn(credentials) {
    return fetch('/api/auth/signin', getOptions('POST', credentials))
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