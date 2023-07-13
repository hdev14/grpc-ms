import { ProductService } from '@grpc-ms/protos/dist/product';
import { Server, ServerCredentials } from '@grpc/grpc-js';
import Product from './services/Product';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = parseInt(process.env.PORT|| '50052');

const server = new Server();

server.addService(ProductService, Product);

server.bindAsync(`${HOST}:${PORT}`, ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.error(error);
  }

  server.start();
  console.info("Server is running on ", port);
});
