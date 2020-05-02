import _actions from './actions';

export const state = () => ({
  popupAuthType: 'login',
  inputValues: {
    email: '',
    password: '',
  },
  inputErrorMessages: {
    email: {
      empty: 'Поле не должно быть пустым',
      incorrect: 'Введите корректный email',
    },
    password: {
      empty: 'Поле не должно быть пустым',
      minLength: 'Пароль должен содержать более: ',
    },
  },
});

export const mutations = {
  CHANGE_AUTH_POPUP: (state, payload) => {
    state.popupAuthType = payload;
  },
  CHANGE_EMAIL_VALUE: (state, payload) => {
    state.inputValues.email = payload;
  },
  CHANGE_PASSWORD_VALUE: (state, payload) => {
    state.inputValues.password = payload;
  },
  CLEAR_AUTH_DATA: (state) => {
    state.inputValues.email = '';
    state.inputValues.password = '';
  },
};

export const actions = _actions;
