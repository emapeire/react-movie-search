import { API_MOVIE_URL } from '../utils/constants'
import withoutResults from '../mocks/without-results.json'
// import withResults from '../mocks/with-results.json'

export default function fetchMovies({ search, setResponseMovies }) {
  if (search) {
    // setResponseMovies(withResults)
    fetch(`${API_MOVIE_URL}${search}`)
      .then((res) => res.json())
      .then((json) => setResponseMovies(json))
  } else {
    setResponseMovies(withoutResults)
  }
}
