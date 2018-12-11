export default {
  signUp(user) {
    console.log('api addUsers', user);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }
};