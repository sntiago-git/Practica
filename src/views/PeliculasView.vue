<template>
  <slider-peliculas :peliculasArr="PeliculasArr"></slider-peliculas>
</template>

<script>
import SliderPeliculas from "../components/SliderPeliculas.vue";
import { getPeliculas } from "@/helpers/CrudPeliculas.js"; //crud service

export default {
  components: { SliderPeliculas },
  name: "Peliculas",
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
