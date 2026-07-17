USE civicai_db;

-- ==========================================
-- USERS INDEXES
-- ==========================================
CREATE INDEX idx_users_email
ON Users(email);

CREATE INDEX idx_users_phone
ON Users(phone);

CREATE INDEX idx_users_role
ON Users(role);

-- ==========================================
-- CITIZEN PROFILES
-- ==========================================
CREATE INDEX idx_citizen_user
ON Citizen_Profiles(user_id);

-- ==========================================
-- OFFICER PROFILES
-- ==========================================
CREATE INDEX idx_officer_user
ON Officer_Profiles(user_id);

CREATE INDEX idx_officer_department
ON Officer_Profiles(department_id);

-- ==========================================
-- COMPLAINTS
-- ==========================================
CREATE INDEX idx_complaint_user
ON Complaints(user_id);

CREATE INDEX idx_complaint_department
ON Complaints(department_id);

CREATE INDEX idx_complaint_status
ON Complaints(status);

CREATE INDEX idx_complaint_priority
ON Complaints(priority);

CREATE INDEX idx_complaint_category
ON Complaints(category);

CREATE INDEX idx_complaint_created
ON Complaints(created_at);

-- ==========================================
-- COMPLAINT IMAGES
-- ==========================================
CREATE INDEX idx_image_complaint
ON Complaint_Images(complaint_id);

-- ==========================================
-- AI ANALYSIS
-- ==========================================
CREATE INDEX idx_ai_complaint
ON AI_Analysis(complaint_id);

-- ==========================================
-- COMPLAINT SUPPORT
-- ==========================================
CREATE INDEX idx_support_complaint
ON Complaint_Support(complaint_id);

CREATE INDEX idx_support_user
ON Complaint_Support(user_id);

-- ==========================================
-- STATUS HISTORY
-- ==========================================
CREATE INDEX idx_history_complaint
ON Complaint_Status_History(complaint_id);



-- ==========================================
-- NOTIFICATIONS
-- ==========================================
CREATE INDEX idx_notification_user
ON Notifications(user_id);

-- ==========================================
-- CITIZEN CONFIRMATION
-- ==========================================
CREATE INDEX idx_confirmation_complaint
ON Citizen_Confirmation(complaint_id);

CREATE INDEX idx_confirmation_user
ON Citizen_Confirmation(user_id);

-- ==========================================
-- AUDIT LOGS
-- ==========================================
CREATE INDEX idx_audit_user
ON Audit_Logs(user_id);

CREATE INDEX idx_audit_created
ON Audit_Logs(created_at);

-- ==========================================
-- DEPARTMENT PERFORMANCE
-- ==========================================
CREATE INDEX idx_department_performance
ON Department_Performance(department_id);