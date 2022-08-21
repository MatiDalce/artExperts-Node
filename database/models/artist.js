

module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 image:{type: DataTypes.STRING},

                 name: { type: DataTypes.STRING,
                                allowNull: false},
                 bio:{ type: DataTypes.STRING,
                        allowNull: false},

               auth:{ type: DataTypes.STRING,
                            allowNull: false},
                };

    let config = {tableName: "Artist",timestamps: false}

    const Artist = sequelize.define("Artist", cols, config);

    
    return Artist;
}