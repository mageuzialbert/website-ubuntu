# Vercel Blob Storage Setup

This project uses **Vercel Blob Storage** to store CV files uploaded by talent. Vercel's serverless environment doesn't support writing to the local filesystem, so cloud storage is required.

## Why Cloud Storage?

Vercel uses a **read-only filesystem** in serverless functions. You cannot write files to disk on Vercel. Therefore, we use Vercel Blob Storage to persist CV files.

## Setup Instructions

### 1. Enable Vercel Blob Storage

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Create Database**
3. Select **Blob** (or **Blob Storage**)
4. Follow the setup wizard to create your blob store

### 2. Get Your Blob Store Token

After creating the blob store, you'll need to add the token to your environment variables:

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name**: `BLOB_READ_WRITE_TOKEN`
   - **Value**: Your blob store token (Vercel will provide this)
   - **Environment**: Production, Preview, Development (select all)

### 3. Local Development Setup

For local development, you can either:

**Option A: Use Vercel CLI (Recommended)**
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Link your project
vercel link

# Pull environment variables
vercel env pull
```

**Option B: Manual Setup**
1. Create a `.env.local` file in your project root
2. Add your blob token:
   ```
   BLOB_READ_WRITE_TOKEN=your-token-here
   ```

### 4. Verify Setup

After setup, CV files will be automatically uploaded to Vercel Blob Storage when talent submits the contact form.

## How It Works

1. User uploads CV file through the contact form
2. File is uploaded to Vercel Blob Storage
3. Blob URL is stored in the database (`cv_file_path` column)
4. File is also attached to the email notification

## Accessing Stored Files

Files are stored as **private** by default. To access them:

1. Use the Vercel dashboard → Storage → Blob
2. Or use the Vercel Blob API with the stored URL
3. Files can be made public if needed (update `access: 'private'` to `access: 'public'` in `lib/file-storage.ts`)

## Alternative Storage Options

If you prefer not to use Vercel Blob Storage, you can use:

### AWS S3
- Install: `npm install @aws-sdk/client-s3`
- Update `lib/file-storage.ts` to use S3 SDK
- Requires AWS credentials in environment variables

### Cloudinary
- Install: `npm install cloudinary`
- Update `lib/file-storage.ts` to use Cloudinary SDK
- Requires Cloudinary credentials

### Google Cloud Storage
- Install: `npm install @google-cloud/storage`
- Update `lib/file-storage.ts` to use GCS SDK
- Requires GCP credentials

## Troubleshooting

**Error: "BLOB_READ_WRITE_TOKEN is not defined"**
- Make sure you've added the token to your environment variables
- Restart your development server after adding the variable
- Verify the variable name is exactly `BLOB_READ_WRITE_TOKEN`

**Files not uploading**
- Check Vercel dashboard for blob store status
- Verify your token has read/write permissions
- Check server logs for detailed error messages

## Cost Considerations

Vercel Blob Storage pricing:
- Free tier: Limited storage (check current limits)
- Paid: Pay-as-you-go pricing
- Consider file size limits and retention policies

For production, monitor your blob storage usage in the Vercel dashboard.

