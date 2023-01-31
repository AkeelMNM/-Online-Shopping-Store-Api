import mongoose from 'mongoose';

const Schema = mongoose.Schema;

type ShoppingCart = {
    id: string;
    userId: string,
    productId: string,
    variantId: string;
    title: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    isFreeShipping: boolean;
    image: string;
}

const ShoppingCartSchema = new Schema<ShoppingCart>(
    {
        userId: {
            type: String,
            default: "",
            required: true,
        },
        productId: {
            type: String,
            default: "",
            required: true,
        },
        variantId: {
            type: String,
            default: "",
            required: true,
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
        size: {
            type: String,
            default: "",
            required: true,
        },
        color: {
            type: String,
            default: "",
            required: true,
        },
        quantity: {
            type: Number,
            default: 0,
            required: true,
        },
        price: {
            type: Number,
            default: 0,
            required: true,
        },
        isFreeShipping: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("ShoppingCart", ShoppingCartSchema);