import React from "react";
import SwipeableViews from "react-swipeable-views";
import classNames from "clsx";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";

import Cart from "./Cart";
import Header from "./Header";

import MinusIcon from "./images/icon-minus.svg";
import PlusIcon from "./images/icon-plus.svg";
import CartIcon from "./images/icon-cart.svg?react";
import CloseIcon from "./images/icon-close.svg?react";
import NextIcon from "./images/icon-next.svg?react";
import PreviousIcon from "./images/icon-previous.svg?react";
import AvatarImage from "./images/image-avatar.png";
import ProductImage1 from "./images/image-product-1.jpg";
import ProductImage2 from "./images/image-product-2.jpg";
import ProductImage3 from "./images/image-product-3.jpg";
import ProductImage4 from "./images/image-product-4.jpg";
import ProductImageThumbnail1 from "./images/image-product-1-thumbnail.jpg";
import ProductImageThumbnail2 from "./images/image-product-2-thumbnail.jpg";
import ProductImageThumbnail3 from "./images/image-product-3-thumbnail.jpg";
import ProductImageThumbnail4 from "./images/image-product-4-thumbnail.jpg";
import EcommerceProductPage from "./style";
import "./font.css";

const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: 125,
    oldPrice: 250,
    discount: 50,
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    imageList: [
        {
            id: 1,
            image: ProductImage1,
            thumbnail: ProductImageThumbnail1,
            favorite: true,
        },
        {
            id: 2,
            image: ProductImage2,
            thumbnail: ProductImageThumbnail2,
            favorite: false,
        },
        {
            id: 3,
            image: ProductImage3,
            thumbnail: ProductImageThumbnail3,
            favorite: false,
        },
        {
            id: 4,
            image: ProductImage4,
            thumbnail: ProductImageThumbnail4,
            favorite: false,
        },
    ],
};

interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    imageList: {
        id: number;
        image: string;
        thumbnail: string;
        favorite: boolean;
    }[];
}

export interface ProductItem {
    product: Product;
    quantity: number;
}

const App = () => {
    const [selectedImage, setSelectedImage] = React.useState(1);
    const [quantity, setQuantity] = React.useState(0);
    const [productList, setProductList] = React.useState<ProductItem[]>([]);
    const [activeStep, setActiveStep] = React.useState(0);
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const currentImage = product.imageList.find(
        (item) => item.id === selectedImage
    );

    const addToCart = () => {
        if (quantity > 0) {
            if (productList.find((item) => item.product.id === product.id)) {
                const newProductList = productList.map((item) => {
                    if (item.product.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        };
                    }
                    return item;
                });
                setProductList(newProductList);
            } else {
                setProductList([
                    ...productList,
                    {
                        product,
                        quantity,
                    },
                ]);
            }
            setQuantity(0);
        }
    };

    const removeFromCart = (id: number) => {
        setProductList(productList.filter((item) => item.product.id !== id));
    };

    return (
        <EcommerceProductPage>
            <Drawer
                anchor="left"
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                >
                    <List>
                        <ListItem disablePadding>
                            <IconButton style={{ padding: 32, paddingTop: 16 }}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                        {[
                            "Collections",
                            "Men",
                            "Women",
                            "About",
                            "Contact",
                        ].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>
                                    <p
                                        style={{
                                            fontFamily: "Kumbh Sans",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {text}
                                    </p>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Header openMenu={openMenu} onMenuOpen={() => setOpenMenu(true)}>
                <div className="section-user">
                    <Cart
                        productList={productList}
                        removeFromCart={removeFromCart}
                    />
                    <button className="btn-avatar">
                        <img src={AvatarImage} alt="avatar" />
                    </button>
                </div>
            </Header>
            <main>
                <div className="swiper">
                    <SwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        style={{ maxWidth: 500 }}
                    >
                        {product.imageList.map((step) => (
                            <div style={{ width: "fit-content" }} key={step.id}>
                                <Box
                                    component="img"
                                    sx={{
                                        maxWidth: 500,
                                        display: "block",
                                        overflow: "hidden",
                                        width: "100%",
                                    }}
                                    src={step.image}
                                    alt={String(step.id)}
                                />
                            </div>
                        ))}
                    </SwipeableViews>
                    <IconButton
                        className="btn-swipe left"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        <PreviousIcon className="arrow-icon" />
                    </IconButton>
                    <IconButton
                        className="btn-swipe right"
                        onClick={handleNext}
                        disabled={activeStep === product.imageList.length - 1}
                    >
                        <NextIcon className="arrow-icon" />
                    </IconButton>
                </div>
                <div className="product-preview">
                    <img
                        className="main-picture"
                        src={currentImage?.image}
                        alt="preview"
                    />
                    <ul className="picture-list">
                        {product.imageList.map((item) => (
                            <li
                                className={classNames("picture-item", {
                                    selected: item.id === selectedImage,
                                })}
                            >
                                <button
                                    onClick={() => setSelectedImage(item.id)}
                                >
                                    <img src={item.thumbnail} alt="product" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="product-card">
                    <p className="brand">{product.brand}</p>
                    <h1 className="product-name">{product.name}</h1>

                    <p className="product-description">{product.description}</p>
                    <div className="section-product-price">
                        <div className="product-price">
                            <p className="price">${product.price.toFixed(2)}</p>
                            <p className="discount">{product.discount}%</p>
                        </div>
                        <p className="price-old">
                            ${product.oldPrice.toFixed(2)}
                        </p>
                    </div>

                    <div className="section-product-add">
                        <div className="product-quantity">
                            <button
                                className="btn-quantity"
                                disabled={quantity === 0}
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                <img src={MinusIcon} alt="minus" />
                            </button>
                            <p className="quantity">{quantity}</p>
                            <button
                                className="btn-quantity"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <img src={PlusIcon} alt="plus" />
                            </button>
                        </div>
                        <button className="btn-add-to-cart" onClick={addToCart}>
                            <CartIcon className="cart-icon" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </main>
        </EcommerceProductPage>
    );
};

export default App;
