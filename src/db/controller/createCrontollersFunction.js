
const database = require("../database");


function createController(dataBaseNameTable, idPrimaryKeyName) {
    return {
        async getAll(req, res) {
            try {
                const connection = await database.getConnection();

                const [rows] = await connection.query(`SELECT * FROM ${dataBaseNameTable}`);

                if (rows.length === 0) return res.status(404).json({ message: 'No se encontraron registros.' });

                res.json(rows);

            } catch (error) {

                res.status(500).json({ message: 'Error al obtener registro', error });

            }
        },

        //Solo trae un usuario 
        async getById(req, res) {
            try {

                const { id } = req.body;

                const connection = await database.getConnection();

                const [rows] = await connection.query(`SELECT * FROM ${dataBaseNameTable} WHERE ${idPrimaryKeyName} = ?`, [id]);

                if (rows.length === 0) return res.status(404).json({ message: 'Registro no encontrado.' });

                res.json(rows);

            } catch (error) {

                res.status(500).json({ message: 'Error al obtener registro', error });

            }
        },


        //Crea un nuevo usuario en la abase de datos
        async create(req, res) {
            try {
                const data = req.body;

                const connection = await database.getConnection();

                const [result] = await connection.query(`INSERT INTO ${dataBaseNameTable} SET ? `, [data]);

                res.status(201).json({
                    message: 'Registro creado correctamente',
                    user: result.insertId
                });

            } catch (error) {

                res.status(500).json({ message: 'Error al crear registro', error });

            }
        },


        async update(req, res) {
            try {

                const { id } = req.body;
                const data = req.body;

                if (data.id) {
                    delete data.id;
                }

                const connection = await database.getConnection();

                const [result] = await connection.query(`UPDATE ${dataBaseNameTable} SET ? WHERE ${idPrimaryKeyName} = ?`, [data, id]);

                if (result.affectedRows === 0) return res.status(404).json({ message: "Registro no encontrado" });

                res.status(200).json({ message: "Registro actualizado correctamente" });
            } catch (error) {

                res.status(500).json({ message: "Error al actualizar registro", error });
            }
        },


        async delete(req, res) {
            try {

                const { id } = req.body
                const connection = await database.getConnection();

                const [result] = await connection.query(`DELETE FROM ${dataBaseNameTable} WHERE ${idPrimaryKeyName} = ?`, [id]);

                if (result.affectedRows === 0) return res.status(404).json({ message: "Registro no encontrado" });

                res.json({ message: "Registro eliminado correctamente" });

            } catch (error) {
                res.status(500).json({ message: "Error al eliminar registro", error });
            };
        }
    }
}

module.exports = createController;