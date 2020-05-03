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
  setNameValue({ commit }, payload) {
    commit('CHANGE_NAME_VALUE', payload);
  },
  clearAuthData({ commit }) {
    commit('CLEAR_AUTH_DATA');
  },
  async login({ commit }, payload) {
    await firebase.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        commit('IS_AUTH_ON', true);
        router.push('/');
      }).catch((e) => {
        commit('IS_AUTH_ERROR', e);
      });
  },
  async registration({ commit, dispatch }, payload) {
    await firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(async () => {
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({ name: payload.name });
        commit('IS_AUTH_ON', true);
        router.push('/');
      }).catch((e) => {
        commit('IS_AUTH_ERROR', e);
      });
  },
  getUid() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  },
  async getCurrentUser({ commit, dispatch }) {
    const uid = await dispatch('getUid');
    const user = firebase.database().ref(`/users/${uid}/info`).get('name');
    commit('GET_USER_INFO', user);
  },
  async logout() {
    await firebase.auth().signOut();
    router.push('/login?logout=logout');
  },
};

export default actions;
