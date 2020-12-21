const express = require('express')
const router = express.Router()

// rotas
router.get('/', (req, res) => {
    res.render('pages/home')
});

router.get('/cadastrar-pedidos', (req, res) => {
    res.render('pages/cadastrar-pedidos')
})

router.get('/area-pedidos', (req, res) => {
    res.render('pages/area-pedidos')
})

router.get('/login', (req, res) => {
    res.render('pages/signin', { layout: 'pages/signin' })
})

router.get('/cadastro', (req, res) => {
    res.render('pages/signup', { layout: 'pages/signup' })
})

router.get('/reset', (req, res) => {
    res.render('pages/forgot-pass', { layout: 'pages/forgot-pass' })
})

module.exports = router