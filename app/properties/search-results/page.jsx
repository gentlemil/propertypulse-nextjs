'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const SeachResultsPage = () => {
  const searchParams = useSearchParams()
  const [properties, setProperties] = useState([])
  const [laoding, setLoading] = useState(true)

  const location = searchParams.get('location')
  const propertyType = searchParams.get('propertyType')

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        )

        if (res.status === 200) {
          const data = await res.json()
          setProperties(data)
        } else {
          setProperties([])
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    console.log(properties)
    getSearchResults()
  }, [location, propertyType])

  return <div>SeachResultsPage</div>
}

export default SeachResultsPage
