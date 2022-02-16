<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/series">Series TV</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/peliculas"
              >Peliculas</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/novedades"
              >Novedades Mas Vistas</router-link
            >
          </li>
        </ul>

        <div class="form-inline my-2 my-lg-0 crear">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/crear"
                >Crear Pelicula</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
.crear {
  margin-right: 200px;
}

@media (max-width: 992px) {
  .crear {
    margin: 0;
  }
  .navbar-brand{
    margin: 0;
  }
}
</style>