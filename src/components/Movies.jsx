import { propsMovies } from '../utils/props-movies'
import responseMovies from '../mocks/with-results.json'
// import withoutResults from './mocks/without-results.json'

export default function Movies() {
  const movies = responseMovies.Search.filter((movie) => movie.Type === 'movie')
  const hasMovies = movies?.length > 0

  if (!hasMovies) return <p>No movies found</p>

  return (
    <ul>
      {propsMovies(movies).map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
