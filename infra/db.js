const mysql = require('mysql');
const { promisify } = require('util')

var pool = null;
class Db {
	static createPool() {
		if (pool) {
			return;
		}
		pool = mysql.createPool({ host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASS, database: 'grupo12' });
		pool.query = promisify(pool.query).bind(pool);
	}
	static pool() {
		return pool;
	}
}

module.exports['Db'] = Db;
