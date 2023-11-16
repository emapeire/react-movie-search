import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export default function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef({ search })

  const getMovies = async () => {
    if (previousSearch.current.search === search) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = { search }
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return {
    movies: sortMovies,
    getMovies,
    loadingMovies: loading,
    errorMovies: error
  }
}
