import React, { useState, useEffect } from 'react';

function Details() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/hardware-data/random-products-by-category/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Set the products to state
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="container mt-4 text-center pt-4">
      <h4 className="mb-4">Hardware Product Details:</h4>

      {loading && <p>Loading products...</p>}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Table to display product details */}
      {products.length > 0 && (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
          <thead className="thead bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.rating ? product.rating : 'N/A'}</td>
                  <td>
                    {product.link ? (
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        View Product
                      </a>
                    ) : (
                      'No link available'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Details;
