<template>
  <form-pelicula
    titulo="Actualizar Pelicula"
    :peliculaToEdit="pelicula"
    @my-update="updatePelicula"
  ></form-pelicula>
</template>

<script>
import { updatePelicula } from "@/helpers/CrudPeliculas.js";
import FormPelicula from "../components/FormPelicula.vue";

export default {
  name: "Update",
  data() {
    return {
      pelicula: {},
    };
  },
  components: { FormPelicula },
  methods: {
    updatePelicula(id, pelicula) {
      const response = updatePelicula(id, pelicula);
      console.log(response);
    },
  },

  created() {
    let pelicula = this.$route.params;
    let objPelicula = JSON.parse(pelicula.pelicula);

    console.log(objPelicula);
    this.pelicula = objPelicula;
  },
};
</script>

<style>
</style>