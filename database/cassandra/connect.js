const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ 
    contactPoints: [
        // '127.0.0.1'
        "172.31.63.186", 
        "172.31.61.207",
        "172.31.48.192",
        "172.31.52.93",
        "172.31.53.36"
    ], 
    keyspace: 'menus',
    socketOptions: {
        connectionTimeout: 5000
    }, 
    localDataCenter: 'dc1', 
    queryOptions: {
        consistency: cassandra.types.consistencies.one
    }
});

client.connect((err, res) => {
    if(err){
        //console.error(err)
    } else {
        //console.log('Connected to cluster! :D')
    }
})

module.exports = client;