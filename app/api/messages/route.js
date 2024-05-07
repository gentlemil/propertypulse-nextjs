import connectDB from '@/config/database'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

export const dynamic = 'force-dynamic'

// POST /api/messages
export const POST = async (request) => {
  try {
    // connect to db
    await connectDB()

    // get name, email, phone, message, property, recipient from request
    const { name, email, phone, message, property, recipient } =
      await request.json()

    // get session user
    const sessionUser = await getSessionUser()

    if (!sessionUser || !sessionUser.user) {
      return new Response('User ID is required', { status: 401 })
    }

    const { user } = sessionUser

    // check if user is sending message to self
    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: 'Can not send message to yourself' }),
        { status: 400 }
      )
    }

    // create a new message
    const newMessage = new Message({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    })

    // save message to db
    await newMessage.save()

    return new Response(JSON.stringify({ message: 'Message Sent' }), {
      status: 200,
    })
  } catch (error) {
    return new Response('Something went wrong', { status: 500 })
  }
}
