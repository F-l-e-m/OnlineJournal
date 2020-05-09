import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  mounted() {
    window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  methods: {
    ...mapActions(['logout']),
    async logoutHandler() {
      await this.logout();
    },
  },
  computed: {
    name() {
      return this.$store.state.auth.name.value;
    },
  },
};
