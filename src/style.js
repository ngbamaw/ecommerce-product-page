import styled from 'styled-components';

const EcommerceProductPage = styled.div`
    font-family: "Kumbh Sans", sans-serif;
    button {
        font-family: inherit;
    }
    header {
        width: 100%;
        height: 96px;
        display: flex;
        align-items: center;
        padding-inline: 7.5rem;

        @media screen and (max-width: 1200px) {
            padding-inline: 2rem;
        }
        @media screen and (max-width: 900px) {
            padding-inline: 1rem;
            height: 72px;
        }
        .logo {
            @media screen and (min-width: 900px) {
                margin-right: 4rem;
            }
            @media screen and (max-width: 900px) {
                transform: scale(1);
                margin-left: 1rem;
            }
        }
        .menu-btn-mobile {
            @media screen and (min-width: 900px) {
                display: none;
            }
        }
        .menu {
            @media screen and (max-width: 900px) {
                display: none;
            }
            display: flex;
            gap: 2rem;
            height: 100%;
            .menu-item {
                display: flex;
                a {
                    color: hsl(219, 9%, 45%);
                    display: flex;
                    align-items: center;
                }
                &:hover {
                    a {
                        color: hsl(220, 13%, 13%);
                    }
                    border-bottom: solid 3px hsl(26, 100%, 55%);
                }

                border-bottom: solid 3px transparent;
            }
        }
        .section-user {
            display: flex;
            align-items: center;
            margin-left: auto;
            gap: 2rem;
            position: relative;

            @media screen and (max-width: 900px) {
                position: static;
                gap: 1rem;
            }
            .cart-details {
                position: absolute;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
                right: 0;
                top: 100%;
                z-index: 9999;
                background-color: white;
                border-radius: 0.5rem;
                @media screen and (max-width: 900px) {
                    right: 0;
                    left: 0;
                    top: 15%;
                    margin: auto;
                    width: 95%;
                }
                .cart-title {
                    padding: 1.4rem;
                    border-bottom: solid hsla(219, 9%, 45%, 30%) 0.5px;
                    font-weight: 700;
                    text-align: left;
                }
                .cart-empty {
                    height: 200px;
                    width: 400px;
                    max-width: 100%;
                    max-height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: hsl(219, 9%, 45%);
                }
                .cart-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2rem;
                    .btn-checkout {
                        padding-block: 1rem;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        gap: 1rem;
                        font-weight: 700;
                        color: white;
                        background-color: hsl(26, 100%, 55%);
                        border-radius: 0.5rem;
                        width: 100%;
                    }
                    .cart-item {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        color: hsl(219, 9%, 45%);
                        .cart-item-image {
                            height: 48px;
                            width: 48px;
                            border-radius: 5px;
                        }
                        .cart-item-details {
                            .cart-item-name {
                                font-weight: 400;
                                width: max-content;
                                text-align: left;
                                margin-bottom: 0.2rem;
                            }
                            .cart-item-price {
                                text-align: left;
                                .cart-item-price-quantity {
                                    width: fit-content;
                                    display: flex;
                                    gap: 0.2rem;
                                    letter-spacing: 0.5px;
                                    .cart-item-price-total {
                                        font-weight: 700;
                                        color: black;
                                    }
                                }
                            }
                        }
                        .btn-delete {
                            height: 100%;
                        }
                    }
                }
            }
            .btn-cart {
                position: relative;
                .cart-quantity {
                    position: absolute;
                    right: 0;
                    font-weight: 700;
                    color: white;
                    background-color: hsl(26, 100%, 55%);
                    padding: 2px 10px;
                    border-radius: 12px;
                    transform: translateX(80%) translateY(-80%);
                }
                .cart-icon {
                }
            }
            .btn-avatar {
                height: 72px;
                width: 72px;
                padding: 1.5rem;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10%;
        flex-wrap: wrap;
        align-items: center;
        @media screen and (max-width: 1200px) {
            gap: 5%;
        }
        .swiper {
            position: relative;
            display: none;
            .btn-swipe {
                background-color: white;
                position: absolute;
                top: calc(50% - 24px);
                width: 48px;
                height: 48px;
                &.left {
                    left: 1rem;
                }
                &.right {
                    right: 1rem;
                }
                .arrow-icon {
                    transform: scale(0.8);
                }
            }
            @media screen and (max-width: 900px) {
                display: block;
            }
        }
        .product-preview {
            @media screen and (max-width: 900px) {
                display: none;
            }
            @media screen and (max-width: 1200px) {
                width: 40vh;
            }

            width: 50vh;

            .main-picture {
                @media screen and (max-width: 1200px) {
                    max-height: 40vh;
                    max-width: 40vh;
                }
                max-height: 50vh;
                max-width: 50vh;
                margin-bottom: 2rem;
                border-radius: 1rem;
            }
            .picture-list {
                display: flex;
                width: 100%;
                gap: 2rem;
                justify-content: space-between;
                .picture-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 1rem;
                    display: flex;
                    margin: auto;
                    button {
                        width: 100%;
                        display: flex;
                        &::before {
                            content: "";
                            position: absolute;
                            background-color: white;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                        }
                        img {
                            width: 100%;
                        }
                    }

                    &:hover {
                        button {
                            &::before {
                                opacity: 0.3;
                            }
                        }
                    }
                    &.selected {
                        button {
                            &::before {
                                opacity: 0.5;
                            }
                        }
                        border: solid 3px hsl(26, 100%, 55%);
                    }
                }
            }
        }
        .product-card {
            padding-block: 7rem;
            width: 50vh;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            @media screen and (max-width: 1200px) {
                width: 40vh;
            }

            @media screen and (max-width: 900px) {
                width: 100%;
                padding-block: 0;
                padding: 2rem;
                gap: 2rem;
            }
            .brand {
                font-weight: 700;
                font-size: 1rem;
                color: hsl(26, 100%, 55%);
                letter-spacing: 0.2rem;
                margin-bottom: -2rem;
                @media screen and (max-width: 900px) {
                    margin-bottom: -1rem;
                }
            }
            .product-name {
                font-weight: 700;
                font-size: 2.5rem;
                @media screen and (max-width: 900px) {
                    font-size: 2rem;
                }
            }
            .product-description {
                font-size: 1.1rem;
                line-height: 2rem;
                color: hsl(219, 9%, 45%);
                @media screen and (max-width: 900px) {
                    font-size: 0.9rem;
                    line-height: 1.5rem;
                }
            }
            .section-product-price {
                @media screen and (max-width: 900px) {
                    display: flex;
                    align-items: center;
                }
                .product-price {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                    @media screen and (min-width: 900px) {
                        gap: 1rem;
                    }
                    .price {
                        font-weight: 700;
                        font-size: 2rem;
                        @media screen and (min-width: 900px) {
                            max-height: 40vh;
                            max-width: 40vh;
                        }
                    }
                    .discount {
                        font-weight: 700;
                        font-size: 1.2rem;
                        color: hsl(26, 100%, 55%);
                        background-color: hsl(25, 100%, 94%);
                        width: fit-content;
                        padding: 2px 10px;
                        border-radius: 0.5rem;
                    }
                }
                .price-old {
                    font-size: 1.2rem;
                    position: relative;
                    width: fit-content;
                    font-weight: 700;
                    color: hsl(220, 14%, 75%);
                    @media screen and (max-width: 900px) {
                        height: fit-content;
                        margin-left: auto;
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        background-color: hsl(220, 14%, 75%);
                        width: 100%;
                        height: 1px;
                        top: 60%;
                    }
                }
            }
            .section-product-add {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                .product-quantity {
                    display: flex;
                    height: 100%;
                    padding-block: 1rem;
                    gap: 2rem;
                    font-size: 1rem;
                    font-weight: 700;
                    flex: 1;
                    margin: auto;
                    background-color: hsl(223, 64%, 98%);

                    @media screen and (max-width: 900px) {
                        margin: auto 0;
                        flex: auto;
                        width: 100%;
                        gap: 0;
                        justify-content: space-between;
                        padding-inline: 1rem;
                    }
                    .btn-quantity {
                        display: flex;
                        margin: auto;
                        @media screen and (max-width: 900px) {
                            margin: auto 0;
                        }
                    }
                    .quantity {
                    }
                }
                .btn-add-to-cart {
                    position: relative;
                    font-family: inherit;
                    flex: 2;
                    padding-block: 1rem;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    gap: 1rem;
                    font-weight: 700;
                    color: white;
                    background-color: hsl(26, 100%, 55%);
                    border-radius: 0.5rem;

                    @media screen and (max-width: 900px) {
                        flex: auto;
                    }
                    &::before {
                        content: "";
                        position: absolute;
                        background-color: white;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                    }
                    &:hover {
                        &::before {
                            opacity: 0.3;
                        }
                    }
                    .cart-icon {
                        path {
                            fill: white;
                        }
                    }
                }
            }
        }
    }
`;

export default EcommerceProductPage;