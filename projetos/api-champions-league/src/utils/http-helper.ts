import { HttpResponse } from "../models/http-response-model";

export const OK = async (data: any): Promise<HttpResponse<any>> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const CREATED = async (data: any): Promise<HttpResponse<any>> => {
  return {
    statusCode: 201,
    body: data,
  };
};

export const NO_CONTENT = async (): Promise<HttpResponse<any>> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const BAD_REQUEST = async (message: string): Promise<HttpResponse<any>> => {
  return {
    statusCode: 400,
    body: { message },
  };
};

export const NOT_FOUND = async (message: string): Promise<HttpResponse<any>> => {
  return {
    statusCode: 404,
    body: { message },
  };
};

export const INTERNAL_SERVER_ERROR = async (message: string): Promise<HttpResponse<any>> => {
  return {
    statusCode: 500,
    body: { message },
  };
};