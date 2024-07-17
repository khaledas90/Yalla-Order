import React, { createContext, useContext, useState } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState';


const OrderContext = createContext();
function OrderProvider({children}) {
    const [orders, setOrders] = useLocalStorageState([],"Orders");
    const addOrder = (newOrder) => {
        setOrders([...orders, newOrder]);
      };
      const deleteOrder = (orderIdToDelete) => {
        setOrders(orders.filter((order) => order.id !== orderIdToDelete));
      };
      const getCount = orders.length;
  return (
    <OrderContext.Provider value={{orders,addOrder,deleteOrder,getCount}}> 
        {children}
    </OrderContext.Provider>
  )
}

export function useOrders(){
    const context = useContext(OrderContext);
    return context
}

export default OrderProvider
