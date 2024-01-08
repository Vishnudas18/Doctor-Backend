const jsonServer = require('json-server');

const restServer = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults(); // Fix the variable name here
const port = 3001;

restServer.use(middleware); // Fix the variable name here
restServer.use(router);

restServer.listen(port, () => {
    console.log("rest server listening on port " + port);
});
