const amqp = require('amqplib')
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  connectToAmqp: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let connection = await amqp.connect(`amqp://${process.env.RMQ_USER}:${process.env.RMQ_PASS}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}/${process.env.RMQ_VHOST}?heartbeat=60`)
        // console.log(config.amqpUrl)
        resolve(connection)
      } catch (error) {
        console.log('Failed connect to AMQP: ')
        // reject(error)
      }
    })
  }
}