import { mapActions } from 'vuex';

export default {
  name: 'AuthForm',
  computed: {
    isValidEmail() {
      return this.$validate.emailIsValid(this.email);
    },
    isValidPassword() {
      return this.$validate.passwordIsValid(this.password);
    },
    errorMessageEmail() {
      return this.$validate.emailErrorMessage(this.email);
    },
    errorMessagePassword() {
      return this.$validate.passwordErrorMessage(this.password);
    },
    email: {
      get() {
        return this.$store.state.auth.email.value;
      },
      set(value) {
        this.setEmailValue(value);
      },
    },
    password: {
      get() {
        return this.$store.state.auth.password.value;
      },
      set(value) {
        this.setPasswordValue(value);
      },
    },
  },
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'clearAuthData', 'login', 'changeValid']),
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
