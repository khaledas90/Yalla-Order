import { useState } from "react";
import "./CreateOrder.css";
import { addToCart } from "../../services/apiRestaurant";
import { useOrders } from "../../context/OrderProvider";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const styles = {
    section: {
        marginBottom: '20px',
    },
    header: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
    },
};

function CreateOrder({orderDetails,productName,productId}) {
    const {additem = [],addsaui = [],resturant,sizes} = orderDetails;
    const [size_id,setSize_id] = useState();
    const [checkedExtras, setCheckedExtras] = useState([]);
    const [checkedSauce,setCheckedSauce] = useState([]);
    const [qty,setQty] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const {t} = useTranslation()
    const lang = localStorage.getItem("i18nextLng");
    const Navigate = useNavigate();
    const {orders,addOrder} = useOrders();

    function handleChangeExtras(e){
        const {value,checked} = e.target;
        if (checked) {
            if (!checkedExtras.includes(Number(value))) {
                setCheckedExtras([...checkedExtras, Number(value)]);
            }
          } else {
            setCheckedExtras(checkedExtras.filter((item) => item !== Number(value)));
          }
          
    }
    function handleChangeSauce(e){
        const {value,checked} = e.target;
        if (checked) {
            if (!checkedSauce.includes(Number(value))) {
                setCheckedSauce([...checkedSauce, Number(value)]);
            }
          } else {
            setCheckedSauce(checkedSauce.filter((item) => item !== Number(value)));
          }
    }
    function handleIncreaseQty(e){
        e.preventDefault()
        setQty((state) => state + 1)
    }
    function handleDecreaseQty(e){
        e.preventDefault()
        if(qty>1){
            setQty((state) => state - 1)
        }
    }
    
    const handleAddToCart = async (e) => {
        e.preventDefault()
        try {
          setLoading(true);
          setError(null);
          setSuccessMessage('');
    
          const data = await addToCart({
            qty,
            product_id: productId,
            place_id:resturant.id,
            size_id,
            item : checkedExtras,
            sauce:checkedSauce
          });
          Navigate(`/HomeRestaurants`)
          setSuccessMessage('Item added to cart successfully!');
          const newOrder = {...data.data,resturant,productName}
          addOrder(newOrder)

        } catch (error) {
          console.error('Error adding to cart:', error);
          setError('Failed to add item to cart');
        } finally {
          setLoading(false);
        }
      };
    
    return (
        <form className={`createOrder ${lang=== "ar" ? "ar" : ""}`}>
            <p className="mainHeader">{t("Add Items Choices")}</p>
            <div className="mainContent">
                <div className="bagItem">
                    <p>{productName}</p>
                    <div className="increaseAndDecrease">
                        <button onClick={handleDecreaseQty} className="decreaseBtn">-</button>
                        <div>{qty}</div>
                        <button onClick={handleIncreaseQty} className="increaseBtn">+</button>
                    </div>
                    <span>Price on Selection</span>
                </div>
                <div style={styles.section}>
                    <h3 className="secHeader">{t("Your Choice Of Size")} <span>({t("Choose 1")})</span></h3>
                    <div className="inputs">
                        <div>
                        {sizes.slice(0,2)?.map((size => 
                            <div style={styles.inputGroup}>
                                <input type="radio" id={size.size} name="Size" value={size.id} onChange={(e) => setSize_id(e.target.value)} />
                                <label htmlFor={size.size}>{size.size} ({size.price})</label>
                            </div>
                        ))}  
                        </div>

                        <div>
                            {sizes.slice(2,sizes.length)?.map((size => 
                            <div style={styles.inputGroup}>
                                <input type="radio" id={size.size} name="Size" value={size.id} onChange={(e) => setSize_id(e.target.value)} />
                                <label htmlFor={size.size}>{size.size} ({size.price})</label>
                            </div>
                        ))}  
                        </div>
                    </div>



                </div>

                <div style={styles.section}>
                    <h3 className="secHeader">{t("Your Choice Of Extras")} <span>({t("Choose up to 9 items")})</span></h3>
                    <div className="inputs">
                    {additem.slice(0,3)?.map((item) =>
                        <div style={styles.inputGroup}>
                        <input type="checkbox" id={item.name} name="Extras" value={item.id} onChange={handleChangeExtras} checked={checkedExtras.includes(item.id)} />
                        <label htmlFor={item.name}>{item.name} ({item.price})</label>
                    </div>
                    )}

                    </div>
                    <div className="inputs">
                        {additem?.slice(3,6)?.map((item) =>
                        <div style={styles.inputGroup}>
                        <input type="checkbox" id={item.name} name="Extras" value={item.id} onChange={handleChangeExtras} checked={checkedExtras.includes(item.id)} />
                        <label htmlFor={item.name}>{item.name} ({item.price})</label>
                    </div>
                    )}

                    </div>
                    <div className="inputs">
                    {additem?.slice(6,additem.length)?.map((item) =>
                        <div style={styles.inputGroup}>
                        <input type="checkbox" id={item.name} name="Extras" value={item.id} onChange={handleChangeExtras} checked={checkedExtras.includes(item.id)} />
                        <label htmlFor={item.name}>{item.name} ({item.price})</label>
                    </div>
                    )}

                    </div>


                </div>
                {addsaui.length !== 0  && 
                    <div style={styles.section}>
                    <h3 className="secHeader">{t("Your Choice Of Sauce")} <span>({t("Choose up to 2 items")})</span></h3>
                    <div className="inputs">
                    {addsaui?.map((sauce) => 
                        <div style={styles.inputGroup}>
                            <input type="checkbox" id={sauce.name} name="Sauce" value={sauce.id} onChange={handleChangeSauce} checked={checkedSauce.includes(sauce.id)}/>
                            <label htmlFor={sauce.name}>{sauce.name} ({sauce.price})</label>
                        </div>
                    )}

                    </div>

                </div>
                }
                
                <div className="text-center">
                    <button onClick={handleAddToCart} className="confirmBtn">{loading ? t("Adding...") : t("Add To Bag")}</button>
                </div>
            </div>
        </form>
    );
};

export default CreateOrder