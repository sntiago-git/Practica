<template>
  <div v-if="peliculasArr" class="container">
    <div class="container-fluid mt-5">
      <h2 class="text-capitalize text-start text-light">{{ titulo }}</h2>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        <div
          style="width: 250px"
          class=""
          v-for="pelicula in peliculasArr"
          :key="pelicula.titulo"
        >
          <div class="card h-100">
            <div
              class="position-absolute top-0 end-0"
              style="border-spacing: 15px"
            >
              <button
                type="button"
                class="btn btn-dark p-1 me-1 mt-1"
                @click="updatePelicula(JSON.stringify(pelicula))"
              >
                <i class="bi bi-pencil"></i>
              </button>

              <button
                type="button"
                class="btn btn-dark p-1 me-1 mt-1"
                @click="deletePelicula(pelicula.id)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png"
              class="card-img-top"
              alt="Caratula"
            />
            <div class="card-body">
              <h5 class="card-title text-capitalize">{{ pelicula.titulo }}</h5>

              <p class="card-text description">
                <small class="text-muted">{{ pelicula.descripcion }}</small>
              </p>

              <p class="card-text">
                <small class="text-muted d-block"
                  >Duración: {{ pelicula.duracion }}</small
                >
                <small class="text-muted d-block"
                  >Genero: {{ pelicula.genero }}</small
                >
                <small class="text-muted d-block"
                  >Director: {{ pelicula.director }}</small
                >
                <small
                  class="text-muted d-block fst-italic"
                  v-for="tag in pelicula.tags"
                  :key="tag"
                  >{{ tag }}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { deletePelicula } from "@/helpers/CrudPeliculas.js";
export default {
  props: {
    peliculasArr: {
      type: Array,
      required: true,
      default: [],
    },
    titulo: {
      type: String,
      required: true,
      default: "titulo",
    },
  },

  methods: {
    updatePelicula(pelicula) {
      this.$router.push(`/actualizar/${pelicula}`);
    },

    deletePelicula(id) {
      const response = deletePelicula(id);
      console.log(response);
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  height: 5px;
  width: 4px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #343a40 !important;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
::-webkit-scrollbar-thumb:horizontal {
  background: gray;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:horizontal:hover {
  background: #555;
}

.scrolling-wrapper {
  overflow-x: auto;
}

body {
  background-color: black;
  color: #fff;
  font-family: "system-ui";
}

h1 {
  font-weight: 700;
  font-size: 3.4em;
}

.card-block {
  height: 300px;
  background-color: #fff;
  border: none;
  background-position: center;
  background-size: cover;
  transition: all 0.2s ease-in-out !important;
  border-radius: 24px;
}

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>