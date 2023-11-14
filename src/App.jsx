import './App.css'

export default function App() {
  return (
    <>
      <h1>React Movie Search</h1>
      <form className='form'>
        <label>Put yout movie here:</label>
        <input type='text' placeholder='The Matrix...' />
        <button type='sumbit'>Search</button>
      </form>
    </>
  )
}
