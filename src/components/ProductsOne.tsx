import productOnees from '../db/productOnees'

const ProductsOne = () => {
  return (
    <>
    <h1 className='text-4xl mt-10 mb-10'>Our Sample products</h1>
    <div className="grid grid-cols-6 gap-4 p-3">
      {productOnees.map((item) => (
        <div key={item.id} className='border-2 p-1'>
          <p className='text-[15px] text-center'>{item.Code}</p>
          <a href={item.nav}>
            <img
              src={item.url}
              className="w-full h-60 object-cover"
              alt={item.Code}
            />
            <p className='text-[15px] text-center font-bold'>{item.codes}</p>
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductsOne