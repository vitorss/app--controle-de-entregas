const User = require('../models/User')

exports.home = function(req, res) {
    res.render('pages/home')
}

exports.cadastrar_pedidos = function(req, res) {
    res.render('pages/cadastrar-pedidos')
}

exports.itens_pedidos = function(req, res) {
    res.render('pages/itens-pedidos')
}

exports.area_pedidos = function(req, res) {
    res.render('pages/area-pedidos')
}

exports.signin = function(req, res) {
    res.render('pages/signin', { layout: 'pages/signin' })
}

exports.signup = function(req, res) {
    res.render('pages/signup', { layout: 'pages/signup' })
}

exports.save = function(req, res) {
    // console.log(req.body);
    let user = new User(req.body)
    user.create()
    res.render('pages/home')
}

exports.reset = function(req, res) {
    res.render('pages/forgot-pass', { layout: 'pages/forgot-pass' })
}