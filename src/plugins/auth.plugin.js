export default {
  install(Vue) {
    const vue = Vue;
    const patterns = {
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /[A-Za-z0-9]/,
      name: /^[A-z]+$/i,
    };
    vue.prototype.$validate = {
      emailIsValid: (email) => patterns.email.test(email),
      emailErrorMessage: (email) => {
        if (!email) return 'empty';
        return patterns.email.test(email) ? '' : 'incorrect';
      },
      passwordIsValid: (pass) => {
        let isValid = false;
        if (pass.length >= 6 && patterns.password.test(pass)) isValid = true;
        return isValid;
      },
      passwordErrorMessage: (pass) => {
        let errorMessage = '';
        if (!pass) errorMessage = 'empty';
        if (pass.length <= 6) errorMessage = 'minError';
        if (!patterns.password.test(pass)) errorMessage = 'incorrect';
        return errorMessage;
      },
      nameIsValid: (name) => patterns.name.test(name),
      nameErrorMessage: (name) => {
        if (!name) return 'empty';
        return patterns.email.test(name) ? '' : 'incorrect';
      },
    };
  },
};
