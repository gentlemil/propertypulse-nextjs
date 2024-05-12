'use server'

import connectDB from '@/config/database'
import Category from '@/models/Category'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// todo: adding new category should be available only for admin users (currently only available for logged in users)
async function addPropertyCategory(formData) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a property category')
  }

  const categoryData = {
    name: formData.get('name'),
  }

  // check if category already exists
  const existingCategory = await Category.findOne({ name: categoryData.name })

  if (existingCategory) {
    throw new Error('Category already exists')
  }

  const newPropertyCategory = new Category(categoryData)
  await newPropertyCategory.save()

  revalidatePath('/', 'layout')

  redirect(`/properties/categories`)
}

export default addPropertyCategory
