import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBagItems, deleteOrder ,addToCart} from '../../services/apiRestaurant';
import toast from 'react-hot-toast';

const useBagItems = () => {
  const queryClient = useQueryClient();

  // Fetch bag items
  const { data: bagItems, isLoading: loadingBagItems, isError: bagItemsError } = useQuery(
    {queryKey :['bagItems'],queryFn : fetchBagItems });

  // Delete order mutation
  const { mutate: removeOrder, isLoading: isRemoving } = useMutation({
    mutationFn : (orderId) => deleteOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries('bagItems');
      toast.success('Order deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete order');
    },

  });

  const {mutate : addToBag , isLoading : loading } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(['bagItems']); // Invalidate to refetch
      toast.success('Item added to cart successfully!');
    },
    onError: (error) => {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    },
  });


  return {
    bagItems: bagItems?.data || [],  // Adjust if needed
    loadingBagItems,
    bagItemsError,
    removeOrder,
    isRemoving,
    addToBag,
    loading
  };
};

export default useBagItems;
