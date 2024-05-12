import Link from 'next/link'
import Categories from '@/components/Categories'
import connectDB from '@/config/database'
import Category from '@/models/Category'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'

const PropertyCategoriesPage = async () => {
  const data = await getServerSession(authOptions)

  await connectDB()

  const categories = await Category.find({}).sort({ name: 1 }).lean()

  return (
    <section className='px-4 py-2'>
      <div className='w-full flex justify-end'>
        {data?.user && (
          <Link
            className='px-4 py-2 rounded-full bg-blue-600 text-white'
            href='/properties/categories/add'
          >
            Add category
          </Link>
        )}
      </div>
      <Categories categories={categories} />
    </section>
  )
}

export default PropertyCategoriesPage
