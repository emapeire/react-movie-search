import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/without-results.json'

export default function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>React Movie Search</h1>
        <form className='form'>
          <label className='label'>Put yout movie here:</label>
          <input type='text' placeholder='Matrix...' />
          <button type='sumbit'>Search</button>
        </form>
      </header>
      <main>
        {hasMovies ? (
          <il>
            {movies.map((movie) => (
              <lu key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </lu>
            ))}
          </il>
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  )
}
