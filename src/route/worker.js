const router =require('express').Router();
const WorkerController=require('../controller/worker')

router.post('/sendmsg',WorkerController.kirim_pesan)
module.exports=router;

