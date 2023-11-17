/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import Movies from './components/Movies'
import useSearch from './hooks/useSearch'
import useMovies from './hooks/useMovies'
import { useState } from 'react'
import useDebounce from './hooks/useDebounce'

export default function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, errorSearch } = useSearch()
  const { movies, getMovies, loadingMovies } = useMovies({
    search,
    sort
  })

  const debouncedSearch = useDebounce((search) => getMovies({ search }), 300)

  const handleSearch = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
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
          <input type='checkbox' onChange={handleSort} checked={sort} />
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
