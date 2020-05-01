import { mapActions } from 'vuex';

export default {
  name: 'PopupRegistration',
  methods: {
    ...mapActions(['changeAuthPopup']),
    changePopup() {
      this.changeAuthPopup('login');
    },
  },
};
