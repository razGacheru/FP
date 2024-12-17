const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "gg",
    database: "postgres"
})

client.connect()
client.query("Select * from users")