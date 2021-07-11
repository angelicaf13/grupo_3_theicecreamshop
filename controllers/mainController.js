const path = require('path');

const mainControlador={
    index: (req,res)=>{
        res.render(path.resolve(__dirname,'../views/main/index'));
    }
}
module.exports=mainControlador;