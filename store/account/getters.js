export default {
  getLoginState: state => state.isLogedIn,
  getUserId: state => state.user.id,
  getLoginStatus: state => state.loginFailure,
}
