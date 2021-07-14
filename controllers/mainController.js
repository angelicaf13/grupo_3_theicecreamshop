const path = require('path');

const mainControlador={
    index: (req,res)=>{
        res.render('./main/index');
    }
}
module.exports=mainControlador;