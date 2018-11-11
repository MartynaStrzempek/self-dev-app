export default {
  getLoginState: state => state.isLogedIn,
  getUserId: state => state.userId,
  getToken: state => state.token,
  getLoginStatus: state => state.loginFailure,
}
