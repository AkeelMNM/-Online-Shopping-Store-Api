import mongoose from 'mongoose';

const Schema = mongoose.Schema;

type Content = {
    id: string;
    type: string;
    image: string;
}

const ContentSchema = new Schema<Content>(
    {
        type: {
            type: String,
            default: "",
            required: true,
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

export default mongoose.model("Content", ContentSchema);