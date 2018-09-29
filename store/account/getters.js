export default {
  getTargetUser: state => login => state.users.filter(user => user.login === login)[0],
  getLoginState: state => state.isLogedIn,
}

// wez usera po loginie, nie po id. sprawdz czy user istnieje z takim loginem, jesli nie to komunikat, jesli tak to sprwdz poprawnosc hasla
