export default {
  name: 'Navbar',
  mounted() {
    window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  methods: {
    logout() {
      this.$router.push('/login?message=logout');
    },
  },
};
