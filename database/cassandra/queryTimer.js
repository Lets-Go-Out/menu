const client = require('./connect')
const fs = require('fs')
const path = require('path')
const uuids = require('./records/UUID.1')

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