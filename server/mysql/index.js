import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createConnection({
    user: 'root',
    password: process.env.DB_PASSWORD,
    database:'sys',
    host: 'localhost',
    port: 3306,
});
