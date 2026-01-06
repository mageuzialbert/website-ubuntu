import { put } from '@vercel/blob';

/**
 * Save uploaded CV file to cloud storage (Vercel Blob Storage)
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

  // Upload to Vercel Blob Storage
  const blob = await put(filename, buffer, {
    access: 'private', // Files are private by default
    contentType: file.type || 'application/pdf',
    addRandomSuffix: false, // We're already using timestamps for uniqueness
  });

  // Return the URL for database storage
  return blob.url;
}

/**
 * Get file URL for a CV file
 * @param url - The blob URL from database
 * @returns The same URL (for compatibility)
 */
export function getCVFilePath(url: string): string {
  return url;
}

