const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const starController = require('../controllers/stars');

router.get('/', starController.stars_get_all);

router.post('/', checkAuth, starController.stars_add_new);

router.get('/:starId', starController.stars_get_by_id);

router.put('/:starId', checkAuth, starController.stars_put_by_id);

router.delete('/:starId', checkAuth, starController.star_delete_by_id);

module.exports = router;
