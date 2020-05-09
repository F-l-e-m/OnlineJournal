import { mapActions } from 'vuex';

export default {
  name: 'PopupRegistration',
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'setNameValue', 'clearAuthData', 'login', 'registration', 'changeValid']),
    changePopup() {
      this.changeAuthPopup('login');
    },
    async submit() {
      if (!this.isValidEmail) {
        this.$refs.email.focus();
        return;
      }
      if (!this.isValidPassword) {
        this.$refs.password.focus();
        return;
      }
      if (!this.isValidName) {
        this.$refs.name.focus();
        return;
      }
      await this.registration({ email: this.email, password: this.password, name: this.name });
    },
  },
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
    isValidName() {
      return this.$validate.nameIsValid(this.name);
    },
    errorMessageName() {
      return this.$validate.nameErrorMessage(this.name);
    },
    name: {
      get() {
        return this.$store.state.auth.name.value;
      },
      set(value) {
        this.setNameValue(value);
      },
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
  destroyed() {
    this.clearAuthData();
  },
};
