import express from 'express';
import { connection } from "../mysql/index.js";

const router = express.Router();

router.get('/', async (req, res, next) =>{
    try {
        await connection.query('SELECT * FROM sys.menu;', (err, rows, fields) => {
            if (!err) {
                console.log(rows[0])
                return res.status(200).json(rows);
            } else {
                return res.status(400).send('error');
            }
        });
    } catch (e) {
        console.error(e);
        return e;
    }
})

export default router;
