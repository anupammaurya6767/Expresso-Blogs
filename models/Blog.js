const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
      author: {type: String, required: true},
      title: {type: String, required: true},
      category: {type: String, default:"General"},
      img: {type: String, required: true},
      slug: {type: String, required:true,index:true,unique: true},
      content: {type: String, required: true},
      views: {type: Number, default:0},
      authorimg:{type: String, required:true}
},{timestamps: true});
mongoose.models = {};
export default mongoose.model("Blog", BlogSchema);