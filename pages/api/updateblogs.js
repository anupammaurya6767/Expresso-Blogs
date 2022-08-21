import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = await Blog.findOneAndUpdate({slug: req.body[i].slug},{views: req.body[i].views});
      res.status(200).json({ success: "success"});
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);
