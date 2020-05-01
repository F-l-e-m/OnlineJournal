module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/styles/variables.scss";
          @import "~@/assets/styles/normalize.scss";
          @import '~materialize-css/dist/css/materialize.min.css';
        `,
      },
    },
  },
};
