import { Model, DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize, types: typeof DataTypes) => {
    class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models: any) {
            // define association here
        }
    }

    People.init(
        {
            name: types.STRING,
            active: types.BOOLEAN,
            email: types.STRING,
            role: types.STRING,
        },
        {
            sequelize,
            modelName: "People",
        }
    );

    return People;
};
