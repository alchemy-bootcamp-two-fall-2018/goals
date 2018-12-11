export default {
  signUp(user) {
    return fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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
  }
};