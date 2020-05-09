import { mapActions } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';
import loginPassword from '@/mixins/LoginPassword';

export default {
  name: 'AuthForm',
  mixins: [loginPassword],
  methods: {
    ...mapActions(['changeAuthPopup', 'setEmailValue', 'setPasswordValue', 'clearAuthData', 'login']),
    changePopup() {
      this.changeAuthPopup('registration');
    },
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.login({ email: this.email, password: this.password });
    },
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  destroyed() {
    this.clearAuthData();
  },
};
