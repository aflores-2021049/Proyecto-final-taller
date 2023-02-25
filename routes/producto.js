//Importaciones
const { Router } = require('express');
const { getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/producto');


const router = Router();

router.get('/mostrarP', getProducto);

router.post('/agregarP', postProducto);

router.put('/editarP/:id', putProducto);

router.delete('/eliminarP/:id', deleteProducto);

module.exports = router;