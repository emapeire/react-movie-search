import './App.css'
import Movies from './components/Movies'
import useSearch from './hooks/useSearch'
import useMovies from './hooks/useMovies'

export default function App() {
  const { search, handleSearch, errorSearch } = useSearch()
  const { movies, getMovies, loadingMovies } = useMovies({
    search
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>React Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: errorSearch ? 'red' : 'transparent'
            }}
            onChange={handleSearch}
            value={search}
            name='search'
            type='text'
            placeholder='The Matrix...'
          />
          <button type='sumbit'>Search</button>
        </form>
        {errorSearch && <p className='error'>{errorSearch}</p>}
      </header>
      <main>
        {loadingMovies ? (
          <p className='loading'>Loading...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  )
}
