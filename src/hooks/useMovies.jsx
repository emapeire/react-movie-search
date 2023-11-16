import { useEffect, useState } from 'react'
import fetchMovies from '../services/movies'

export default function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies?.Search

  const propsMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  useEffect(() => {
    fetchMovies({ search, setResponseMovies })
  }, [search])

  return { movies: propsMovies, getMovies: fetchMovies }
}
