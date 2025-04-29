import mongoose, {Schema} from "mongoose"

const blogSchema = new Schema({
    tile: {
        string: true,
        required: true
    },
    content: {
        string: true,
        required: true,
    },
    authoer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
{
    timestamps: true
})


export  const Blog = mongoose.model("Blog", blogSchema)
