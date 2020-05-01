export default {
  name: 'Navbar',
  mounted() {
    console.log(this.$refs.dropdown);
    window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  methods: {
    logout() {
      console.log(1);
      this.$router.push('/login?message=logout');
    },
  },
};
