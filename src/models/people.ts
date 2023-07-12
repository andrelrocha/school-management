import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/dbConnect"; // Importe a instância do Sequelize já configurada

class People extends Model {
    static associate(models: any) {
    // Defina as associações aqui
    }
}

People.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
        },
        email: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "People",
    }
);

export default People;