import _actions from './actions';

export const state = () => ({
  popupAuthType: 'login',
  isAuth: null,
  loginErrorMessage: '',
  email: {
    value: '',
    isValid: true,
    errorMessages: {
      empty: 'Поле не должно быть пустым',
      incorrect: 'Введите корректный email',
    },
  },
  password: {
    value: '',
    isValid: true,
    errorMessages: {
      empty: 'Поле не должно быть пустым',
      minLength: 'Пароль должен содержать более: ',
    },
  },
  name: {
    value: '',
    isValid: true,
    errorMessages: {
      empty: 'Это обязательное поле',
    },
  },
});

export const mutations = {
  INPUT_IS_VALID: (state, { value, type }) => {
    state[type].isValid = value;
  },
  CHANGE_AUTH_POPUP: (state, payload) => {
    state.popupAuthType = payload;
  },
  CHANGE_EMAIL_VALUE: (state, payload) => {
    state.email.value = payload;
  },
  CHANGE_PASSWORD_VALUE: (state, payload) => {
    state.password.value = payload;
  },
  CHANGE_NAME_VALUE: (state, payload) => {
    state.name.value = payload;
  },
  CLEAR_AUTH_DATA: (state) => {
    state.email.value = '';
    state.password.value = '';
    state.name.value = '';
  },
  IS_AUTH_ON: (state, payload) => {
    state.isAuth = payload;
  },
  IS_AUTH_ERROR: (state, { message }) => {
    state.loginErrorMessage = message;
  },
  GET_USER_INFO: (state, payload) => {
    console.log(payload);
  },
};

export const actions = _actions;
