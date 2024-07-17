import React, { createContext, useContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState';
const ConfirmedOrderContext = createContext();
function ConfirmedOrderProvider({children}) {
    const [confirmedOrders, setConfirmedOrders] = useLocalStorageState([],"ConfirmedOrders");
    const addConfirmedOrder = (newOrder) => {
        if (!confirmedOrders.some((order) => order.id === newOrder.id)) {
          setConfirmedOrders([...confirmedOrders, newOrder]);
        } else {
          console.log(`Order with ID ${newOrder.id} already exists in the confirmed orders array.`);
        }
      };
    
  return (
    <ConfirmedOrderContext.Provider value={{confirmedOrders,addConfirmedOrder}}>
      {children}
    </ConfirmedOrderContext.Provider>
  )
}

export function useConfirmedOrder(){
    const context = useContext(ConfirmedOrderContext);

    return context;
}

export default ConfirmedOrderProvider
