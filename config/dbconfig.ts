import {Client} from 'pg';
const conn= new Client({
    host:"localhost",
    port:6000,
    user:"postgres",
    password:"sql",
    database:"demo",
})
conn.connect();


export default conn;