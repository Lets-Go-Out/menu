const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ 
    contactPoints: [
        "127.0.0.1"
    ], 
    keyspace: 'menus',
    socketOptions: {
        connectionTimeout: 5000
    }, 
    localDataCenter: 'datacenter1'
});

client.connect((err, res) => {
    if(err){
        console.error(err)
    } else {
        console.log('Connected to cluster! :D')
    }
})

module.exports = client;
 