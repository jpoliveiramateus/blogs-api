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

const getByIdAndUser = async (req, res) => {
  const { id } = req.params; 
  const { id: userId } = req.user;

  const posts = await postService.getByIdAndUser(id, userId);

  if (!posts) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAllByUser,
  getByIdAndUser,
};