import PopupLogin from '@/components/PopupLogin/PopupLogin.vue';
import PopupRegistration from '@/components/PopupRegistration/PopupRegistration.vue';

export default {
  name: 'Auth',
  components: {
    PopupLogin,
    PopupRegistration,
  },
  computed: {
    typePopup() {
      return this.$store.state.auth.popupAuthType;
    },
  },
};
