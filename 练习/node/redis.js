var redis = require('redis')
var client = redis.createClient()
client.set('key', 'value', function(err, data) {
  if(err) {
    console.error(err.message)
    process.exit(1)
  }
  client.get('key', function(err, data) {
    if(err) {
      console.error(err.message)
      return
    }
    console.log(data)
    process.exit(0)
}) })