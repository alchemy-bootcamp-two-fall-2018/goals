export default {
  getGoals() {
    return fetch('/api/goals')
      .then(response => response.json ());
  },

};