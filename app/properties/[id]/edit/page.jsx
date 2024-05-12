import connectDB from '@/config/database'
import Property from '@/models/Property'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import Category from '@/models/Category'

import PropertyEditForm from '@/components/PropertyEditForm'

const PropertyEditPage = async ({ params }) => {
  await connectDB()

  // query the property in the DB
  const propertyDoc = await Property.findById(params.id).lean()

  // get categories from the DB
  const categories = await Category.find({}).lean()
  console.log(categories)
  // const categories = []

  // convert the document to a plain js object so we can pass to client components
  const property = convertToSerializeableObject(propertyDoc)

  if (!property) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    )
  }

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <PropertyEditForm property={property} categories={categories} />
        </div>
      </div>
    </section>
  )
}
export default PropertyEditPage
