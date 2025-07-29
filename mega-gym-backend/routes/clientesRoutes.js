const express = require('express');
const router = express.Router();
const { registrarCliente, getClientes } = require('../controllers/clientesController');
const { proteger } = require('../middlewares/authMiddleware');

const { esAdmin } = require('../middlewares/adminMiddleware');


// Obtener todos los clientes (solo admin)
router.get('/', proteger, esAdmin, getClientes);

router.post('/', proteger, esAdmin, registrarCliente);

module.exports = router;
