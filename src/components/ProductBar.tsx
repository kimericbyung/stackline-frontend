import { ProductData } from "../types/ProductData";

function ProductBar({data}: {data: ProductData}) {
  return (
    <div className="product-bar">
    <img src={data.image} alt="Product"/>
    <div className="product-bar-title">{data.title}</div>
    <div className="product-bar-subtitle">{data.subtitle}</div>
    <div className="product-bar-tags">
      {data.tags.map(tag => (
        <span key={tag} className="product-bar-tag">{tag}</span>
      ))}
      </div>
  </div>
  )
}

export default ProductBar