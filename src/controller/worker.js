
const RmqConnection=require('../config/rmq')
const Publisher=require('../controller/publisher')
exports.kirim_pesan=async(req,res)=>{
    var channel=req.body.channel_tujuan
    var data="Anda Menerima pesan dari: "+req.body.channel_anda+" --Isi Pesan:"+req.body.message;
    try {
        const Connection = await RmqConnection.connectToAmqp()
        await Publisher.publish(Connection,channel,data)
        res.send({message:"Berhasil Mengirim Pesan ke="+channel})
    } catch (error) {
        
    }
}