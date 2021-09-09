module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('User', {
	  id_user: {
	
	  autoIncrement: true,
	  primaryKey: true,
	  type: dataTypes.INTEGER

	  },
      id_category: {
        type: dataTypes.INTEGER
      },
      first_name: {
	    type: dataTypes.STRING
	  },
      last_name: {
        type: dataTypes.STRING
      },
      email: {
        type: dataTypes.STRING
      },
      pass: {
        type: dataTypes.STRING
      },
      profileImage: {
        type: dataTypes.STRING
      }
	}, 
    {
	  tableName: 'users',
      timestamps: false
	});

    User.associate = function (models) {
        User.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id_category'
        });
        User.hasMany(models.Car, {
            as: 'cars',
            foreignKey: 'id_user'
        });
    }
	
	  return User;
	
	}