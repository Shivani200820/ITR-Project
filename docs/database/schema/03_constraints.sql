USE civicai_db;

-- ==========================================
-- FOREIGN KEY CONSTRAINTS
-- ==========================================

-- Citizen Profile → Users
ALTER TABLE Citizen_Profiles
ADD CONSTRAINT fk_citizen_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Officer Profile → Users
ALTER TABLE Officer_Profiles
ADD CONSTRAINT fk_officer_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Officer Profile → Departments
ALTER TABLE Officer_Profiles
ADD CONSTRAINT fk_officer_department
FOREIGN KEY (department_id)
REFERENCES Departments(department_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

-- Complaints → Users
ALTER TABLE Complaints
ADD CONSTRAINT fk_complaint_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Complaints → Departments
ALTER TABLE Complaints
ADD CONSTRAINT fk_complaint_department
FOREIGN KEY (department_id)
REFERENCES Departments(department_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

-- Complaint Images → Complaints
ALTER TABLE Complaint_Images
ADD CONSTRAINT fk_image_complaint
FOREIGN KEY (complaint_id)
REFERENCES Complaints(complaint_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- AI Analysis → Complaints
ALTER TABLE AI_Analysis
ADD CONSTRAINT fk_ai_complaint
FOREIGN KEY (complaint_id)
REFERENCES Complaints(complaint_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Complaint Support → Complaints
ALTER TABLE Complaint_Support
ADD CONSTRAINT fk_support_complaint
FOREIGN KEY (complaint_id)
REFERENCES Complaints(complaint_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Complaint Support → Users
ALTER TABLE Complaint_Support
ADD CONSTRAINT fk_support_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Complaint Status History → Complaints
ALTER TABLE Complaint_Status_History
ADD CONSTRAINT fk_status_complaint
FOREIGN KEY (complaint_id)
REFERENCES Complaints(complaint_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Complaint Status History → Officer Profiles
ALTER TABLE Complaint_Status_History
ADD CONSTRAINT fk_status_officer
FOREIGN KEY (officer_id)
REFERENCES Officer_Profiles(officer_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

-- Notifications → Users
ALTER TABLE Notifications
ADD CONSTRAINT fk_notification_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Citizen Confirmation → Complaints
ALTER TABLE Citizen_Confirmation
ADD CONSTRAINT fk_confirmation_complaint
FOREIGN KEY (complaint_id)
REFERENCES Complaints(complaint_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Citizen Confirmation → Users
ALTER TABLE Citizen_Confirmation
ADD CONSTRAINT fk_confirmation_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Audit Logs → Users
ALTER TABLE Audit_Logs
ADD CONSTRAINT fk_audit_user
FOREIGN KEY (user_id)
REFERENCES Users(user_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

-- Department Performance → Departments
ALTER TABLE Department_Performance
ADD CONSTRAINT fk_performance_department
FOREIGN KEY (department_id)
REFERENCES Departments(department_id)
ON DELETE CASCADE
ON UPDATE CASCADE;