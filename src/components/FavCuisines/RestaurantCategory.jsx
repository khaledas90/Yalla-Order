import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { fetchProductsByCategory } from '../../services/apiRestaurant';
import "./RestaurantCategory.css";
import NavRestaurants from '../NavRestaurants/NavRestaurants';
import { useTranslation } from 'react-i18next';
import Loader from '../loader/Loader';
function RestaurantCategory() {
    const {id} = useParams();
    const [searchParams,setSearchParams] = useSearchParams();
    const categoryName = searchParams.get("categoryName");
    const { t } = useTranslation();
    const [loadingProducts, setLoadingProducts] = useState(false);
  const [productsError, setProductsError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        setProductsError(null);

        const data = await fetchProductsByCategory(id);

        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products list:', error);
        setProductsError('Failed to fetch products list');
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [id]);
  if(loadingProducts) return <Loader/>
  return (
    <div className='category'>
    <div className='Main_bg'>
    <NavRestaurants/>
    <h1 className='MainTitle'>{categoryName}</h1>
    </div>
        <div className='container py-5'>
            <div className='row'>
                    {products?.map((product => 
                        <div className='col-12 col-sm-6 col-md-4 mb-4'>
                            <Link to={`/restaurants/${product.place_id}/menu/orderPage?restaurantId=${product.place_id}&productId=${product.id}&productName=${product['product name']}`}>
                         <div key={product.id} className="dish">
                        <div className="dishImg"><img src={product.logo} alt={product['product name']} /></div>
                        <div className="dish-details">
                            <p className="dish-name">{product['product name']}</p>
                            <p className="ingradiantes">{product['product descrption']}</p>
                            <p className="price">{product['product price']} EGP</p>
                        </div>
                    </div>
                    </Link>  
                    </div>


                    ))}
                    
            </div>
        </div>
    </div>
  )
}

export default RestaurantCategory
