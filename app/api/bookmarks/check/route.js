// TO_REMOVE (not used anymore in the project, but keeping it for reference)

// import connectDB from '@/config/database'
// import User from '@/models/User'
// import { getSessionUser } from '@/utils/getSessionUser'

// export const dynamic = 'force-dynamic'

// export const POST = async (request) => {
//   try {
//     await connectDB()

//     const { propertyId } = await request.json()

//     const sessionUser = await getSessionUser()

//     if (!sessionUser || !sessionUser.userId) {
//       return new Response('User ID is required', { status: 401 })
//     }

//     const { userId } = sessionUser

//     // find the user by their session ID
//     const user = await User.findOne({ _id: userId })

//     // check if the property is already bookmarked
//     let isBookmarked = user.bookmarks.includes(propertyId)

//     return new Response(JSON.stringify({ isBookmarked }), {
//       status: 200,
//     })
//   } catch (error) {
//     console.log(error)
//     return new Response('Something went wrong', { status: 500 })
//   }
// }
