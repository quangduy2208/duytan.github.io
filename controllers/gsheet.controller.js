var utils = require("./common.js")
var config = require("./config.js");


module.exports.index = function(req, res) {

  (async () => {
    var bienso = (req.query.bienso || '').trim();
    var data = await utils.filterData({ token: bienso, month: req.query.month }, config.docId); 
    try {
        res.render('gsheet/index', {
            bienso: bienso,
            rows: data,
            error: null
        })
    } catch (error) {
        console.log(error);
        res.render('gsheet/index', {
            bienso:req,
            rows: [],
            error: null
        })
    }     
})()
};

// module.exports.create = function(req, res) {
//     res.render('gsheet/create');
//   };

// module.exports.postCreate = function(req, res) {
//     (async () => {   
//         try{
//             var row = {
//                 date: new Date().toLocaleString(),
//                 bienso: req.body.bienso,
//                 username: req.body.username,
//                 capacity: req.body.capacity,
//                 km: req.body.km,
//                 chotdau: req.body.chotdau,
//                 ncc: req.body.ncc,
//                 month: new Date().getMonth()+1,
//             };
    
//             addRow(row);
//             res.json({ success: true })
//         }  
//         catch(exception) {
//             res.json({ success: false, msg: exception.message })
//         }   
//     })()
// };
