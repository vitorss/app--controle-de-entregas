const express = require('express')
const router = express.Router()
const mainController = require('./controllers/mainController')

// rotas
router.get('/', mainController.home);

router.get('/cadastrar-pedidos', mainController.cadastrar_pedidos)

router.get('/itens-pedidos', mainController.itens_pedidos)

router.get('/area-pedidos', mainController.area_pedidos)

router.get('/login', mainController.login)

router.get('/cadastro', mainController.cadastro)

router.get('/reset', mainController.reset)

module.exports = router