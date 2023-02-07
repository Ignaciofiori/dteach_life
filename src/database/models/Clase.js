module.exports = function(sequelize,dataTypes){
    let alias = "Clase"
    let cols ={
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            
        },
        nombre_profesor:{
            type:dataTypes.STRING,
            allowNull: false
        },
        ubicacion:{
            type:dataTypes.STRING,
            allowNull: false
        },
        precio:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        descripcion:{
            type:dataTypes.STRING,
            allowNull: false
        },
        id_especialidad:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagen:{
            type:dataTypes.STRING
        },
        idProfesor:{
            type:dataTypes.INTEGER,
            allowNull: false
        }
    }
    
    let config = {
        tableName:"clases",
        timestamps:false
    }
    const Clase = sequelize.define(alias,cols,config)

    Clase.associate= function(models){
        Clase.belongsTo(models.Especialidad,{
            as:"especialidades",
            foreignKey:"id_especialidad"
        }),
        Clase.belongsToMany(models.Usuario,{
            as:"usuarios",
            through:"usuarios_clases",
            foreignKey:"id_clase",
            otherKey:"id_usuario",
            timestamps:false
        })

    }
    
    return Clase
} 