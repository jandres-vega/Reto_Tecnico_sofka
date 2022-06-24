const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModel = require('../db/models/index')

const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);

const URL = `postgres://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${config.db_name}`;

const sequelize = new Sequelize(URL, {
    dialect: 'postgres',
    logging: false
})

setupModel(sequelize)

module.exports = {
    conn: sequelize
}