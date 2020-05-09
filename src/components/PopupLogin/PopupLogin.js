import { mapActions, mapState } from 'vuex';

export default {
  name: 'AuthForm',
  computed: {
    ...mapState(['auth']),
    isValidEmail() {
      return this.$validate.emailIsValid(this.email);
    },
    isValidPassword() {
      return this.$validate.passwordIsValid(this.password);
    },
    errorMessageEmail() {
      const typeErrorMessage = this.$validate.emailErrorMessage(this.email);
      return this.auth.email.errorMessages[typeErrorMessage];
    },
    errorMessagePassword() {
      const typeErrorMessage = this.$validate.passwordErrorMessage(this.password);
      return this.auth.password.errorMessages[typeErrorMessage];
    },
    email: {
      get() {
        return this.auth.email.value;
      },
      set(value) {
        this.setEmailValue(value);
      },
    },
    password: {
      get() {
        return this.auth.password.value;
      },
      set(value) {
        this.setPasswordValue(value);
      },
    },
  },
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'clearAuthData', 'login']),
    changePopup() {
      this.changeAuthPopup('registration');
    },
    submit() {
      if (!this.isValidEmail) {
        this.$refs.email.focus();
        return;
      }
      if (!this.isValidPassword) {
        this.$refs.password.focus();
        return;
      }
      this.login({ email: this.email, password: this.password });
    },
  },
  destroyed() {
    this.clearAuthData();
  },
};
