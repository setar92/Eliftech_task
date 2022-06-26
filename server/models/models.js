const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    adress: { type: DataTypes.STRING },
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProducts = sequelize.define('basket_products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false }
})

const Shop = sequelize.define('shop', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProducts)
BasketProducts.belongsTo(Basket)


Shop.hasMany(Product)
Product.belongsTo(Shop)

Product.hasMany(BasketProducts)
BasketProducts.belongsTo(Product)

module.exports = {
    User,
    Basket,
    BasketProducts,
    Shop,
    Product
}