module.exports = (sequelize, dataTypes) => {
    let alias = "Category"; 

    let cols = {
        id_category: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
	        primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.User, {
            as: 'users',
            foreignKey: 'id_category'
        })
    }

    return Category;
}