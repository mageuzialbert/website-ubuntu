-- Add cv_file_path column to existing contacts table
-- Run this if you already created the contacts table without cv_file_path

ALTER TABLE contacts 
ADD COLUMN IF NOT EXISTS cv_file_path VARCHAR(500) DEFAULT NULL 
AFTER cv_file_size;

