USE civicai_db;

-- ==========================================
-- USERS TABLE
-- ==========================================
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    role ENUM('Citizen','Officer','Admin') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- ==========================================
-- DEPARTMENTS TABLE
-- ==========================================
CREATE TABLE Departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- CITIZEN PROFILES
-- ==========================================
CREATE TABLE Citizen_Profiles (
    citizen_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- OFFICER PROFILES
-- ==========================================
CREATE TABLE Officer_Profiles (
    officer_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    department_id INT,
    designation VARCHAR(100),
    office_phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- COMPLAINTS
-- ==========================================
CREATE TABLE Complaints (
    complaint_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    department_id INT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    priority ENUM('Low','Medium','High','Critical') DEFAULT 'Medium',
    status ENUM('Pending','Assigned','In Progress','Resolved','Rejected')
        DEFAULT 'Pending',
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- ==========================================
-- COMPLAINT IMAGES
-- ==========================================
CREATE TABLE Complaint_Images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- AI ANALYSIS
-- ==========================================
CREATE TABLE AI_Analysis (
    analysis_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT NOT NULL,
    detected_category VARCHAR(100),
    predicted_department VARCHAR(100),
    severity VARCHAR(50),
    ai_description TEXT,
    confidence_score DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- COMPLAINT SUPPORT
-- ==========================================
CREATE TABLE Complaint_Support (
    support_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT NOT NULL,
    user_id INT NOT NULL,
    supported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- COMPLAINT STATUS HISTORY
-- ==========================================
CREATE TABLE Complaint_Status_History (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT NOT NULL,
    officer_id INT,
    status VARCHAR(50),
    remarks TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- NOTIFICATIONS
-- ==========================================
CREATE TABLE Notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- LANGUAGES
-- ==========================================
CREATE TABLE Languages (
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    language_name VARCHAR(50) NOT NULL,
    language_code VARCHAR(10) NOT NULL
);

-- ==========================================
-- CITIZEN CONFIRMATION
-- ==========================================
CREATE TABLE Citizen_Confirmation (
    confirmation_id INT AUTO_INCREMENT PRIMARY KEY,
    complaint_id INT NOT NULL,
    user_id INT NOT NULL,
    feedback TEXT,
    rating INT,
    confirmed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- AUDIT LOGS
-- ==========================================
CREATE TABLE Audit_Logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(255),
    table_name VARCHAR(100),
    record_id INT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ANALYTICS
-- ==========================================
CREATE TABLE Analytics (
    analytics_id INT AUTO_INCREMENT PRIMARY KEY,
    total_users INT DEFAULT 0,
    total_complaints INT DEFAULT 0,
    resolved_complaints INT DEFAULT 0,
    pending_complaints INT DEFAULT 0,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- DEPARTMENT PERFORMANCE
-- ==========================================
CREATE TABLE Department_Performance (
    performance_id INT AUTO_INCREMENT PRIMARY KEY,
    department_id INT NOT NULL,
    total_complaints INT DEFAULT 0,
    resolved_complaints INT DEFAULT 0,
    average_resolution_time DECIMAL(8,2),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);