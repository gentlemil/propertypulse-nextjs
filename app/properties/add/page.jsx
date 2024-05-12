import PropertyAddForm from '@/components/PropertyAddForm'
import connectDB from '@/config/database'
import Category from '@/models/Category'

const AddPropertyPage = async () => {
  await connectDB()

  const categories = await Category.find({}).lean()

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <PropertyAddForm categories={categories} />
        </div>
      </div>
    </section>
  )
}
export default AddPropertyPage
