# Database Migrations

This directory contains SQL migration scripts for the Ubuntu AfyaLink database.

## Running Migrations

### Option 1: Using MySQL/TiDB CLI

```bash
# Connect to your database
mysql -h <your-host> -u <your-user> -p <your-database>

# Or for TiDB
mysql -h <your-tidb-host> -P 4000 -u <your-user> -p <your-database>

# Then run the migration
source database/migrations/001_create_contacts_table.sql;
```

### Option 2: Using MySQL Workbench or other GUI tools

1. Open your database management tool
2. Connect to your TiDB/MySQL database
3. Open and execute the SQL file: `database/migrations/001_create_contacts_table.sql`

### Option 3: Using command line directly

```bash
mysql -h <your-host> -u <your-user> -p <your-database> < database/migrations/001_create_contacts_table.sql
```

## Migration Files

### 001_create_contacts_table.sql

Creates the `contacts` table to store all contact form submissions from:
- Healthcare Facilities
- Investors/Partners  
- Talent

**Table Structure:**
- Stores all form fields for each user type
- Tracks email sending status
- Includes timestamps for created_at and updated_at
- Has indexes for efficient querying
- Stores CV file information (filename, size, and file path)

### 002_add_cv_file_path_column.sql

Adds the `cv_file_path` column to existing contacts table. 
**Run this only if you already created the table without cv_file_path column.**

## Verifying the Migration

After running the migration, verify the table was created:

```sql
DESCRIBE contacts;
-- or
SHOW CREATE TABLE contacts;
```

## CV File Storage

CV files uploaded by talent are stored in **Upstash R2** (S3-compatible object storage):
- **Storage**: Upstash R2 (cloud-based, compatible with serverless)
- **Naming**: Files are saved with format `cvs/{timestamp}-{contactId}-{originalname}.pdf`
- **Database**: The file URL is stored in the `cv_file_path` column
- **Access**: Files are stored with public URLs by default
- **Note**: Vercel's serverless environment doesn't support local file storage, so cloud storage is required

## Notes

- The table uses `IF NOT EXISTS` so it's safe to run multiple times
- Foreign key constraints for regions and districts are commented out by default
- Uncomment them if you want referential integrity enforced
- The `solutions_interested` field uses JSON type to store arrays
- CV files are stored on the server filesystem and referenced in the database

