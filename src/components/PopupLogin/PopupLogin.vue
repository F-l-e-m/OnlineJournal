<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Вход в онлайн дневник</span>
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
          ref="password"
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
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <button @click.prevent="changePopup">Зарегистрироваться</button>
      </p>
    </div>
  </form>
</template>

<script src="./PopupLogin.js"></script>

<style src="./PopupLogin.scss" scoped lang="scss"></style>
