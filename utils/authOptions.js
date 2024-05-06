import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/database'
import User from '@/models/User'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in
    async signIn({ profile }) {
      // 1. connect to db
      await connectDB()
      // 2. check if user thats login exists
      const userExists = await User.findOne({ email: profile.email })
      // 3. if not, then add user to db
      if (!userExists) {
        // 3a. Truncate username if too long
        const username =
          profile.name.length > 30
            ? profile.name.substring(0, 30)
            : profile.name

        await User.create({
          email: profile.email,
          username,
          image: profile.image,
        })
      }
      // 4. return true to allow sign in
      return true
    },
    // Modifies the session object
    async session({ session }) {
      // 1. get user to db
      const user = await User.findOne({ email: session.user.email })
      // 2. assign the user id to the session
      session.user.id = user._id.toString()
      // 3. return session
      return session
    },
  },
}
