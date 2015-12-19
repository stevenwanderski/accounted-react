export default {
  loggedIn() {
    return !!localStorage.user
  },

  currentUser() {
    let user = null
    if (localStorage.user) {
      user = JSON.parse(localStorage.user)
    }
    return user
  }
}