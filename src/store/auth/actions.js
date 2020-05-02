const actions = {
  changeAuthPopup({ commit }, payload) {
    commit('CHANGE_AUTH_POPUP', payload);
  },
  setEmailValue({ commit }, payload) {
    commit('CHANGE_EMAIL_VALUE', payload);
  },
  setPasswordValue({ commit }, payload) {
    commit('CHANGE_PASSWORD_VALUE', payload);
  },
  clearAuthData({ commit }) {
    commit('CLEAR_AUTH_DATA');
  },
};

export default actions;
