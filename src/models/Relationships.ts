import category from "./Category";
import product from "./Product";

export const Category = category();
export const Product = product();

Category.hasMany(Product, {
    as: "products",
    onUpdate: "cascade",
    onDelete: "cascade",
});

Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
