<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Регистрация в онлайн дневнике</span>
      <div class="input-field">
        <input
          id="email"
          ref="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: !isValidEmail }"
        >
        <label for="email">Email</label>
        <small
          v-if="!isValidEmail"
          class="helper-text invalid">
          {{ errorMessageEmail }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          name="password"
          type="password"
          v-model.trim="password"
          :class="{ invalid: !isValidPassword }"
        >
        <label for="password">Пароль</label>
        <small
          v-if="!isValidPassword"
          class="helper-text invalid">
          {{ errorMessagePassword }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          ref="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: !isValidName }"
        >
        <label for="name">Имя</label>
        <small
          v-if="!isValidName"
          class="helper-text invalid">
          {{ errorMessageName }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <button @click.prevent="changePopup">Войти!</button>
      </p>
    </div>
  </form>
</template>

<script src="./PopupRegistration.js"></script>

<style src="./PopupRegistration.scss" scoped lang="scss"></style>
