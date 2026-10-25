import React from 'react'

const Product = ({ productList: { id, title, price, description, category, image } }) => {
  return (
    <div className="sanjeev" style={{ display: 'flex' }}>
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "300px" }}>
        <h1>ID: {id}</h1>
        <h2>Title: {title}</h2>
        <h3>Price: ₹{price}</h3>
        <h4>Category: {category}</h4>
        <p>Description: {description}</p>
        <img src={image} alt={title} width={100} height={100} />
      </div>
    </div>
  );
};

export default Product
