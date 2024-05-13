'use server'
import { revalidatePath } from 'next/cache'
import connectDB from '@/config/database'
import User from '@/models/User'
import { getSessionUser } from '@/utils/getSessionUser'

async function followCategory(categoryId) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    return { error: 'User ID is required' }
  }

  const { userId } = sessionUser

  // find user in database
  const user = await User.findById(userId)

  // find user's followed categories
  const userFollowedCategoryIds = user.followedCategories

  // check if category is followed
  let isCategoryFollowed = userFollowedCategoryIds.includes(categoryId)

  let message = ''

  if (!isCategoryFollowed) {
    // add category to user's followed categories
    user.followedCategories.push(categoryId)
    message = 'Category followed successfully'
    isCategoryFollowed = true
  } else {
    // remove category from user's followed categories
    user.followedCategories.pull(categoryId)
    message = 'Category unfollowed successfully'
    isCategoryFollowed = false
  }

  await user.save()
  revalidatePath('/categories', 'page')

  return { message, isCategoryFollowed }
}

export default followCategory
