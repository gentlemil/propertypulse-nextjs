import Link from 'next/link'

const Categories = ({ categories }) => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {categories.length === 0 ? (
          <p>No categories found</p>
        ) : (
          <ul className='w-full flex flex-wrap justify-center items-center gap-2'>
            {categories.map((category) => (
              <li
                key={category._id}
                className='px-4 py-2 border-2 border-blue-500 hover:border-blue-600 rounded-full group w-fit'
              >
                <Link
                  href={`/properties/search-results?location=&propertyType=${category.name}`}
                >
                  <p className='text-blue-500 hover:text-blue-600'>
                    {category.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Categories
