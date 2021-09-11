module.exports = (sequelize, dataTypes) => {
    let alias = "Brand"; 

    let cols = {
        id_brand: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
	        primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'brands',
        timestamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_brand'
        })
    }

    return Brand;
}