// import Property from '@/models/Property'
// import connectDB from '@/config/database'

// TO_REMOVE (not used anymore)

// GET /api/properties/featured
// export const GET = async (request) => {
//   try {
//     await connectDB()

//     const properties = await Property.find({
//       is_featured: true,
//     })

//     return new Response(JSON.stringify(properties), {
//       status: 200,
//     })
//   } catch (error) {
//     console.log('Error: ', error)
//     return new Response('Something Went Wrong', { status: 500 })
//   }
// }
