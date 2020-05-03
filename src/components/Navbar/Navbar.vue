<template>
  <nav class="nav-wrapper">
    <ul class="right">
      <li>
        <span>{{ name }}</span>
      </li>
      <li>
        <a
          class="dropdown-trigger"
          href="#"
          data-target="dropdown"
          ref="dropdown"
        >
          <i class="material-icons">settings</i>
        </a>

        <ul id='dropdown' class='dropdown-content'>
          <li>
            <router-link to="/profile" class="black-text">
              <i class="material-icons">account_circle</i>Профиль
            </router-link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#" class="black-text" @click.prevent="logoutHandler">
              <i class="material-icons">assignment_return</i>Выйти
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script src="./Navbar.js"></script>
