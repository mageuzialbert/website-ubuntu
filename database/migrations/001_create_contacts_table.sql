-- Create contacts table to store all contact form submissions
-- This table stores submissions from healthcare facilities, investors/partners, and talent

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Basic Information
    user_type ENUM('healthcare', 'investor', 'talent') NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    organization VARCHAR(255) DEFAULT NULL,
    message TEXT DEFAULT NULL,
    
    -- Healthcare Facility Specific Fields
    facility_type VARCHAR(100) DEFAULT NULL,
    location VARCHAR(255) DEFAULT NULL,
    solutions_interested JSON DEFAULT NULL,
    
    -- Investor/Partner Specific Fields
    collaboration_type VARCHAR(100) DEFAULT NULL,
    
    -- Talent Specific Fields
    area_of_expertise VARCHAR(100) DEFAULT NULL,
    years_of_experience INT DEFAULT NULL,
    region_id INT DEFAULT NULL,
    region_name VARCHAR(255) DEFAULT NULL,
    district_id INT DEFAULT NULL,
    district_name VARCHAR(255) DEFAULT NULL,
    cv_filename VARCHAR(255) DEFAULT NULL,
    cv_file_size INT DEFAULT NULL, -- Size in bytes
    cv_file_path VARCHAR(500) DEFAULT NULL, -- URL to stored file in cloud storage (Vercel Blob Storage)
    
    -- Metadata
    email_sent TINYINT(1) DEFAULT 0,
    email_sent_at DATETIME DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better query performance
    INDEX idx_user_type (user_type),
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_region_id (region_id),
    INDEX idx_district_id (district_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Foreign key constraints (optional, uncomment if you want referential integrity)
-- ALTER TABLE contacts ADD FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE SET NULL;
-- ALTER TABLE contacts ADD FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL;

