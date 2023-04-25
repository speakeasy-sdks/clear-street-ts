/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents an upload's details
 */
export class UploadStatus extends SpeakeasyBase {
  /**
   * True if this upload has finished processing
   */
  @SpeakeasyMetadata()
  @Expose({ name: "completed" })
  completed: boolean;

  /**
   * Timestamp when the upload was created; milliseconds since unix epoch
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt: number;

  /**
   * Name of the upload; this will be the filename if the upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * The orgID of the user who created this upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "org_id" })
  orgId: number;

  /**
   * AWS S3 key
   */
  @SpeakeasyMetadata()
  @Expose({ name: "s3_key" })
  s3Key: string;

  /**
   * The status of this upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;

  /**
   * The number of trades processed from this upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trades_processed" })
  tradesProcessed: number;

  /**
   * The number of trades skipped from this upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trades_skipped" })
  tradesSkipped: number;

  /**
   * Timestamp when the upload was last updated; milliseconds since unix epoch
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  updatedAt?: number;

  /**
   * SHA256 hash of the trades you uploaded. This uniquely identifies your upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "upload_id" })
  uploadId: string;

  /**
   * The userID of the user who created this upload
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: number;
}
