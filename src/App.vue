<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout';
    },
  },
  components: {
    DefaultLayout,
    AuthLayout,
  },
};
</script>

<style lang="scss">

html {
  font-size: 93.75%
}
</style>
