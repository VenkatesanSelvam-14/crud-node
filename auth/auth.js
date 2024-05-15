const {DataTypes}= require('sequelize');
const CONNECTDB = require('../config/config');
const User = CONNECTDB.define('User', {
    user_id: {
        type: DataTypes.STRING, 
        allowNull: true,
        primaryKey: true
       
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },{
   
    tableName: 'usertable',
    timestamps: false 
  }
  );

//   (async () => {
//     await CONNECTDB.sync({ force: true }); 
//     console.log('All models were synchronized successfully.');
//   })();

  module.exports=User;


  

    