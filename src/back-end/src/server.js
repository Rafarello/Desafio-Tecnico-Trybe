const TasksRouter = require('./api/routers/TasksRouter');
const App = require('./app');

const Server = new App();

Server.addRouter(TasksRouter);

module.exports = Server;
