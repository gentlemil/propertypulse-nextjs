import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl'>Welcome</h1>
        <Link href='/properties'>Properties</Link>
      </div>
    </div>
  )
}

export default HomePage
