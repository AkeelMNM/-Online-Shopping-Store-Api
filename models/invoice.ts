import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type Invoice = {
    userId: string;
    fullName: string;
    address: string;
    city: string;
    province: string;
    mobileNo: string;
};

const InvoiceSchema = new Schema<Invoice>(
    {
        userId: {
            type: String,
            default: "",
            required: true,
        },
        fullName: {
            type: String,
            default: "",
            required: true,
        },
        address: {
            type: String,
            default: "",
            required: true,
        },
        city: {
            type: String,
            default: "",
            required: true,
        },
        province: {
            type: String,
            default: "",
            required: true,
        },
        mobileNo: {
            type: String,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Invoice", InvoiceSchema);