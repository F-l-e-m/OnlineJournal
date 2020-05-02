import firebase from 'firebase/app';
import router from '@/router';

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
  async login({ commit }, payload) {
    await firebase.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('IS_AUTH_ON', true);
        router.push('/home');
      }).catch((e) => {
        commit('IS_AUTH_ERROR', e);
      });
  },
  async registration({ commit }, payload) {
    await firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('IS_AUTH_ON', true);
        router.push('/home');
      }).catch((e) => {
        commit('IS_AUTH_ERROR', e);
      });
  },
};

export default actions;
