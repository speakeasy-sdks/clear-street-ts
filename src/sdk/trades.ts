/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Trade endpoints are used to insert or cancel trades into a our systems.
 *
 * @remarks
 *
 */
export class Trades {
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
   * Cancel Trade By ID
   *
   * @remarks
   * Cancel a trade either by the Clear Street assigned `trade_id`, or `client_trade_id` that was provided in the original trade. If the ID you provide is, in fact, a `client_trade_id`, you must set `is_client_trade_id` to true, and also provide the `account_id` for the original trade.
   *
   */
  async cancel(
    req: operations.CancelTradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelTradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelTradesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/trades/{trade_id}", req);

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers["Accept"] = "application/json";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "delete",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CancelTradesResponse =
      new operations.CancelTradesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 202:
        break;
      case [400, 409, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Insert Trades
   *
   * @remarks
   * Insert the provided trades atomically. Use this endpoint if you want atomicity and immediate confirmation; this request will either fully process all your trades, or reject them all atomically. Therefore, a successful call to this endpoint guarantees that your trades have been accepted by our systems. This endpoint can accept up to 1000 trades at a time.
   * Exchange Trade  trades done directly on an
   *         exchange. An example would be a trading account buying shares on
   *         Nasdaq.
   *
   * Bilateral Trade trades done bilaterally broker
   *         to broker. An example would be Bank of America's trading account buying
   *         shares from Goldman Sachs' trading account.
   *
   * Transfer
   *         Trade trades are done to transfer from one account to another within
   *         the same legal entity. An example would be to transfer shares from a
   *         trading account to an error account.
   *
   * Allocation Trade
   *         trades are done to allocate to a customer account. An example would be
   *         to allocate shares at an average price from an average price account to
   *         a customer account.
   *
   * The fields below vary depending upon trade-type. Change the value of the `type` drop-down below to switch between trade-types.
   *
   */
  async create(
    req: shared.Trade[],
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTradesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/trades";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");
    headers["Accept"] = "application/json;q=1, application/json;q=0";
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateTradesResponse =
      new operations.CreateTradesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 202:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.tradeSubmitteds = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.tradeSubmitteds = utils.objectToClass(
            httpRes?.data,
            shared.TradeSubmitted,
            resFieldDepth
          );
        }
        break;
      case [400, 422, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }
}
