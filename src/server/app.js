const mysql = require('mysql2');
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.SERVER_HOST,
    user: process.env.SERVER_USER,
    password: process.env.SERVER_KEY,
    database: process.env.SERVER_DATABASE
  }).promise();
  

async function getLinks() {
    const [rows] = await con.query("SELECT * FROM links");
    return rows;
};

async function getLink(short) {
    const [rows] = await con.query(`
    SELECT *
    FROM links
    WHERE short = ?
    `, [short]);

    if (rows.length > 0) {
        const link = rows[0];

        await con.query(`
        UPDATE links
        SET acessos = acessos + 1
        WHERE short = ?`, [short]);
        return link;
    } else {
        return null;
    }
};

async function createLink(linkOriginal,short,cliente,projeto) {
    const [result] = await con.query(`
        INSERT INTO links (linkOriginal,short,cliente,projeto)
        VALUES (?,?,?,?)`, [linkOriginal,short,cliente,projeto]
    );
    const resultado = result.insertId;
    return `${resultado}: ${linkOriginal},${short},${cliente},${projeto}`;
};

async function deleteLink(id) {
    try {
        const [result] = await con.query(`
        DELETE FROM links
        WHERE id = ?`, [id]);

        if (result.affectedRows > 0) {
            return {delete: "Link deletado"}
        } else {
            return {delete: "Link não encontrado"}
        }
    } catch (error) {
        console.error("Erro ao excluir o link:", error);
        return false;
    }
}

module.exports = { getLinks , getLink , createLink , deleteLink }