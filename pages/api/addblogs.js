import Blog from "../../models/Blog";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let b = new Blog({
            author: req.body[i].author,
            title: req.body[i].title,
            img: req.body[i].img,
            slug: req.body[i].slug,
            content: req.body[i].content,
            views: req.body[i].views,
            authorimg: req.body[i].authorimg,
            category: req.body[i].category
      });

      await b.save();
      res.status(200).json({ success: "success" });
    }
  } else {
    res.status(400).json({ err: "This method is not allowed" });
  }
};

export default connectDb(handler);
