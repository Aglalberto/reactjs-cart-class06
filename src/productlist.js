const products = [
    {id: 1, name: "produto A", price: 10},
    {id: 2, name: "produto B", price: 20},
    {id: 3, name: "produto C", price: 30}
]

function ProductList({addToCart}) {
    return (
        <div>
            <h2>Produtos:</h2>
            <ul>
                {products.map(product => {
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductList