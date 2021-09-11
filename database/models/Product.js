module.exports = (sequelize, dataTypes) => {
	const Product = sequelize.define('Product', {
	  id_product: {
	
	  autoIncrement: true,
	  primaryKey: true,
	  type: dataTypes.INTEGER

	  },
      id_brand: {
        type: dataTypes.INTEGER
      },
      id_flavor: {
        type: dataTypes.INTEGER
      },
      description: {
	    type: dataTypes.STRING
	  },
      id_size: {
        type: dataTypes.INTEGER
      },
      price: {
        type: dataTypes.FLOAT
      },
      stock: {
        type: dataTypes.INTEGER
      },
      status: {
        type: dataTypes.BOOLEAN
      },
      productImage: {
        type: dataTypes.STRING
      }
	}, 
    {
	  tableName: 'products',
      timestamps: false
	});

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'id_brand'
        });
        Product.belongsTo(models.Flavor, {
            as: 'flavor',
            foreignKey: 'id_flavor'
        });
        Product.belongsTo(models.Size, {
            as: 'size',
            foreignKey: 'id_size'
        });
        Product.belongsToMany(models.Car, {
            as: 'cars',
            through: 'car_products',
            foreignKey: 'id_product',
            otherKey: 'id_car',
            timestamps: false
        });
    }
	
	  return Product;
	
	}