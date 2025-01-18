import { useState, useEffect } from "react"

const useFetchExercises = (endpoint) => {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(endpoint)
        const newCategory = await response.json()

        if(response.ok) {
          setExercises(newCategory)
        } else {
            throw new Error(newCategory.message || 'Failed to fetch exercise endpoint')
        }
      }
      catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchExercises()
  }, [endpoint]) // for re-rendering with every endpoint change

  return { exercises, loading, error }
}

export default useFetchExercises
