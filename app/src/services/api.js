let token = '';

export default {

  setToken(t) {
    token = t;
  },

  signUp(profile) {
    return fetch('api/auth/signup', {
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

  getGoals() {
    return fetch('/api/goals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }

};