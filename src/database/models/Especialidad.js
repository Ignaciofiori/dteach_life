module.exports = function(sequelize,dataTypes){
    let alias = "Especialidad"
    let cols ={
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
         
        },
        nombre:{
            type:dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName:"especialidades",
        timestamps:false
    }
    
    const Especialidad = sequelize.define(alias,cols,config)
    
    Especialidad.associate= function(models){
        Especialidad.hasMany(models.Clase,{
            as:"clases",
            foreignKey:"id_especialidad"
        })
    }
    
    return Especialidad
} 