const loginPassword = {
  computed: {
    isValidEmail() {
      return (this.$v.email.$dirty && !this.$v.email.required)
        || (this.$v.email.$dirty && !this.$v.email.email);
    },
    isValidPassword() {
      return (this.$v.password.$dirty && !this.$v.password.required)
        || (this.$v.password.$dirty && !this.$v.password.minLength);
    },
    loginErrorMessage() {
      return this.$store.state.auth.loginErrorMessage;
    },
    errorMessageEmail() {
      let errorMessage = '';
      if (this.$v.email.$dirty && !this.$v.email.required) {
        errorMessage = this.$store.state.auth.inputErrorMessages.email.empty;
      } else if (this.$v.email.$dirty && !this.$v.email.email) {
        errorMessage = this.$store.state.auth.inputErrorMessages.email.incorrect;
      }
      return errorMessage;
    },
    errorMessagePassword() {
      let errorMessage = '';
      if (this.$v.password.$dirty && !this.$v.password.required) {
        errorMessage = this.$store.state.auth.inputErrorMessages.password.empty;
      } else if (this.$v.password.$dirty && !this.$v.password.minLength) {
        errorMessage = `${this.$store.state.auth.inputErrorMessages.password.minLength}
                        ${this.$v.password.$params.minLength.min} символов`;
      }
      return errorMessage;
    },
    email: {
      get() {
        return this.$store.state.auth.inputValues.email;
      },
      set(value) {
        this.setEmailValue(value);
      },
    },
    password: {
      get() {
        return this.$store.state.auth.inputValues.password;
      },
      set(value) {
        this.setPasswordValue(value);
      },
    },
  },
  destroyed() {
    this.clearAuthData();
  },
};

export default loginPassword;
