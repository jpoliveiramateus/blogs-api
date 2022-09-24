const { postService } = require('../services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;

  try {
    const post = await postService.create({ title, content, userId, categoryIds });
    return res.status(201).json(post);
  } catch (e) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
};

const getAllByUser = async (req, res) => {
  const { id: userId } = req.user;

  const posts = await postService.getAllByUser(userId);

  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAllByUser,
};