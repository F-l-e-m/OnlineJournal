import { mapActions } from 'vuex';

export default {
  name: 'AuthForm',
  methods: {
    ...mapActions(['changeAuthPopup']),
    changePopup() {
      this.changeAuthPopup('registration');
    },
  },
};
