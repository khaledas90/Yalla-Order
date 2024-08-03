import axios from "axios";

const API_BASE_URL = "https://insta-order-site.web-allsafeeg.com/api";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const lang = localStorage.getItem("i18nextLng"); // Get language from local storage
        const token = localStorage.getItem("token"); // Get the token from local storage

        if (lang) {
            config.headers["lang"] = lang;
        }

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // Include the token in the authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Fetch all restaurants
export const fetchAllRestaurants = async() => {
    try {
        const response = await apiClient.get("/places/restaurantes/list");
        return response.data;
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        throw error;
    }
};

// Fetch a single restaurant by ID
export const fetchRestaurantById = async(id) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/show/details/${id}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching restaurant with ID ${id}:`, error);
        throw error;
    }
};

// get promo code list 
export const fetchPromoCodes = async() => {
    try {
        const response = await apiClient.get('/promocode/list?type=order');
        return response.data;
    } catch (error) {
        console.error('Error fetching promo codes:', error);
        throw error; // Rethrow the error to be handled in the component
    }
};
// Function to store a promo code for the user
export const storePromoCode = async(promoCodeId) => {
    try {
        const response = await apiClient.get(`/promocode/storefor/user/${promoCodeId}`);

        return response.data;
    } catch (error) {
        console.error('Error storing promo code:', error);
        throw error;
    }
};

// add review

export const addReview = async(restaurantId, comment, rate) => {
    try {
        const response = await apiClient.post(`/places/restaurantes/rate/add`, {
            place_id: restaurantId,
            comment,
            rate,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding review:", error);
        throw error;
    }
};

// get All Categories
export const fetchAllCategories = async() => {
    try {
        const response = await apiClient.get("/category/list");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// get menu items by category and by restaurant

export const fetchMenuItems = async(restaurantId, categoryId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/menue/listbyfilter/${restaurantId}/${categoryId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching menu items for restaurant ${restaurantId} and category ${categoryId}:`,
            error
        );
        throw error;
    }
};

// GET request to fetch all menu items by restaurant ID
export const fetchAllMenuItems = async(restaurantId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/menue/list/${restaurantId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching menu items for restaurant ${restaurantId}:`,
            error
        );
        throw error;
    }
};

// Fetch order details by restaurant ID and product ID
export const fetchOrderDetails = async(restaurantId, productId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/menue/show/details/choose/order/${restaurantId}/${productId}`
        );
        return response.data;
    } catch (error) {
        console.error(
            `Error fetching order details for restaurant ${restaurantId} and product ${productId}:`,
            error
        );
        throw error;
    }
};

// Post request to add an item to the cart
export const addToCart = async({
    qty,
    product_id,
    place_id,
    size_id,
    item,
    sauce,
}) => {
    try {
        const response = await apiClient.post("/places/restaurantes/order/store", {
            qty,
            product_id,
            place_id,
            size_id,
            item,
            sauce,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};

// Post request to confirm an order
export const confirmOrder = async(
    orderId, { special_request, delivery_method, pay_method, address }
) => {
    try {
        const response = await apiClient.post(
            `/places/restaurantes/order/confirm/${orderId}`, {
                special_request,
                delivery_method,
                pay_method,
                address,
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Error confirming order ${orderId}:`, error);
        throw error;
    }
};
// delete orders
export const deleteOrder = async(orderId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/order/delete/${orderId}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error deleting order ${orderId}:`, error);
        throw error;
    }
};
// POST request to add an item to the favorites
export const addItemToFavorites = async(productId) => {
    try {
        const response = await apiClient.post(
            `/places/restaurantes/menue/add/favproduct/${productId}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error adding product ${productId} to favorites:`, error);
        throw error;
    }
};

// GET request to fetch the favorites list
export const fetchFavoritesList = async() => {
    try {
        const response = await apiClient.get(`/places/listfavproduct?type=order`);
        return response.data;
    } catch (error) {
        console.error("Error fetching favorites list:", error);
        throw error;
    }
};


// Fetch order summary by order ID
export const fetchOrderSummary = async(orderId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/order/summary/${orderId}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching order summary for order ${orderId}:`, error);
        throw error;
    }
};

// GET request to track an order
export const trackOrder = async(orderId) => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/order/trackorder/${orderId}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error tracking order ${orderId}:`, error);
        throw error;
    }
};

// GET request to fetch the orders list
export const fetchOrdersList = async() => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/order/myorder?type=order`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching orders list:", error);
        throw error;
    }
};

// GET request to fetch the bag items
export const fetchBagItems = async() => {
    try {
        const response = await apiClient.get(
            `/places/restaurantes/order/show?type=order`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching bag items:", error);
        throw error;
    }
};

// GET request to fetch the categories
export const fetchCategories = async() => {
    try {
        const response = await apiClient.get(`/category/list`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// GET request to fetch products by category ID
export const fetchProductsByCategory = async(categoryId) => {
    try {
        const response = await apiClient.get(
            `/category/show/bycategory/${categoryId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
// POST request to search for restaurants by name and type
export const searchRestaurants = async(name, type) => {
    try {
        const response = await apiClient.post("/places/search/name", {
            name,
            type,
        });

        return response.data;
    } catch (error) {
        console.error("Error searching for restaurants:", error);
        throw error;
    }
};
// POST request to add a user address
export const addUserAddress = async(address) => {
    try {
        const response = await apiClient.post("/user/add/address", { address });
        return response.data;
    } catch (error) {
        console.error("Error adding user address:", error);
        throw error;
    }
};

async function getRestaurants(token, apiUrl, language) {
    let response = await fetch(`${apiUrl}/places/restaurantes/list`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": language,
        },
    });
    let data = await response.json();
    console.log(data);
    return data;
}

export { getRestaurants };