module.exports = (sequelize, dataTypes) => {
    let alias = "Flavor"; 

    let cols = {
        id_flavor: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
	        primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'flavors',
        timestamps: false
    }

    let Flavor = sequelize.define(alias, cols, config);

    Flavor.associate = function (models) {
        Flavor.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_flavor'
        })
    }

    return Flavor;
}