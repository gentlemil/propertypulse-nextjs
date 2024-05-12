import Category from './Category'

const Categories = ({ categories }) => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {categories.length === 0 ? (
          <p>No categories found</p>
        ) : (
          <ul className='w-full flex flex-wrap justify-center items-center gap-2'>
            {categories.map((category) => (
              <Category key={category._id} category={category} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Categories
