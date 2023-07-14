import { CreateProductRequest, CreateProductResponse, GetProductRequest, GetProductResponse, ListProductsRequest, ListProductsResponse, ProductClient } from '@grpc-ms/protos/dist/product';
import { credentials } from '@grpc/grpc-js';
import { promisify } from 'util';

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || '0.0.0.0:50052';

async function main() {
  const product = new ProductClient(PRODUCT_SERVICE_URL, credentials.createInsecure());

  const createProductReq = CreateProductRequest.create({
    name: 'test product 123123',
    description: 'test product description',
    image: 'http://test.com/test.png',
    tags: ['test1', 'test2']
  });

  const createPromise = promisify<CreateProductRequest, CreateProductResponse>(product.create).bind(product);

  const createResponse = await createPromise(createProductReq);

  console.log(createResponse);

  const getPromise = promisify<GetProductRequest, GetProductResponse>(product.get).bind(product);

  const getResponse = await getPromise(GetProductRequest.create({ id: createResponse.productId }));

  console.log(getResponse);

  const listPromise = promisify<ListProductsRequest, ListProductsResponse>(product.list).bind(product);

  const response = await listPromise({});

  console.log(response);
}

main();