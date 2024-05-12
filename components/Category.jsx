import Link from 'next/link'

const Category = ({ category }) => {
  return (
    <li className='px-4 py-2 border-2 border-blue-500 hover:border-blue-600 rounded-full group w-fit'>
      <Link
        href={`/properties/search-results?location=&propertyType=${category.name}`}
      >
        <p className='text-blue-500 hover:text-blue-600'>{category.name}</p>
      </Link>
    </li>
  )
}

export default Category
