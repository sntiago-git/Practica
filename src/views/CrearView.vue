<template>
  <form-pelicula
    titulo="Crear Pelicula"
    @my-create="createPelicula"
  ></form-pelicula>
</template>

<script>
import { crearPelicula } from "@/helpers/CrudPeliculas.js";
import FormPelicula from "../components/FormPelicula.vue";

export default {
  name: "Crear",
  components: { FormPelicula },
  methods: {
    createPelicula(pelicula) {
      const response = crearPelicula(pelicula);
      console.log(response);
    },
  },
};
</script>

<style>
</style>