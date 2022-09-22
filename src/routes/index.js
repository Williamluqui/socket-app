const io = require('../http')

io.get('/', (req, res) => res.render("index"));