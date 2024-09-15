import Post from "./Post.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID')
    }
    const post = await Post.findById(id);
    return post
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({"message": "id не найден"});
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params;
      if (!id) {
        res.status(400).json({"message": "id не найден"});
      }
      const post = await Post.findByIdAndDelete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostService();