'use client'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'
import { toast } from 'react-toastify'
import PropertyCard from '@/components/PropertyCard'

const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch(`/api/bookmarks`)

        if (res.status === 200) {
          const data = await res.json()
          setProperties(data)
          // sort the properties by create date
          if (properties) {
            properties.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
          }
        } else {
          console.error(`Failed to fetch saved properties: ${res.statusText}`)
          toast.error('Failed to fetch saved properties')
        }
      } catch (error) {
        console.error(
          `An error occurred while fetching saved properties: ${error}`
        )
        toast.error('An error occurred while fetching saved properties')
      } finally {
        setLoading(false)
      }
    }
    fetchSavedProperties()
  }, [])
  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <h1 className='text-2xl mb-4'>Saved Properties</h1>
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

export default SavedPropertiesPage
