import { useNavigate } from "react-router-dom";
import { useOrders } from "../../context/OrderProvider";
import "./Bag.css";
import EmptyBag from "./EmptyBag";
import { useEffect, useState } from "react";
import { deleteOrder, fetchBagItems } from "../../services/apiRestaurant";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Spinner from "../loader/Spinner";
import toast, { Toaster } from "react-hot-toast";
function Bag({
  bagItems,
  setBagItems,
  loadingBagItems,
  setLoadingBagItems,
  bagItemsError,
  setBagItemsError,
}) {
  const {orders,addOrder} = useOrders();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const Navigate = useNavigate();

  function handleNavToOrderSummary(restaurantId,OrderId,restaurantName,productName){
    Navigate(`/restaurants/${restaurantId}/menu/orderPage/${OrderId}?restaurantName=${restaurantName}&productName=${productName}`)
  }
  useEffect(() => {
    const fetchBagItemsList = async () => {
      try {
        setLoadingBagItems(true);
        setBagItemsError(null);

        const data = await fetchBagItems();
        setBagItems(data.data);
      } catch (error) {
        console.error('Error fetching bag items list:', error);
        setBagItemsError('Failed to fetch bag items list');
      } finally {
        setLoadingBagItems(false);
      }
    };

    fetchBagItemsList();
  }, []);

  const fetchBagItemsListFunc = async () => {
    try {
      setLoadingBagItems(true);
      setBagItemsError(null);

      const data = await fetchBagItems();
      setBagItems(data.data); // Adjust the data path as necessary
    } catch (error) {
      console.error('Error fetching bag items list:', error);
      setBagItemsError('Failed to fetch bag items list');
    } finally {
      setLoadingBagItems(false);
    }
  };

  useEffect(() => {
    fetchBagItemsListFunc();
  }, []);



  const handleDeleteOrder = async (orderId) => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage('');

      const data = await deleteOrder(orderId);
      await fetchBagItemsListFunc();
      setSuccessMessage('Order deleted successfully!');
      toast.success("Order deleted successfully!")
    } catch (error) {
      console.error('Error deleting order:', error);
      setError('Failed to delete order');
    } finally {
      setLoading(false);
    }
  };

  if (bagItems.length === 0) return <EmptyBag />;
  if (loadingBagItems) return <Spinner />;
  return (
    <div className="bag">
    
      <p className="bagHeader">My Bag</p>
      {bagItems?.map((order) => (
        <div key={order["Order Id"]}>
          <p  className="bagHeader">
            My order
          </p>
          <div className="bag-content">
            <p className="restaurant-name">
              {order["Resturant Name"]} -{" "}
              <span>{order["Resturant Address"]}</span>
            </p>
            <div className="bagItem">
              <p> Order Name</p>
              <p>{order["Product Name"]}</p>
            </div>
            <ul className="bagOverview">
              <li>
                <div>Quantity</div>
                <div className="value">{order["Order QTY"]}</div>
              </li>
              <li>
                <div>Delivery fee</div>
                <div className="value">{order["Delivery Fee"]} EGP</div>
              </li>
              <li>
                <div>Total amount</div>
                <div className="value">{order["Total"]} EGP</div>
              </li>
            </ul>
            <div className="bagBtns">
              <button
                onClick={() =>
                  handleNavToOrderSummary(
                    order["Resturant id"],
                    order["Order Id"],
                    order["Resturant Name"],
                    order["Product Name"]
                  )
                }
                className="checkBtn"
              >
                Check Order
              </button>
              <button
                onClick={() => handleDeleteOrder(order["Order Id"])}
                className="delBtn"
              >
                <DeleteOutlineOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bag;
