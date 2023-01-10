module.exports = function(sequelize,dataTypes){
    let alias = "Usuario"
    let cols ={
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
         
        },
        nombre:{
            type:dataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type:dataTypes.STRING,
            allowNull: false
        },
        email:{
            type:dataTypes.STRING,
            allowNull: false
        },
        password:{
            type:dataTypes.STRING,
            allowNull: false
        },
        descripcion:{
            type:dataTypes.STRING,
            allowNull: false
        },
        ubicacion:{
            type:dataTypes.STRING,
            allowNull: false
        },
        id_categoria:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagen:{
            type:dataTypes.STRING
        }
    }
    let config = {
        tableName:"usuarios",
        timestamps:false
    }
    
    const Usuario = sequelize.define(alias,cols,config)

    Usuario.associate= function(models){
        Usuario.belongsTo(models.Categoria,{
            as:"Categoria",
            foreignKey:"id_categoria"
        }),
        Usuario.belongsToMany(models.Clase,{
            as:"Clases",
            through:"usuarios_clases",
            foreignKey:"id_usuario",
            otherKey:"id_clase",
            timestamps:false
        })
    }
    
    
    return Usuario
} 