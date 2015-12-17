var user = null
if (localStorage.user) {
  user = JSON.parse(localStorage.user)
}

export default user