import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Image extends Model {
    static init(sequelize) {
        return super.init(
            {
                type: DataTypes.STRING,
                name: DataTypes.STRING,
                data: DataTypes.BLOB("long"),
               
                imageId:{
                    type:DataTypes.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                }
            },
            { sequelize, modelName: 'Image' }
        );
    }

    static associate(models) {
        // define association here
       
        //this.hasMany(models.Book, { as: 'books' });
		// or this.hasOne(...) depends your relations
        return this;
    }
}

Image.init(db.sequelize);

export default Image;