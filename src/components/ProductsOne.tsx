import productOnees from "../db/productOnees"

const ProductsOne = () => {
  return (
    <>
    <h1 className="text-5xl mb-10 mt-10">Our Sample products</h1>
    <div className="grid grid-cols-4 gap-10 mss">
        {productOnees.map((item)=>(
            <div key={item.id} className="border-1 p-3">
                <a href="/products"><img src={item.url} className="w-full h-60" alt={item.Code} /></a>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductsOne