
export const crearPelicula = (newPelicula) => {

    let pelicula = {
        id: newPelicula.id,
        titulo: newPelicula.titulo,
        genero: newPelicula.genero,
        duracion: newPelicula.duracion,
        descripcion: newPelicula.descripcion,
        tags: [
            newPelicula.tags
        ]
        ,
        director: newPelicula.director,
        tipo: newPelicula.tipo,
    }

    //Tags: Popular, Reciente
    //Tipo: Serie, Pelicula, Novedad

    let peliculasArr = getPeliculas()
    peliculasArr.push(pelicula)

    localStorage.setItem('peliculas', JSON.stringify(peliculasArr))

    return ("Pelicula Creada")
}

export const getPeliculas = () => {

    let Peliculas = JSON.parse(localStorage.getItem('peliculas')) || []
    return Peliculas

}


export const updatePelicula = (id, pelicula) => {

    pelicula = JSON.parse(JSON.stringify(pelicula))

    const Peliculas = getPeliculas()
    let index = Peliculas.findIndex(obj => obj.id == id)
    console.log(index)
    Peliculas[index] = pelicula;
    console.log(pelicula)
    localStorage.setItem("peliculas", JSON.stringify(Peliculas))

    return "Pelicula Actualizada"

}

export const deletePelicula = (deleteId) => {

    const Peliculas = getPeliculas()
    let index = Peliculas.findIndex(obj => obj.id == deleteId)
    Peliculas.splice(index, 1)
    localStorage.setItem("peliculas", JSON.stringify(Peliculas))

    return "Pelicula Borrada"
}  