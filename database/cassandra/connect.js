const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver');

var authProvider = new cassandra.auth.PlainTextAuthProvider('jennummerdor', '627277');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'menus' });

module.exports = client;
