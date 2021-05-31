import { Pool /* , Client */ } from 'pg'

const pool = new Pool({
  user: 'app',
  host: 'postgres://postgres:5432',
  database: 'db',
  password: 'password',
  port: 5432,
})
// const client = new Client({
// user: 'dbuser',
// host: 'http://localhost/',
// database: 'mydb',
// password: 'example',
// port: 5432,
// })

// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

export default pool
