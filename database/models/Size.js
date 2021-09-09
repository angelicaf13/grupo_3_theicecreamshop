module.exports = (sequelize, dataTypes) => {
    let alias = "Size"; 

    let cols = {
        id_size: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
	        primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'sizes',
        timestamps: false
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        Size.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_size'
        })
    }

    return Flavor;
}