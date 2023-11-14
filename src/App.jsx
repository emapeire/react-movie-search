import './App.css'

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
      <main>Here the results...</main>
    </div>
  )
}
