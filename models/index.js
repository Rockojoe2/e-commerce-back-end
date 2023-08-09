// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category. Deletes related data through the onDelete cascade.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

//Products belongToMany Tags through ProductTag product_id foreign key



Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_id"
  },
  // as: 'productTag_products'
});

//Products belongToMany Tags through ProductTag product_id foreign key

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "tag_id"
  },
  // as: 'productTag_products'
});

//Exporting Product, Category, Tag, and ProductTag as modules
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
