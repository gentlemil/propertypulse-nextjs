'use client'
import getUnreadMessageCount from '@/app/actions/getUnreadMessageCountAction'
import { useSession } from 'next-auth/react'
import { createContext, useContext, useState, useEffect } from 'react'

// create context
const GlobalContext = createContext()

// create a provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0)

  const { data: session } = useSession()

  // NOTE: since our GlobalContext is responsible for unreadCount state then it
  // makes sense to also fetch the unreadCount here too and remove that from the
  // UnreadMessageCount component.
  // Additionally here we are using a server action to get the unreadCount

  useEffect(() => {
    if (session && session.user) {
      getUnreadMessageCount().then((res) => {
        if (res.count) setUnreadCount(res.count)
      })
    }
  }, [getUnreadMessageCount, session])

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

// create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext)
}
