/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Trades } from "./trades";
import { Uploads } from "./uploads";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Production server
   */
  "//api.clearstreet.io/v1",
  /**
   * Sandbox server
   */
  "//api.sandbox.clearstreet.io/v1",
  "/",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * This is a beta version of Clear Street's public API. This API is RESTful; it has resource-oriented URLs, returns JSON-encoded responses, and uses standard HTTP codes, authentication, and verbs.
 *
 * @remarks
 *
 * # Environments
 * Clear Street operates two environments: sandbox and production. Each environment is completely isolated from the other. No data is ever shared. All activity in our sandbox environment has no actual impact; all accounts in our sandbox use canned data. We recommend testing in our sandbox environment first before moving to production.
 *
 * The following are the base URLs for each environment. Each endpoint in this API must be prefixed with one of the following base URLs:
 *
 * Sandbox base URL: `https://api.sandbox.clearstreet.io/v1`
 *
 * Production base URL: `https://api.clearstreet.io/v1`
 *
 * # Authentication
 * End-to-end security is provided through an SSL connection and an API-key that will be provided to users of our API.
 *
 * The API-key provided to you will take the form a bearer token. Every request you make, therefore, must contain your API-key in the header of the request in the following form:
 *
 *
 * Authorization: Bearer <KEY>
 *
 *
 * Where `` is the API-key provided to you.
 *
 * Here's an example of constructing a request in Python:
 *
 * ```python
 * import requests
 *
 * # change URL based on environment
 * URL = "https://api.sandbox.clearstreet.io/v1/trades"
 *
 * # set provided API-key here
 * headers = {
 *     'Content-Type': 'application/json',
 *     'Authorization': 'Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXQiOjE1ODU2MTk2NDYsImV4cCI6MTU4NTYyMzI0NiwidWlkIjoyfQ.B6wdfKRro9JxPrhjn8QchPOfGFSWexfg_2EX0V_tkdA'
 * }
 *
 * # construct your message
 * payload = [{
 *     "type": "allocation_trade",
 *     "timestamp": 1556544618,
 *     "client_trade_id": "042919-1a",
 *     "date": 20190304,
 *     "account_id": 100016,
 *     "mic": "XNAS",
 *     "exec_mpid": "CSMM",
 *     "capacity": "principal",
 *     "quantity": "100",
 *     "price": "140.00",
 *     "instrument": {
 *         "identifier": "ATRA",
 *         "identifier_type": "ticker",
 *         "currency": "USD",
 *         "country": "USA"
 *     },
 *     "side": {
 *         "direction": "buy"
 *     },
 *     "target_account_id": 100021
 * }]
 *
 * # send request
 * requests.post(url=URL, headers=headers, json=payload) ```
 *
 */
export class ClearStreet {
  /**
   * Trade endpoints are used to insert or cancel trades into a our systems.
   *
   * @remarks
   *
   */
  public trades: Trades;
  /**
   * Upload endpoints allow you to upload a `CSV` file that contain trades, in the same format as our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md). You may prefer to use a file-upload if you have a extremely large number of trades (> 10000), or if you have dependency on legacy systems that deal with `CSV` files. We recommend using trade endpoints when possible, especially for real-time trade reporting.
   *
   * @remarks
   *
   */
  public uploads: Uploads;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.8.0";
  private _genVersion = "2.30.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.trades = new Trades(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.uploads = new Uploads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
