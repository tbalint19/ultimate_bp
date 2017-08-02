const stateTree = {

  state: {
    app: "init",
    pendingResponses: [],
    messages: [],
    signup: {
      username: "",
      email: "",
      password: "",
      passwordAgain: "",
      shouldCheckUsername: false,
      shouldCheckEmail: false,
      usernameError: false,
      emailError: false
    },
    login: {
      credential: "",
      password: ""
    }
  },

  data: {

  },

  dictionary: {}

}

export default stateTree
