<template>
  <div class="default-layout">
    <Sidebar />
    <div class="default-layout__content">
      <Navbar />
      <router-view class="container default-layout__page" />
    </div>
  </div>
</template>

<script src="./DefaultLayout.js"></script>

<style src="./DefaultLayout.scss" scoped lang="scss"></style>
