const Redis = require('redis')
const publisher =
    Redis.createClient(
        process.env.REDIS_PORT_6379_TCP_PORT || 6379,
        process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost');

setInterval(() => {
    publisher.publish('MEU_CANAL', 'AEWWW:' + new Date().toISOString())
}, 1000)