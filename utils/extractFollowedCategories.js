export function extractFollowedCategories(user) {
  const followedCategories = {}

  user.followedCategories.forEach((category) => {
    followedCategories[category.name] = []
  })

  return followedCategories
}
