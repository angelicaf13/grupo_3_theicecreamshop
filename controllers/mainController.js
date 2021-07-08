const path = require('path');

const mainControlador={
    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname,'../views/main/index.html'));
    }
}
module.exports=mainControlador;