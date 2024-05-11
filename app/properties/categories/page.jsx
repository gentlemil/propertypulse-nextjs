import Link from 'next/link'

import Categories from '@/components/Categories'
import connectDB from '@/config/database'
import Category from '@/models/Category'

const PropertyCategoriesPage = async () => {
  await connectDB()

  const categories = await Category.find({})

  return (
    <section className='px-4 py-2'>
      <div className='w-full flex justify-end'>
        <Link
          className='px-4 py-2 rounded-full bg-blue-600 text-white'
          href='/properties/categories/add'
        >
          Add category
        </Link>
      </div>
      <Categories categories={categories} />
    </section>
  )
}

export default PropertyCategoriesPage
