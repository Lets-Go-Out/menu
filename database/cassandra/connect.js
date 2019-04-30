const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ 
    contactPoints: [
    "172.31.25.15",
    "172.31.23.58",
    "172.31.30.192"
    ], 
    keyspace: 'menus',
    socketOptions: {
        connectionTimeout: 5000
    }, 
    localDataCenter: 'dc1'
});

client.connect((err, res) => {
    if(err){
        // console.error(err)
    } else {
        // console.log('Connected to cluster! :D')
    }
})

module.exports = client;
 