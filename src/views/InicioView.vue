<template>
  <slider-peliculas :peliculasArr="PeliculasArr" titulo="Recientes"></slider-peliculas>
  <slider-peliculas :peliculasArr="PeliculasArr" titulo="Populares"></slider-peliculas>
  <slider-peliculas :peliculasArr="PeliculasArr" titulo="Series y Peliculas"></slider-peliculas>
</template>

<script>
import SliderPeliculas from "../components/SliderPeliculas.vue";
import { getPeliculas } from "@/helpers/CrudPeliculas.js"; //crud service

export default {
  components: { SliderPeliculas },
  name: "Inicio",
  data() {
    return {
      PeliculasArr: [],
    };
  },
  methods: {},

  created() {
    this.PeliculasArr = getPeliculas();
  },
};
</script>
