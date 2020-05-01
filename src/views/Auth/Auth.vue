<template>
  <div class="auth">
    <PopupLogin v-if="typePopup === 'login'" />
    <PopupRegistration v-if="typePopup === 'registration'" />
  </div>
</template>

<script src="./Auth.js"></script>

<style src="./Auth.scss" scoped lang="scss"></style>
