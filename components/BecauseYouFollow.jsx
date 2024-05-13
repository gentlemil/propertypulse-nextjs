import connectDB from '@/config/database'
import User from '@/models/User'
import Property from '@/models/Property'
import PropertyCard from './PropertyCard'
import { getSessionUser } from '@/utils/getSessionUser'
import { extractFollowedCategories } from '@/utils/extractFollowedCategories'

const BecauseYouFollow = async () => {
  await connectDB()

  // check if user is logged in
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    return null
  }

  const { userId } = sessionUser

  // get user followed categories
  const user = await User.findById(userId).populate('followedCategories').lean()

  const propertiesByFollowedCategories = extractFollowedCategories(user)

  // get all properties by followed categories
  const properties = await Property.find({})
    .sort({ createdAt: -1 })
    .populate('type')
    .lean()

  function getPropertiesByFollowedCategories(properties, followedCategories) {
    properties.forEach((property) => {
      const categoryName = property.type.name
      if (followedCategories[categoryName]) {
        followedCategories[categoryName].push(property)
      }
    })
  }

  getPropertiesByFollowedCategories(properties, propertiesByFollowedCategories)

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto'>
        {Object.entries(propertiesByFollowedCategories).map(
          ([categoryName, properties]) => (
            <div key={categoryName} className='mb-6'>
              <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
                Because You Follow {categoryName}
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {properties.length === 0 ? (
                  <p>No Properties Found</p>
                ) : (
                  properties
                    .slice(0, 3)
                    .map((property) => (
                      <PropertyCard key={property._id} property={property} />
                    ))
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default BecauseYouFollow
