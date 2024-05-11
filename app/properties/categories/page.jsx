import Link from 'next/link'
import Categories from '@/components/Categories'
import connectDB from '@/config/database'
import Category from '@/models/Category'

import { getServerSession } from 'next-auth'
import { authOption } from '@/utils/authOptions'

const PropertyCategoriesPage = async () => {
  const data = await getServerSession(authOption)

  await connectDB()

  const categories = await Category.find({})

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
