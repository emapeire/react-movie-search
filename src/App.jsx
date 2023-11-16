import './App.css'
import Movies from './components/Movies'
import useSearch from './hooks/useSearch'
import useMovies from './hooks/useMovies'

export default function App() {
  const { search, handleSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

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
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleSearch}
            value={search}
            name='search'
            type='text'
            placeholder='The Matrix...'
          />
          <button type='sumbit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}
