/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Upload endpoints allow you to upload a `CSV` file that contain trades, in the same format as our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md). You may prefer to use a file-upload if you have a extremely large number of trades (> 10000), or if you have dependency on legacy systems that deal with `CSV` files. We recommend using trade endpoints when possible, especially for real-time trade reporting.
 *
 * @remarks
 *
 */
export class Uploads {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Create_Uploads
   *
   * @remarks
   * Upload the provided CSV file for processing cancels asynchronously.
   *
   * Example column headers with associated example values:
   *
   *   account	100001
   *   trade_id	12343
   *   by_client_id	false
   *
   */
  cancel(
    req: operations.CancelUploadsRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelUploadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelUploadsRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploads/cancel";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "multipart"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.CancelUploadsResponse =
        new operations.CancelUploadsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 202:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.upload = utils.objectToClass(httpRes?.data, shared.Upload);
          }
          break;
        case [400, 409, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Create Insert Upload
   *
   * @remarks
   * Upload the provided CSV file for processing asynchronously. Your file will be uploaded to our servers, and then subsequently processed.
   *
   * The columns for a CSV file should match the JSON path dot-notation of the fields available in the insert trades endpoint. For example, the column `side.direction` would be the column header to set the direction of a trade, and the column `instrument.ticker` would set the trade's instrument ticker, etc.
   *
   * Our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md) has more details. You can also download an example file.
   *
   */
  create(
    req: operations.UploadsInsertCreateRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadsInsertCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadsInsertCreateRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/uploads/insert";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "multipart"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.UploadsInsertCreateResponse =
        new operations.UploadsInsertCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 202:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.upload = utils.objectToClass(httpRes?.data, shared.Upload);
          }
          break;
        case [400, 409, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Upload By ID
   *
   * @remarks
   * Get an existing upload. Use this endpoint when you want to the know the status of a previously created upload.
   *
   */
  getById(
    req: operations.GetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/uploads/{upload_id}", req);

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetByIdResponse = new operations.GetByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.uploadStatus = utils.objectToClass(
              httpRes?.data,
              shared.UploadStatus
            );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }
}
