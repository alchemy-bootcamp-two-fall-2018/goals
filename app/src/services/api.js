let token = '';

export default {

  setToken(t) {
    token = t;
  },

  signUp(profile) {
    return fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
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
    return fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
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
    return fetch('/api/goals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => response.json());
  },

  addGoal(goal) {
    return fetch('/api/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(goal)
    })
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