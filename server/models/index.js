const Sequelize = require('sequelize');
const fs =require('fs');
const path = require('path')
const basename = path.basename(module.filename)

const sequelize = new Sequelize('tasks', 'amanda' , 'password', {
  host : 'localhost',
  dialect : 'postgres',
});

const db = {}

fs.readdirSync(__dirname)
  .filter((file)=>{
    return file.indexOf('.')!==0 && file !=basename && file.slice(-3) === '.js'
  }).forEach((file)=>{
    const model=sequelize.import(path.join(__dirname,file))
    db[model.name]
  })

  Object.keys(db).forEach((modelName)=>{
    if(db[modelName].associate){
      db[modelName].associate(db)
    }
  })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

modeule.exports = db