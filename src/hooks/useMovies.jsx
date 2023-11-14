import responseMovies from '../mocks/with-results.json'
// import withoutResults from './mocks/without-results.json'

export default function useMovies() {
  const movies = responseMovies.Search.filter((movie) => movie.Type === 'movie')

  const propsMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: propsMovies }
}
