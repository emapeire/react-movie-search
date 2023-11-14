import './App.css'
import Movies from './components/Movies'
// import withoutResults from './mocks/without-results.json'

export default function App() {
  return (
    <div className='page'>
      <header>
        <h1>React Movie Search</h1>
        <form className='form'>
          <label className='label'>Put yout movie here:</label>
          <input type='text' placeholder='The Matrix...' />
          <button type='sumbit'>Search</button>
        </form>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  )
}
