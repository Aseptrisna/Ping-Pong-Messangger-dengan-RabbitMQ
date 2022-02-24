exports.consumeclient1 = async (connection,queue) => {
    const channel = await connection.createChannel();
    channel.consume(queue, async (msg) => {
      var data = msg.content.toString();
      console.log("Aplikasi Client 1 :")
      console.log(data)
    });
  };

  exports.consumeclient2 = async (connection,queue) => {
    const channel = await connection.createChannel();
    channel.consume(queue, async (msg) => {
      var data = msg.content.toString();
      console.log("Aplikasi Client 2:")
      console.log(data)
    });
  };