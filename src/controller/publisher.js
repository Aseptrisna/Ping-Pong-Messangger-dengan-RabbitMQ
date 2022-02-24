
exports.publish = async (connection,q,message) => {
  const channel = await connection.createChannel();
  await channel.assertQueue(q);
  channel.sendToQueue(q, Buffer.from(message))
};
