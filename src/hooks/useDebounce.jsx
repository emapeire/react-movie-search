/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef } from 'react'
import debounce from 'just-debounce-it'

export default function useDebounce(callback, delay) {
  const functionRef = useRef()

  functionRef.current = callback

  return useCallback(
    debounce((...args) => {
      if (functionRef.current) {
        functionRef.current(...args)
      }
    }, delay),
    [delay]
  )
}
