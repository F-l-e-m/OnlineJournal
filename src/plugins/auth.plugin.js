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
    // vue.prototype.$isValid = (type) => {
    //   let isValid = null;
    //   switch (type) {
    //     case 'email':
    //       isValid = (this.$v.email.$dirty && !this.$v.email.required)
    //         || (this.$v.email.$dirty && !this.$v.email.email);
    //       break;
    //     case 'password':
    //       isValid = (this.$v.password.$dirty && !this.$v.password.required)
    //         || (this.$v.password.$dirty && !this.$v.password.minLength);
    //       break;
    //     case 'name':
    //       isValid = (this.$v.name.$dirty && !this.$v.name.required);
    //       break;
    //     default:
    //       break;
    //   }
    //   return isValid;
    // };
    // vue.prototype.$errorMessage = (type) => {
    //   let errorMessage = '';
    //   switch (type) {
    //     case 'email':
    //       if (this.$v.email.$dirty && !this.$v.email.required) {
    //         errorMessage = 'empty';
    //       } else if (this.$v.email.$dirty && !this.$v.email.email) {
    //         errorMessage = 'incorrect';
    //       }
    //       break;
    //     case 'password':
    //       if (this.$v.password.$dirty && !this.$v.password.required) {
    //         errorMessage = 'empty';
    //       } else if (this.$v.password.$dirty && !this.$v.password.minLength) {
    //         errorMessage = 'minLength';
    //       }
    //       break;
    //     case 'name':
    //       if (this.$v.name.$dirty && !this.$v.name.required) {
    //         errorMessage = 'empty';
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    //   return errorMessage;
    // };
  },
};
