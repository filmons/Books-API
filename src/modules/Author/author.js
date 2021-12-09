import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Author extends Model {
    static init(sequelize) {
        return super.init(
            {
                firstName:DataTypes.STRING,
                lastName:DataTypes.STRING,
                userId:{
                    type:DataTypes.INTEGER,
                    primaryKey:true,
                    autoIncrement:true
                }
            },
            { sequelize, modelName: 'Author' }
        );
    }

    static associate(models) {
        // define association here
        //this.belongsTo(models.User);
        return this;
    }
}

Author.init(db.sequelize);

export default Author;