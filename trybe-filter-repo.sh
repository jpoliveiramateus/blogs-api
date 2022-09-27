### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido
## pela Trybe.

[[ $# == 1 ]] && \
[[ $1 == "trybe-security-parameter" ]] && \
git filter-repo \
    --path .trybe \
    --path .github \
    --path .vscode \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path README.md \
    --path __tests__/assets/helper/constants.js \
    --path __tests__/assets/helper/queries.js \
    --path __tests__/assets/helper/sequencer.js \
    --path __tests__/assets/helper \
    --path __tests__/assets \
    --path __tests__/req01-migrations.test.js \
    --path __tests__/req02-userModel.test.js \
    --path __tests__/req03-login.test.js \
    --path __tests__/req04-createUsers.test.js \
    --path __tests__/req05-getUsers.test.js \
    --path __tests__/req06-getUserById.test.js \
    --path __tests__/req07-categoryModel.test.js \
    --path __tests__/req08-createCategory.test.js \
    --path __tests__/req09-getCategories.test.js \
    --path __tests__/req10-blogPostModel.test.js \
    --path __tests__/req11-postCategoryModel.test.js \
    --path __tests__/req12-createPost.test.js \
    --path __tests__/req13-getPosts.test.js \
    --path __tests__/req14-getPostById.test.js \
    --path __tests__/req15-editPost.test.js \
    --path __tests__/req16-deletePost.test.js \
    --path __tests__/req17-deleteUsers.test.js \
    --path __tests__/req18-searchPost.test.js \
    --path __tests__ \
    --path public/der.png \
    --path public/remote-container.png \
    --path public/sequelize-01.png \
    --path public/sequelize-02.png \
    --path public \
    --invert-paths --force