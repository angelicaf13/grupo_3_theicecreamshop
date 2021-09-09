module.exports = (sequelize, dataTypes) => {
    let alias = "Payment"; 

    let cols = {
        id_payment_type: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
	        primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'payment_types',
        timestamps: false
    }

    let Payment = sequelize.define(alias, cols, config);

    Payment.associate = function (models) {
        Payment.hasMany(models.Car, {
            as: 'cars',
            foreignKey: 'id_payment_type'
        })
    }

    return Payment;
}