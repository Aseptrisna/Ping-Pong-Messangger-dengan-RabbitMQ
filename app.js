const amqp=require('./src/config/rmq')
const client=require('./src/controller/counsumer')
const channelclient1="client1";
const channelclinet2="client2";
async function main () {
    try {
      const connection = await amqp.connectToAmqp()
      await client.consumeclient1(connection,channelclient1)
      await client.consumeclient2(connection,channelclinet2)
    } catch (error) {
        console.log(error)
    }
  }
  main()