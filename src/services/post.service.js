const Sequelize = require('sequelize');

const { BlogPost, PostCategory } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const create = async ({ title, content, userId, categoryIds }) => {
  // Unmanaged transactions -  a transação não é gerenciada,
  // é preciso indicar manualmente a circunstância em que uma transação deve ser finalizada ou revertida,
  // ou seja, executar o commit ou rollback.

  const t = await sequelize.transaction();
  try {
    const post = await BlogPost.create({ title, content, userId }, { transaction: t });

    const createCategoryByPost = categoryIds.map((categoryId) => 
      PostCategory.create({ postId: post.id, categoryId }, { transaction: t }));

    await Promise.all(createCategoryByPost);

    await t.commit();
    const postFound = await BlogPost.findOne({ where: { id: post.id } });
    return postFound;
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
};

module.exports = {
  create,
};
