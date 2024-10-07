const {Sequelize}=require('sequelize')

const sequelize= new Sequelize(process.env.database,process.env.user,process.env.password,{
    host: process.env.host,
    dialect: process.env.dialect,
})

async()=>{
    try {
        await sequelize.authenticate(); 
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  
};

module.exports=sequelize;

