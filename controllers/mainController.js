exports.home = function(req, res) {
    res.render('pages/home')
}

exports.cadastrar_pedidos = function(req, res) {
    res.render('pages/cadastrar-pedidos')
}

exports.area_pedidos = function(req, res) {
    res.render('pages/area-pedidos')
}

exports.login = function(req, res) {
    res.render('pages/signin', { layout: 'pages/signin' })
}

exports.cadastro = function(req, res) {
    res.render('pages/signup', { layout: 'pages/signup' })
}

exports.reset = function(req, res) {
    res.render('pages/forgot-pass', { layout: 'pages/forgot-pass' })
}