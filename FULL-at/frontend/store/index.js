const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  token: null,
  _id: null,
  firstname: 'Amartaivan',
  lastname: 'Ganbat'
})
//gettersiig shuud duudna.
export const mutations = {
  setAuth(state, data){
    state.token = data.token;
    state._id = data._id;
  },
  removeAuth(state){ //shuud duudna
    state.token = null;
    state._id = null;
  }
}

export const actions = { // actioniig dispatchaar duudna.
  async nuxtServerInit({ commit }, { req, $axios }){
    if(req.headers.cookie){
      const parsed = cookieparser.parse(req.headers.cookie);
      let res = await $axios.$get('http://localhost:8080/mjolnir/' + parsed._id + "/" + parsed.token)
      if(res.success) commit('setAuth', parsed);
    }
  },
  login({ commit }, {req, $axios}, data){
    commit('setAuth', data); //mutations iig duudahdaa commit hiine
  },
  logout({commit}){
    commit('removeAuth');
  }
}
