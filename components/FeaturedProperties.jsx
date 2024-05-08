import { fetchProperties } from '@/utils/requests'
import FeaturedPropertyCard from '@/components/FeaturedPropertyCard'

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true })
  let randomProperties = []
  if (properties && properties.length > 0) {
    randomProperties = properties
      .sort(() => Math.random() - Math.random())
      .slice(0, 2)
  }

  return (
    properties.length > 0 && (
      <section className='bg-blue-50 px-4 pt-6 pb-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Featured Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {randomProperties.map((property, index) => (
              <FeaturedPropertyCard property={property} key={index} />
            ))}
          </div>
        </div>
      </section>
    )
  )
}

export default FeaturedProperties
