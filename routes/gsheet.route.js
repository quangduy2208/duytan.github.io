var express = require('express');

var controller = require('../controllers/gsheet.controller');

var router = express.Router();

router.get('/', controller.index);
/*
router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create',
  // upload.single('avatar'),
//   validate.postCreate,
  controller.postCreate
);
*/
module.exports = router;
