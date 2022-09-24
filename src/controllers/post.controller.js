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

  const post = await postService.getByIdAndUser(id, userId);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(post);
};

const updateByIdAndUser = async (req, res) => {
  const { id } = req.params; 
  const { id: userId } = req.user;
  const { title, content } = req.body;

  const userIsAuthorized = await postService.updateByIdAndUser({ id, title, content, userId });

  if (!userIsAuthorized) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const post = await postService.getByIdAndUser(id, userId);

  return res.status(200).json(post);
};

const deleteByIdAndUser = async (req, res) => {
  const { id } = req.params; 
  const { id: userId } = req.user;

  const post = await postService.getAllById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  const userIsAuthorized = await postService.deleteByIdAndUser({ id, userId });

  if (!userIsAuthorized) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.sendStatus(204);
};

const getBySearchTerm = async (req, res) => {
  const { q } = req.query;
  const { id: userId } = req.user;

  const posts = await postService.getBySearchTerm({ q, userId });

  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAllByUser,
  getByIdAndUser,
  updateByIdAndUser,
  deleteByIdAndUser,
  getBySearchTerm,
};