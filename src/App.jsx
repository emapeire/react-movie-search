import { useState, useEffect } from 'react'
import './App.css'
import Movies from './components/Movies'
// import { useRef } from 'react'

export default function App() {
  // Validation using useRef()
  // const inputRef = useRef()

  // Controlled validation (useState)
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    // Uncontrolled validation
    // const { query } = Object.fromEntries(new window.FormData(event.target))

    console.log({ query })

    // Validation using useRef()
    // const value = inputRef.current.value
    // console.log(value)
  }

  const handleChange = (event) => {
    // Controlled validation (useState)
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('Please enter a movie name')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('Please enter a valid movie name')
      return
    }
    if (query.length < 3) {
      setError('Please enter at least 3 characters')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>React Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label className='label'>Put yout movie here:</label>
          <input
            onChange={handleChange}
            value={query}
            name='query'
            // Validation using useRef()
            // ref={inputRef}
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
