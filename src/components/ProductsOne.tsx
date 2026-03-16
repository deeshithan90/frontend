import productOnees from '../db/productOnees'

const ProductsOne = () => {
  return (
    <>
    <h1 className='text-4xl mt-10 mb-10 ml-5'>Our Sample products</h1>
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10  p-3">
      {productOnees.map((item) => (
        <div key={item.id} className='border rounded-lg p-3 md:p-4 hover:shadow-lg transition'>
          <p className='text-[15px] text-center'>{item.Code}</p>
          <a href={item.nav}>
            <img
              src={item.url}
              className="w-full h-full object-cover"
              alt={item.Code}
            />
            <p className='text-[15px] text-center font-bold'>{item.codes}</p>
          </a>
          <br/>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductsOne