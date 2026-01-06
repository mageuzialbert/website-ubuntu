# Upstash R2 Storage Setup

This project uses **Upstash R2** (S3-compatible object storage) to store CV files uploaded by talent. Upstash R2 is a serverless object storage solution that works perfectly with Vercel's serverless environment.

## Why Upstash R2?

- **Serverless-friendly**: Works seamlessly with Vercel's serverless functions
- **S3-compatible**: Uses standard AWS S3 SDK, making it familiar and reliable
- **Cost-effective**: Pay-as-you-go pricing with generous free tier
- **Fast**: Global CDN for fast file access
- **Reliable**: Built on Cloudflare's infrastructure

## Setup Instructions

### 1. Create Upstash R2 Bucket

1. Go to [Upstash Console](https://console.upstash.com/)
2. Sign in or create an account
3. Navigate to **R2** section
4. Click **Create Database** or **Create Bucket**
5. Choose a bucket name (e.g., `ubuntu-afyalink-cvs`)
6. Select your preferred region
7. Complete the setup

### 2. Get Your R2 Credentials

After creating the bucket, you'll need:

1. **Account ID**: Found in your Upstash R2 dashboard
2. **Access Key ID**: Create an API key in the R2 dashboard
3. **Secret Access Key**: Generated when you create the API key
4. **Bucket Name**: The name you chose when creating the bucket

### 3. Configure Public Access (Optional)

If you want public file access:

1. In Upstash R2 dashboard, enable public access for your bucket
2. Or configure a custom domain for your bucket (recommended)

### 4. Add Environment Variables to Vercel

In your Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

   ```
   UPSTASH_R2_ACCOUNT_ID=your-account-id
   UPSTASH_R2_ACCESS_KEY_ID=your-access-key-id
   UPSTASH_R2_SECRET_ACCESS_KEY=your-secret-access-key
   UPSTASH_R2_BUCKET_NAME=your-bucket-name
   UPSTASH_R2_CUSTOM_DOMAIN=your-custom-domain.com (optional, if configured)
   ```

3. Apply to: **Production**, **Preview**, and **Development**

### 4. Local Development Setup

For local development, add these to your `.env.local` file:

```env
UPSTASH_R2_ACCOUNT_ID=your-account-id
UPSTASH_R2_ACCESS_KEY_ID=your-access-key-id
UPSTASH_R2_SECRET_ACCESS_KEY=your-secret-access-key
UPSTASH_R2_BUCKET_NAME=your-bucket-name
```

## How It Works

1. User uploads CV file through the contact form
2. File is uploaded to Upstash R2 bucket
3. Public URL is generated and stored in the database (`cv_file_path` column)
4. File is also attached to the email notification

## File URLs

Files are stored with public URLs. The URL format depends on your configuration:

**With Custom Domain:**
```
https://your-custom-domain.com/cvs/<filename>
```

**Without Custom Domain (R2 Public URL):**
```
https://<account-id>.r2.cloudflarestorage.com/<bucket-name>/cvs/<filename>
```

These URLs are stored in the database and can be used to access the files directly.

**Note:** Public URLs require public access to be enabled on your R2 bucket, or you need to configure a custom domain.

## Making Files Private (Optional)

If you want to make files private instead of public:

1. Update the bucket settings in Upstash console to disable public access
2. Use signed URLs for file access (requires additional implementation)
3. Update `lib/file-storage.ts` to generate signed URLs using `GetObjectCommand` with presigned URLs

## Troubleshooting

**Error: "Upstash R2 credentials are missing"**
- Verify all four environment variables are set
- Check that variable names match exactly (case-sensitive)
- Restart your development server after adding variables

**Files not uploading**
- Check Upstash R2 dashboard for bucket status
- Verify your API keys have write permissions
- Check server logs for detailed error messages
- Ensure bucket name matches exactly

**403 Forbidden errors**
- Verify your Access Key ID and Secret Access Key are correct
- Check that the API key has proper permissions
- Ensure the bucket exists and is accessible

## Cost Considerations

Upstash R2 pricing:
- **Free tier**: 10 GB storage, 1M Class A operations, 10M Class B operations per month
- **Paid**: Pay-as-you-go pricing after free tier
- **No egress fees**: Unlike some providers, Upstash R2 doesn't charge for data transfer

Monitor your usage in the Upstash console dashboard.

## Alternative: Private Files with Signed URLs

If you need private file access, you can implement signed URLs:

```typescript
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Generate a signed URL that expires in 1 hour
const command = new GetObjectCommand({
  Bucket: bucketName,
  Key: filename,
});
const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
```

This requires installing `@aws-sdk/s3-request-presigner` package.

