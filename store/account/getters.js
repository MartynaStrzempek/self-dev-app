export default {
  getUser: state => id => state.users.filter(user => user.id === id)[0],
  getLoginState: state => userId => state.users.filter(user => user.id === id)[0].isLogedIn,
}

// wez usera po loginie, nie po id. sprawdz czy user istnieje z takim loginem, jesli nie to komunikat, jesli tak to sprwdz poprawnosc hasla
