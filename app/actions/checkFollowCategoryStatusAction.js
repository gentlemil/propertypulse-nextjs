'use server'
const { default: connectDB } = require('@/config/database')
const { default: User } = require('@/models/User')
const { getSessionUser } = require('@/utils/getSessionUser')

async function checkFollowCategoryStatus(categoryId) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    return { error: 'User ID is required' }
  }

  const { userId } = sessionUser

  // Find user in database
  const user = await User.findById(userId)

  // Check if category is followed
  let isCategoryFollowed = user.followedCategories.includes(categoryId)

  return { isCategoryFollowed }
}

export default checkFollowCategoryStatus
