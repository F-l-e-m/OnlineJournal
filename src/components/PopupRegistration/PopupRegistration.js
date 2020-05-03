import { mapActions } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'PopupRegistration',
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'setNameValue', 'clearAuthData', 'login', 'registration']),
    changePopup() {
      this.changeAuthPopup('login');
    },
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      await this.registration({ email: this.email, password: this.password, name: this.name });
    },
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
  },
  computed: {
    isValidEmail() {
      return (this.$v.email.$dirty && !this.$v.email.required)
        || (this.$v.email.$dirty && !this.$v.email.email);
    },
    isValidPassword() {
      return (this.$v.password.$dirty && !this.$v.password.required)
        || (this.$v.password.$dirty && !this.$v.password.minLength);
    },
    isValidName() {
      return (this.$v.name.$dirty && !this.$v.name.required);
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
    errorMessageName() {
      let errorMessage = '';
      if (this.$v.name.$dirty && !this.$v.name.required) {
        errorMessage = this.$store.state.auth.inputErrorMessages.name.empty;
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
    name: {
      get() {
        return this.$store.state.auth.inputValues.name;
      },
      set(value) {
        this.setNameValue(value);
      },
    },
  },
  destroyed() {
    this.clearAuthData();
  },
};
