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

module.exports = {
  create,
};