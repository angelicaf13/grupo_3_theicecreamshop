module.exports = (sequelize, dataTypes) => {
	const Car = sequelize.define('Car', {
	  id_car: {
	
	  autoIncrement: true,
	  primaryKey: true,
	  type: dataTypes.INTEGER

	  },
      id_user: {
        type: dataTypes.INTEGER
      },
      id_payment_type: {
        type: dataTypes.INTEGER
      },
      total: {
        type: dataTypes.FLOAT
      },
      date_sale: {
        type: dataTypes.DATE
      }
	}, 
    {
	  tableName: 'cars',
      timestamps: false
	});

    Car.associate = function (models) {
        Car.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Car.belongsTo(models.Payment, {
            as: 'payment',
            foreignKey: 'id_payment_type'
        });
        Car.belongsToMany(models.Product, {
            as: 'products',
            through: 'car_products',
            foreignKey: 'id_car',
            otherKey: 'id_product',
            timestamps: false
        });
    }
	
	  return Car;
	
	}