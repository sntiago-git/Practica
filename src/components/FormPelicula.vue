<template>
  <section class="vh-100 bg-dark">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-dark" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    {{ titulo }}
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          id="id"
                          class="form-control"
                          v-model="pelicula.id"
                        />
                        <label class="form-label" for="id">Id</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="titulo"
                          class="form-control"
                          v-model="pelicula.titulo"
                        />
                        <label class="form-label" for="titulo">Titulo</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="duracion"
                          class="form-control"
                          v-model="pelicula.duracion"
                        />
                        <label class="form-label" for="duracion"
                          >Duración</label
                        >
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="descripcion"
                          class="form-control"
                          v-model="pelicula.descripcion"
                        />
                        <label class="form-label" for="descripcion"
                          >Descripcion</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="tags"
                          class="form-control"
                          v-model="pelicula.tags"
                        />
                        <label class="form-label" for="tags">Tags</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="director"
                          class="form-control"
                          v-model="pelicula.director"
                        />
                        <label class="form-label" for="director"
                          >Director</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="genero"
                          class="form-control"
                          v-model="pelicula.genero"
                        />
                        <label class="form-label" for="genero">Genero</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="tipo"
                          class="form-control"
                          v-model="pelicula.tipo"
                        />
                        <label class="form-label" for="tipo">Tipo</label>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-md w-100"
                        @click="save"
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="
                    col-md-10 col-lg-6 col-xl-7
                    d-flex
                    align-items-center
                    order-1 order-lg-2
                  "
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pelicula: {
        titulo: "",
        genero: "",
        duracion: "",
        descripcion: "",
        tags: [],
        director: "",
        tipo: "",
      },

      action: "",
    };
  },

  props: {
    titulo: {
      type: String,
      default: "Titulo",
      required: true,
    },
    peliculaToEdit: {
      type: Object,
      required: false,
      default: undefined,
    },
  },

  methods: {
    save() {
      switch (this.action) {
        case "create":
          this.$emit("myCreate", this.pelicula);
          break;
        case "update":
          this.$emit("myUpdate", this.peliculaToEdit.id, this.pelicula);
          break;
      }
    },
  },

  created() {
    if (this.peliculaToEdit != undefined) {
      console.log(this.peliculaToEdit);
      this.pelicula = this.peliculaToEdit;
      this.action = "update";
    } else {
      console.log("Create");
      this.action = "create";
    }
  },
};
</script>
<style>
</style>
