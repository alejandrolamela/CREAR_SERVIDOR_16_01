const express = require("express");
const db = require('./src/utils/db.js');
console.log('DB dentro de index', db);
db.connectDB();
// All routes imports 
const indexRoutes = require('./src/api/index/index.routes');
const teachersRoutes = require('./src/api/teachers/teacher.routes')

const server = express();
// Configuracion de todaslas rutasde nuestro serviddor
server.use('/', indexRoutes);
server.use('/teachers',teachersRoutes);
const PORT = 3000;
server.listen(PORT, (req, res)=>{
    console.log(`running server  in http://localhost:${PORT}/`)
});

// Ahora probamos si arranca el servidor con  npm run dev, en nuestra termnal