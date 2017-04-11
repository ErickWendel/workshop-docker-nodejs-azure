const Redis = require('redis')
const publisher =
    Redis.createClient(
        process.env.REDIS_PORT_6379_TCP_PORT || 6379,
        process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost')

publisher.subscribe('MEU_CANAL')
publisher.on('message', (channel, message) => {
    console.log(`Message from: ${channel}, content: ${message} `)
})