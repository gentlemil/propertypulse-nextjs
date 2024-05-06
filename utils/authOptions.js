import GoogleProvider from 'next-auth/providers/google'

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
      // 2. check if user thats login exists
      // 3. if not, then add user to db
      // 4. return true to allow sign in
    },
    // Modifies the session object
    async session({ session }) {
      // 1. get user to db
      // 2. assign the user id to the session
      // 3. return session
    },
  },
}
