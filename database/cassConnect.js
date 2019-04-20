const fs = require('fs')
const path = require('path')
const cassandra = require('cassandra-driver');

var authProvider = new cassandra.auth.PlainTextAuthProvider('jennummerdor', '627277');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'cycling' });

// const query = COPY cycling.restaurant_menus FROM '/Users/jennummerdor/hrphx/sdc/menu/database/records/example.csv' WITH DELIMITER='^' AND HEADER=TRUE;

// const query = `SELECT menu_type FROM cycling.restaurant_menus WHERE restaurant_id = 20`

// client.execute(query)
//   .then(result => console.log('Here it is:', result.rows[0].menu_type))
//   .catch(err => console.error(err))

// INSERT INTO cycling.restaurant_menus(restaurant_id,date,menu_type) VALUES(30,'2019-04-25',{'breakfast':'{}', 'brunch':'{}'});



// function createExample(){
//   let count = 0;
//   let strBody = `id,num,test\n`;
//   for(var i = 0; i < 1000000; i++){
//     strBody+= `${count++},4,hey\n`
//   }
//   return strBody;
// }

// let writeStream = fs.createWriteStream(path.join(__dirname + '/records/example.csv'));
// writeStream.write(createExample(), 'utf-8')


  // client.execute(query, (err, res) => {
  //   console.log(err || res)
  // })

  //uuid = now()