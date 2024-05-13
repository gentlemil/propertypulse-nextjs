'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import Link from 'next/link'
import followCategory from '@/app/actions/followCategoryAction'
import checkFollowCategoryStatus from '@/app/actions/checkFollowCategoryStatusAction'

const Category = ({ category }) => {
  const { data: session } = useSession()
  const userId = session?.user?.id

  const [isFollowed, setIsFollowed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return

    checkFollowCategoryStatus(category._id).then((res) => {
      if (res.error) return toast.error(res.error)
      if (res.isCategoryFollowed) setIsFollowed(res.isCategoryFollowed)
      setLoading(false)
    })
  }, [category, userId, checkFollowCategoryStatus])

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to sign in to follow a category')
      return
    }

    followCategory(category._id).then((res) => {
      if (res.error) return toast.error(res.error)
      setIsFollowed(res.isFollowed)
      toast.success(res.message)
    })
  }

  return (
    <li
      className={`${
        isFollowed ? 'bg-blue-500 hover:bg-bglue-600' : ''
      } px-4 py-2 border-2 border-blue-500 hover:border-blue-600 rounded-full group w-fit`}
    >
      <button onClick={handleClick}>
        <p
          className={`${
            isFollowed ? 'text-white' : 'text-blue-500 hover:text-blue-600'
          }`}
        >
          {category.name}
        </p>
      </button>
    </li>
  )
}

export default Category

/**
 * when user click on a category,
 * follow/unfollow category
 * show toast
 * show followed categories by user
 * show on main page 'Because you follow >category<
 */
