import redis from 'redis'

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

client.on('connect', err => {
    if (err) throw err;
    console.log("Redis ready to use  🚀🚀🚀🚀")
})

client.on('error', err => {
    console.log('Error ' + err);
});

export default client