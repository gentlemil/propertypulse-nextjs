'use client'
import { useState, useEffect } from 'react'
import PropertyCard from '@/components/PropertyCard'
import Spinner from '@/components/Spinner'
// import { fetchProperties } from '@/utils/requests'

const Properties = () => {
  //   const properties = await fetchProperties()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`/api/properties`)

        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }

        const data = await res.json()
        setProperties(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProperties()
  }, [])

  // sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property, index) => (
              <PropertyCard property={property} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Properties
