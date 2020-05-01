import _actions from './actions';

export const state = () => ({
  popupAuthType: 'login',
});

export const mutations = {
  CHANGE_AUTH_POPUP: (state, payload) => {
    state.popupAuthType = payload;
  },
};

export const actions = _actions;
