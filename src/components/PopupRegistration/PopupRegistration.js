import { mapActions, mapState } from 'vuex';

export default {
  name: 'PopupRegistration',
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'setNameValue', 'clearAuthData', 'registration']),
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
    ...mapState(['auth']),
    isValidEmail() {
      return this.$validate.emailIsValid(this.email);
    },
    isValidPassword() {
      return this.$validate.passwordIsValid(this.password);
    },
    isValidName() {
      return this.$validate.nameIsValid(this.name);
    },
    errorMessageEmail() {
      const typeErrorMessage = this.$validate.emailErrorMessage(this.email);
      return this.auth.email.errorMessages[typeErrorMessage];
    },
    errorMessagePassword() {
      const typeErrorMessage = this.$validate.passwordErrorMessage(this.password);
      return this.auth.password.errorMessages[typeErrorMessage];
    },
    errorMessageName() {
      const typeErrorMessage = this.$validate.nameErrorMessage(this.name);
      return this.auth.name.errorMessages[typeErrorMessage];
    },
    name: {
      get() {
        return this.auth.name.value;
      },
      set(value) {
        this.setNameValue(value);
      },
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
  destroyed() {
    this.clearAuthData();
  },
};
