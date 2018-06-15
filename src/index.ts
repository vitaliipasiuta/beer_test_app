import * as http from 'http';
import { App } from './App';
import { Server } from './Server';

App.INIT();

const app = new Server().express;
const server = http.createServer(app);

server.listen(App.config.get('server:port'));

server.on('listening', () => {
  const address = this.server.address();
  const bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
  App.logger.info(`Listening on ${bind}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  App.logger.error(error);
  process.exit(1);
});

export {
  server,
};
