// Type Alias for Product
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    status: ProductStatus;
};


// Union Type for Product Status
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";


// Product object using Type Alias
const product: Product = {
    id: 1,
    name: "Laptop",
    price: 65000,
    category: "Electronics",
    status: "In Stock"
};


// InventoryDetails Type Alias
type InventoryDetails = {
    quantity: number;
    location: string;
};


// ProductDetails Type Alias
type ProductDetails = {
    id: number;
    name: string;
    price: number;
};


// Intersection Type
// Combines ProductDetails and InventoryDetails
type ProductWithInventory = ProductDetails & InventoryDetails;


// Object using Intersection Type
let productInfo: ProductWithInventory = {
    id: 2,
    name: "Mobile Phone",
    price: 25000,
    quantity: 50,
    location: "Chennai"
};


// Update the price and quantity
productInfo.price = 30000;
productInfo.quantity = 100;


// Product
console.log("Product object with Union type:");
console.log(product);

// ProductInfo 
console.log("ProductInfo object using Intersection type:");
console.log(productInfo);