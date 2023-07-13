/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "product";

export interface ProductData {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export interface CreateProductResponse {
  productId: number;
}

export interface GetProductRequest {
  id: number;
}

export interface GetProductResponse {
  product: ProductData | undefined;
}

export interface ListProductsRequest {
}

export interface ListProductsResponse {
  products: ProductData[];
}

function createBaseProductData(): ProductData {
  return { id: 0, name: "", description: "", image: "", tags: [], createdAt: "", updatedAt: "" };
}

export const ProductData = {
  encode(message: ProductData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.image = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductData {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
    };
  },

  toJSON(message: ProductData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProductData>, I>>(base?: I): ProductData {
    return ProductData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProductData>, I>>(object: I): ProductData {
    const message = createBaseProductData();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

function createBaseCreateProductRequest(): CreateProductRequest {
  return { name: "", description: "", image: "", tags: [] };
}

export const CreateProductRequest = {
  encode(message: CreateProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRequest>, I>>(base?: I): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProductRequest>, I>>(object: I): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.image = object.image ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateProductResponse(): CreateProductResponse {
  return { productId: 0 };
}

export const CreateProductResponse = {
  encode(message: CreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== 0) {
      writer.uint32(8).int32(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.productId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductResponse {
    return { productId: isSet(object.productId) ? Number(object.productId) : 0 };
  },

  toJSON(message: CreateProductResponse): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductResponse>, I>>(base?: I): CreateProductResponse {
    return CreateProductResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateProductResponse>, I>>(object: I): CreateProductResponse {
    const message = createBaseCreateProductResponse();
    message.productId = object.productId ?? 0;
    return message;
  },
};

function createBaseGetProductRequest(): GetProductRequest {
  return { id: 0 };
}

export const GetProductRequest = {
  encode(message: GetProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: GetProductRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductRequest>, I>>(base?: I): GetProductRequest {
    return GetProductRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProductRequest>, I>>(object: I): GetProductRequest {
    const message = createBaseGetProductRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetProductResponse(): GetProductResponse {
  return { product: undefined };
}

export const GetProductResponse = {
  encode(message: GetProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      ProductData.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product = ProductData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetProductResponse {
    return { product: isSet(object.product) ? ProductData.fromJSON(object.product) : undefined };
  },

  toJSON(message: GetProductResponse): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? ProductData.toJSON(message.product) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductResponse>, I>>(base?: I): GetProductResponse {
    return GetProductResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetProductResponse>, I>>(object: I): GetProductResponse {
    const message = createBaseGetProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? ProductData.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseListProductsRequest(): ListProductsRequest {
  return {};
}

export const ListProductsRequest = {
  encode(_: ListProductsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListProductsRequest {
    return {};
  },

  toJSON(_: ListProductsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProductsRequest>, I>>(base?: I): ListProductsRequest {
    return ListProductsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsRequest>, I>>(_: I): ListProductsRequest {
    const message = createBaseListProductsRequest();
    return message;
  },
};

function createBaseListProductsResponse(): ListProductsResponse {
  return { products: [] };
}

export const ListProductsResponse = {
  encode(message: ListProductsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      ProductData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(ProductData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProductsResponse {
    return {
      products: Array.isArray(object?.products) ? object.products.map((e: any) => ProductData.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListProductsResponse): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? ProductData.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProductsResponse>, I>>(base?: I): ListProductsResponse {
    return ListProductsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListProductsResponse>, I>>(object: I): ListProductsResponse {
    const message = createBaseListProductsResponse();
    message.products = object.products?.map((e) => ProductData.fromPartial(e)) || [];
    return message;
  },
};

export type ProductService = typeof ProductService;
export const ProductService = {
  create: {
    path: "/product.Product/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProductRequest) => Buffer.from(CreateProductRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProductRequest.decode(value),
    responseSerialize: (value: CreateProductResponse) => Buffer.from(CreateProductResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateProductResponse.decode(value),
  },
  get: {
    path: "/product.Product/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetProductRequest) => Buffer.from(GetProductRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetProductRequest.decode(value),
    responseSerialize: (value: GetProductResponse) => Buffer.from(GetProductResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetProductResponse.decode(value),
  },
  list: {
    path: "/product.Product/List",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListProductsRequest) => Buffer.from(ListProductsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListProductsRequest.decode(value),
    responseSerialize: (value: ListProductsResponse) => Buffer.from(ListProductsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListProductsResponse.decode(value),
  },
} as const;

export interface ProductServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateProductRequest, CreateProductResponse>;
  get: handleUnaryCall<GetProductRequest, GetProductResponse>;
  list: handleUnaryCall<ListProductsRequest, ListProductsResponse>;
}

export interface ProductClient extends Client {
  create(
    request: CreateProductRequest,
    callback: (error: ServiceError | null, response: CreateProductResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateProductResponse) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateProductResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetProductRequest,
    callback: (error: ServiceError | null, response: GetProductResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetProductRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetProductResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetProductRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetProductResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProductsRequest,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProductsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
  list(
    request: ListProductsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListProductsResponse) => void,
  ): ClientUnaryCall;
}

export const ProductClient = makeGenericClientConstructor(ProductService, "product.Product") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProductClient;
  service: typeof ProductService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
