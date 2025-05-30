// Printful API Service

// Save your API key in .env file or use Firebase Config
const PRINTFUL_API_KEY = "3ejHkVFg9R5xGJu1IByAHapwpwRYosEdRzpHybjK"; // Replace with your actual API key

// Create a new Printful store
export const createPrintfulStore = async (userEmail) => {
  try {
    const response = await fetch("https://api.printful.com/stores", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: `${userEmail}'s Store`,
        type: "api"  
      }),
    });

    const data = await response.json();
    
    if (!data.result) {
      throw new Error(data.error || "Failed to create store");
    }
    
    return data.result.id;
  } catch (error) {
    console.error("Error creating Printful store:", error);
    return null;
  }
};

// Fetch store products
export const fetchStoreProducts = async (storeId) => {
  try {
    const response = await fetch(`https://api.printful.com/store/products?store_id=${storeId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
      }
    });

    const data = await response.json();
    
    if (!data.result) {
      throw new Error(data.error || "Failed to fetch products");
    }
    
    return data.result;
  } catch (error) {
    console.error("Error fetching store products:", error);
    return [];
  }
};

// Create a new product in store
export const createProduct = async (storeId, productData) => {
  try {
    const response = await fetch(`https://api.printful.com/store/products?store_id=${storeId}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const data = await response.json();
    
    if (!data.result) {
      throw new Error(data.error || "Failed to create product");
    }
    
    return data.result;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

// Delete a product
export const deleteProduct = async (storeId, productId) => {
  try {
    const response = await fetch(`https://api.printful.com/store/products/${productId}?store_id=${storeId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${PRINTFUL_API_KEY}`,
      }
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error deleting product:", error);
    return null;
  }
}; 