module.exports = function(sequelize,dataTypes){
    let alias = "Usuario_Clase"
    let cols ={
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
           
        },
        id_usuario:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        id_clase:{
            type:dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName:"usuarios_clases",
        timestamps:false
    }
    
    const Usuario_Clase = sequelize.define(alias,cols,config)
    return Usuario_Clase
} 