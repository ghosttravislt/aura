interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}



export const addCart = (product: Product) => {
  const savedCart = localStorage.getItem("shoppingCart");

  const cart: CartItem[] = savedCart
    ? JSON.parse(savedCart)
    : [];

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  let updatedCart: CartItem[];

  if (existingProduct) {
    updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: 1 }];
  }

  localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
};
