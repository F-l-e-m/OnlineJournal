import { mapActions } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';
import loginPassword from '@/mixins/LoginPassword';

export default {
  name: 'PopupRegistration',
  mixins: [loginPassword],
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
    isValidName() {
      return (this.$v.name.$dirty && !this.$v.name.required);
    },
    errorMessageName() {
      let errorMessage = '';
      if (this.$v.name.$dirty && !this.$v.name.required) {
        errorMessage = this.$store.state.auth.inputErrorMessages.name.empty;
      }
      return errorMessage;
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
