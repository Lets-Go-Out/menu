const client = require('./connect')
const fs = require('fs')
const path = require('path')
const uuids = require('./records/UUID.1')

module.exports = {
    findRestaurantById: function(id, cb){
        let query = `SELECT * FROM menus.restaurant_menus WHERE restaurant_id = ${id}`
        client.execute(query)
        .then(res => cb(res))
    },
    addNewRestaurant: function(id, newInfo, cb){
        let query = `INSERT INTO menus.restaurant_menus (restaurant_id, menu_list) VALUES (${id}, '${newInfo}')`
        console.log(query)
        client.execute(query)
        .then(res => cb(res))
    }, 
    editMenuByRestaurantId(id, updatedData, cb){
        let query = `UPDATE menus.restaurant_menus SET menu_list = '${updatedData}' WHERE restaurant_id = ${id}`
        client.execute(query)
        .then(res => cb(res))
    },
    deleteEntireMenu(id, cb){
        let query = `DELETE FROM menus.restaurant_menus WHERE restaurant_id = ${id}`
        client.execute(query)
        .then(res => cb(res))
    }
}

// for(var i = 0; i < 1000; i++){
//     (function getQueryTime(num){
//         setTimeout(()=>{
//         let query = `SELECT * FROM menus.restaurant_menus WHERE id = ${(uuids[0].split('\n'))[num].trim().slice(0,36)}`
//         client.execute(query, null, {traceQuery: true})
//         .then(result => result.info.traceId)
//         .then(traceId => client.metadata.getTrace(traceId))
//         .then(trace => console.log((trace.events[trace.events.length-1].elapsed) + ","))
//         }, 1000 * i + 1)
//     })(i)
// }
