import * as amqplib from "amqplib";

(async function() {
  
  try {
    
    const connection = await amqplib.connect(process.env.RND_RABBITMQ);

    const channel = await connection.createChannel();

    await channel.assertQueue("tasks");

    channel.sendToQueue("tasks", Buffer.from("hello"));

    await channel.close();

    await connection.close();

  } catch (err) {
    console.log(err);
  }

})();