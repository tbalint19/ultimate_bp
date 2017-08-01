const stateTree = {

  state: {
    app: "init",
    pendingResponses: [],
    messages: [],
    signup: {
      username: "",
      email: "",
      password: "",
      passwordAgain: ""
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
