/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Settlement details. Required typically for special settlement situations.
 */
export class Settlement extends SpeakeasyBase {
  /**
   * Settlement currency for the trade if different than the issue currency of the security. This should be a 3-letter ISO 4217 code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  /**
   * Only provide for irregular-way, i.e. you've negotiated a special settlement arrangement for this trade; represents settlement date in YYYYMMDD format
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: number;
}