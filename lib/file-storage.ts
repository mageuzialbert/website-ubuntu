import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

/**
 * Get Upstash R2 S3 client
 */
function getS3Client() {
  const accountId = process.env.UPSTASH_R2_ACCOUNT_ID;
  const accessKeyId = process.env.UPSTASH_R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.UPSTASH_R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('Upstash R2 credentials are missing. Please check your environment variables.');
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

/**
 * Save uploaded CV file to cloud storage (Upstash R2)
 * @param file - The file to save
 * @param contactId - Optional contact ID for organizing files
 * @returns The file URL/path for database storage
 */
export async function saveCVFile(
  file: File,
  contactId?: number
): Promise<string> {
  // Generate unique filename: timestamp-contactId-originalname.pdf
  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const filename = contactId 
    ? `cvs/${timestamp}-${contactId}-${sanitizedName}`
    : `cvs/${timestamp}-${sanitizedName}`;

  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Get bucket name from environment
  const bucketName = process.env.UPSTASH_R2_BUCKET_NAME;
  if (!bucketName) {
    throw new Error('UPSTASH_R2_BUCKET_NAME environment variable is not set');
  }

  // Upload to Upstash R2
  const s3Client = getS3Client();
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: filename,
    Body: buffer,
    ContentType: file.type || 'application/pdf',
  });

  await s3Client.send(command);

  // Construct the public URL
  // Option 1: Use custom domain if configured
  const customDomain = process.env.UPSTASH_R2_CUSTOM_DOMAIN;
  if (customDomain) {
    return `https://${customDomain}/${filename}`;
  }

  // Option 2: Use R2 public URL format
  // Note: This requires the bucket to have public access enabled
  // Format: https://<account-id>.r2.cloudflarestorage.com/<bucket-name>/<key>
  const accountId = process.env.UPSTASH_R2_ACCOUNT_ID;
  if (!accountId) {
    throw new Error('UPSTASH_R2_ACCOUNT_ID is required for public URL generation');
  }
  
  // R2 public URL format (if public access is enabled on the bucket)
  const publicUrl = `https://${accountId}.r2.cloudflarestorage.com/${bucketName}/${filename}`;

  return publicUrl;
}

/**
 * Get file URL for a CV file
 * @param url - The blob URL from database
 * @returns The same URL (for compatibility)
 */
export function getCVFilePath(url: string): string {
  return url;
}

