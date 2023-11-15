import './App.css'
import Movies from './components/Movies'
import useSearch from './hooks/useSearch'

export default function App() {
  const { search, handleSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  return (
    <div className='page'>
      <header>
        <h1>React Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label className='label'>Put yout movie here:</label>
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
        <Movies />
      </main>
    </div>
  )
}
