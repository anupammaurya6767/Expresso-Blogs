
import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    let Blogs = await Blog.find()
    res.status(200).json({Blogs})
}

export default connectDb(handler);