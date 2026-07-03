import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const USERS_KEY = "cheriesUsers";
const CURRENT_USER_KEY = "cheriesCurrentUser";

const getSavedUsers = () => {
  const savedUsers = localStorage.getItem(USERS_KEY);

  if (savedUsers) {
    return JSON.parse(savedUsers);
  }

  return [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem(CURRENT_USER_KEY);

    if (savedCurrentUser) {
      return JSON.parse(savedCurrentUser);
    }

    return null;
  });

  const [guestCart, setGuestCart] = useState([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(currentUser)
      );
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const makeSafeProfile = (profile) => {
    return {
      ...profile,
      favorites: profile.favorites || [],
      cart: profile.cart || [],
      orders: profile.orders || [],
    };
  };

  const signup = ({ name, email, password }) => {
    const users = getSavedUsers();

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser = {
      type: "user",
      name,
      email,
      password,
      favorites: [],
      cart: guestCart || [],
      orders: [],
    };

    const updatedUsers = [...users, newUser];

    saveUsers(updatedUsers);
    setCurrentUser(newUser);
    setGuestCart([]);

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const login = ({ email, password }) => {
    const users = getSavedUsers();

    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Incorrect email or password.",
      };
    }

    const safeUser = makeSafeProfile(foundUser);

    const mergedUser = {
      ...safeUser,
      cart: [...safeUser.cart, ...guestCart],
    };

    const updatedUsers = users.map((user) =>
      user.email === mergedUser.email ? mergedUser : user
    );

    saveUsers(updatedUsers);
    setCurrentUser(mergedUser);
    setGuestCart([]);
    closeAuthModal();

    return {
      success: true,
      message: "Logged in successfully.",
    };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateCurrentProfile = (updatedProfile) => {
    const safeUpdatedProfile = makeSafeProfile(updatedProfile);

    setCurrentUser(safeUpdatedProfile);

    const users = getSavedUsers();

    const updatedUsers = users.map((user) =>
      user.email === safeUpdatedProfile.email
        ? safeUpdatedProfile
        : user
    );

    saveUsers(updatedUsers);
  };

  const isFavorite = (productId) => {
    if (!currentUser) {
      return false;
    }

    const favorites = currentUser.favorites || [];

    return favorites.some((item) => item.id === productId);
  };

  const toggleFavorite = (product) => {
    if (!currentUser) {
      return "Create a profile to add this to your favorite.";
    }

    const favorites = currentUser.favorites || [];
    const alreadyFavorite = isFavorite(product.id);

    let updatedFavorites;

    if (alreadyFavorite) {
      updatedFavorites = favorites.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          selectedColor: product.colors[0].name,
          selectedSize: "Not selected yet",
        },
      ];
    }

    const updatedProfile = {
      ...currentUser,
      favorites: updatedFavorites,
    };

    updateCurrentProfile(updatedProfile);

    return alreadyFavorite
      ? "Removed from Favorites"
      : "Added to Favorites";
  };

  const addToCart = (product, selectedColor, selectedSize) => {
    const cartItem = {
      cartId: `${product.id}-${Date.now()}`,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor: selectedColor || product.colors[0].name,
      selectedSize: selectedSize || "Not selected yet",
      quantity: 1,
    };

    if (!currentUser) {
      setGuestCart((currentCart) => [
        ...currentCart,
        cartItem,
      ]);

      return "Added to Cart";
    }

    const cart = currentUser.cart || [];

    const updatedProfile = {
      ...currentUser,
      cart: [...cart, cartItem],
    };

    updateCurrentProfile(updatedProfile);

    return "Added to Cart";
  };

  const removeFromCart = (cartId) => {
    if (!currentUser) {
      setGuestCart((currentCart) =>
        currentCart.filter((item) => item.cartId !== cartId)
      );

      return;
    }

    const cart = currentUser.cart || [];

    const updatedCart = cart.filter(
      (item) => item.cartId !== cartId
    );

    const updatedProfile = {
      ...currentUser,
      cart: updatedCart,
    };

    updateCurrentProfile(updatedProfile);
  };

  const placeOrder = (checkoutInfo) => {
    const activeCart = currentUser
      ? currentUser.cart || []
      : guestCart || [];

    if (activeCart.length === 0) {
      return {
        success: false,
        message: "Your cart is empty.",
      };
    }

    const getPriceNumber = (price) => {
      return Number(price.replace("$", ""));
    };

    const subtotal = activeCart.reduce((total, item) => {
      return total + getPriceNumber(item.price) * item.quantity;
    }, 0);

    const shipping = subtotal >= 100 ? 0 : 12;
    const total = subtotal + shipping;

    const newOrder = {
      orderId: `CHERIE-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      items: activeCart,
      customer: checkoutInfo,
      subtotal,
      shipping,
      total,
    };

    if (!currentUser) {
      setGuestCart([]);

      return {
        success: true,
        message: "Order placed successfully.",
        order: {
          ...newOrder,
          isGuestOrder: true,
        },
      };
    }

    const updatedProfile = {
      ...currentUser,
      cart: [],
      orders: [newOrder, ...(currentUser.orders || [])],
    };

    updateCurrentProfile(updatedProfile);

    return {
      success: true,
      message: "Order placed successfully.",
      order: newOrder,
    };
  };

  const cart = currentUser ? currentUser.cart || [] : guestCart;
  const favorites = currentUser ? currentUser.favorites || [] : [];
  const orders = currentUser ? currentUser.orders || [] : [];

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const favoritesCount = favorites.length;
  const ordersCount = orders.length;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthModalOpen,
        cartCount,
        favoritesCount,
        ordersCount,
        cart,
        favorites,
        orders,
        openAuthModal,
        closeAuthModal,
        signup,
        login,
        logout,
        isFavorite,
        toggleFavorite,
        addToCart,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};