'use client'

import addPropertyCategory from '@/app/actions/addPropertyCategoryAction'

const PropertyCategoryAddForm = () => {
  return (
    <form action={addPropertyCategory}>
      <h2 className='text-3xl text-center font-semibold mb-6'>Add Category</h2>

      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2'>
          Category name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2'
          placeholder='eg. Apartment, Studio'
          required
        />
      </div>

      <div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Category
        </button>
      </div>
    </form>
  )
}

export default PropertyCategoryAddForm
