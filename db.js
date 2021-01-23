const { Pool } = require('pg')

const pool = new Pool({
    user: 'endfzhia',
    host: 'motty.db.elephantsql.com',
    database: 'endfzhia',
    password: 'I3RG8l3bem8G1wIt8hJ9Gvj0AsPpvwbp',
    port: 5432,
})

module.exports = pool