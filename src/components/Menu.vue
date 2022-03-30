<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img
        src="img/logo.jpeg"
        width="30"
        height="40"
        class="d-inline-block align-top"
        alt=""
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/catalogo">Catalogo</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/pedidos">Pedidos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cocina">Pendientes de Cocina</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>