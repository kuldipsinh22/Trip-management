import mysql from "mysql"
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    passwoed:"",
    database:"trip_management" //Database name
})

export default db;