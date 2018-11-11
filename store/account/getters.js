export default {
  getTargetUser: state => login => state.users.find(user => user.login === login),
  getLoginState: state => state.isLogedIn,
  getUserId: state => state.userId,
  getUsers: state => state.users,
}
