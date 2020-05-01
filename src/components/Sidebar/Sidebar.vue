<template>
  <ul class="sidenav sidenav-fixed light-blue lighten-2" :class="{open: value}">

    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script src="./Sidebar.js"></script>

<style src="./Sidebar.scss" lang="scss" scoped></style>
