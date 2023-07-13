import * as Protos from '@grpc-ms/protos/dist/product';
import * as grpc from '@grpc/grpc-js';
import db from '../db';

const create: grpc.handleUnaryCall<Protos.CreateProductRequest, Protos.CreateProductResponse> = async (call, callback) => {
  try {
    const {
      name,
      description,
      image,
      tags,
    } = call.request;

    const [productId] = await db.insert({
      name,
      description,
      image,
      created_at: new Date(),
      updated_at: new Date(),
    }).into('products');

    if (Array.isArray(tags) && tags.length) {
      await db.insert(tags.map((tag) => ({
        name: tag,
        product_id: productId,
      }))).into('tags');
    }

    return callback(null, { productId });
  } catch (error: any) {
    console.error(error);
    callback({ code: grpc.status.INTERNAL, message: 'Server Error' });
  }
}

const get: grpc.handleUnaryCall<Protos.GetProductRequest, Protos.GetProductResponse> = async (call, callback) => {
  try {
    const { id } = call.request;

    const result = await db.select(
      'products.id',
      'products.name',
      'products.image',
      'products.description',
      'products.created_at',
      'products.updated_at',
      db.raw(`json_group_array(tags.name) as tags`)
    )
      .from('products')
      .join('tags', 'products.id', '=', 'tags.product_id')
      .where({ 'products.id': id })
      .first();

    return callback(null, {
      product: {
        ...result,
        tags: JSON.parse(result.tags),
        createdAt: new Date(result.created_at).toISOString(),
        updatedAt: new Date(result.updated_at).toISOString(),
      }
    });
  } catch (error: any) {
    console.error(error);
    return callback({ code: grpc.status.INTERNAL, message: 'Server Error' });
  }
}

const list: grpc.handleUnaryCall<Protos.ListProductsRequest, Protos.ListProductsResponse> = async (call, callback) => {
  try {
    const results = await db.select(
      'products.id',
      'products.name',
      'products.image',
      'products.description',
      'products.created_at',
      'products.updated_at',
      db.raw(`json_group_array(tags.name) as tags`)
    )
      .from('products')
      .join('tags', 'products.id', '=', 'tags.product_id')
      .groupBy('products.id');

    return callback(null, {
      products: results.map(product => ({
        ...product,
        tags: JSON.parse(product.tags),
        createdAt: new Date(product.created_at).toISOString(),
        updatedAt: new Date(product.updated_at).toISOString(),
      }))
    });
  } catch (error: any) {
    console.error(error);
    return callback({ code: grpc.status.INTERNAL, message: 'Server Error' });
  }
}

export default {
  create,
  get,
  list,
};
