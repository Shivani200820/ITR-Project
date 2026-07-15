# Table Definitions

This document defines the structure of all database tables used in the CivicAI project.

---

# 1. Users

## Purpose
Stores login information for all users (Citizens, Officers, Admins).

| Column | Data Type | Description |
|---------|-----------|-------------|
| user_id | INT | Primary Key |
| name | VARCHAR(100) | Full name |
| email | VARCHAR(255) | User email |
| password | VARCHAR(255) | Encrypted password |
| phone | VARCHAR(15) | Mobile number |
| role | ENUM('Citizen','Officer','Admin') | User role |
| created_at | DATETIME | Account creation time |

**Primary Key:** user_id

**Foreign Keys:** None

**Constraints:**
- Email must be unique.
- Password cannot be NULL.

**Indexes:**
- email
- role

---

# 2. Citizen_Profiles

## Purpose
Stores additional information about citizens.

| Column | Data Type | Description |
|---------|-----------|-------------|
| citizen_id | INT | Primary Key |
| user_id | INT | Foreign Key |
| address | TEXT | Citizen address |
| city | VARCHAR(100) | City |
| state | VARCHAR(100) | State |
| pincode | VARCHAR(10) | Postal code |

**Primary Key:** citizen_id

**Foreign Key:** user_id → Users.user_id

**Indexes:**
- user_id

---

# 3. Officer_Profiles

## Purpose
Stores officer details.

| Column | Data Type | Description |
|---------|-----------|-------------|
| officer_id | INT | Primary Key |
| user_id | INT | Foreign Key |
| department_id | INT | Foreign Key |
| designation | VARCHAR(100) | Officer designation |

**Primary Key:** officer_id

**Foreign Keys:**
- user_id → Users.user_id
- department_id → Departments.department_id

**Indexes:**
- department_id

---

# 4. Departments

## Purpose
Stores government departments.

| Column | Data Type | Description |
|---------|-----------|-------------|
| department_id | INT | Primary Key |
| department_name | VARCHAR(100) | Department name |
| description | TEXT | Department description |

**Primary Key:** department_id

**Indexes:**
- department_name

---

# 5. Complaints

## Purpose
Stores complaint information submitted by citizens.

| Column | Data Type | Description |
|---------|-----------|-------------|
| complaint_id | INT | Primary Key |
| citizen_id | INT | Foreign Key |
| department_id | INT | Foreign Key |
| title | VARCHAR(200) | Complaint title |
| description | TEXT | Complaint details |
| location | TEXT | Complaint location |
| status | ENUM('Pending','In Progress','Resolved','Rejected') | Complaint status |
| priority | ENUM('Low','Medium','High') | Complaint priority |
| created_at | DATETIME | Complaint creation time |

**Primary Key:** complaint_id

**Foreign Keys:**
- citizen_id → Citizen_Profiles.citizen_id
- department_id → Departments.department_id

**Indexes:**
- citizen_id
- department_id
- status
- created_at

---

# 6. Complaint_Images

## Purpose
Stores complaint image information.

| Column | Data Type | Description |
|---------|-----------|-------------|
| image_id | INT | Primary Key |
| complaint_id | INT | Foreign Key |
| image_url | VARCHAR(255) | Image path |
| uploaded_at | DATETIME | Upload time |

**Primary Key:** image_id

**Foreign Key:**
- complaint_id → Complaints.complaint_id

**Indexes:**
- complaint_id

---

# 7. Complaint_Support

## Purpose
Stores citizens supporting complaints.

| Column | Data Type | Description |
|---------|-----------|-------------|
| support_id | INT | Primary Key |
| complaint_id | INT | Foreign Key |
| citizen_id | INT | Foreign Key |
| supported_at | DATETIME | Support time |

**Primary Key:** support_id

**Foreign Keys:**
- complaint_id → Complaints.complaint_id
- citizen_id → Citizen_Profiles.citizen_id

---

# 8. Complaint_Status_History

## Purpose
Stores complaint status history.

| Column | Data Type | Description |
|---------|-----------|-------------|
| history_id | INT | Primary Key |
| complaint_id | INT | Foreign Key |
| old_status | VARCHAR(50) | Previous status |
| new_status | VARCHAR(50) | New status |
| updated_at | DATETIME | Status update time |

**Primary Key:** history_id

**Foreign Key:**
- complaint_id → Complaints.complaint_id

---

# 9. Notifications

## Purpose
Stores notifications sent to users.

| Column | Data Type | Description |
|---------|-----------|-------------|
| notification_id | INT | Primary Key |
| complaint_id | INT | Foreign Key |
| user_id | INT | Foreign Key |
| message | TEXT | Notification message |
| is_read | BOOLEAN | Read status |
| created_at | DATETIME | Notification time |

**Primary Key:** notification_id

**Foreign Keys:**
- complaint_id → Complaints.complaint_id
- user_id → Users.user_id

---

# 10. Languages

## Purpose
Stores supported languages.

| Column | Data Type | Description |
|---------|-----------|-------------|
| language_id | INT | Primary Key |
| language_name | VARCHAR(100) | Language name |
| language_code | VARCHAR(10) | Language code |

**Primary Key:** language_id

---

# 11. Audit_Logs

## Purpose
Stores user activity logs.

| Column | Data Type | Description |
|---------|-----------|-------------|
| log_id | INT | Primary Key |
| user_id | INT | Foreign Key |
| action | VARCHAR(255) | Activity performed |
| log_time | DATETIME | Time of activity |

**Primary Key:** log_id

**Foreign Key:**
- user_id → Users.user_id

---

# 12. Analytics

## Purpose
Stores dashboard analytics.

| Column | Data Type | Description |
|---------|-----------|-------------|
| analytics_id | INT | Primary Key |
| total_complaints | INT | Total complaints |
| resolved_complaints | INT | Resolved complaints |
| pending_complaints | INT | Pending complaints |
| updated_at | DATETIME | Last updated |

**Primary Key:** analytics_id

---

# 13. Citizen_Confirmation

## Purpose
Stores citizen feedback after complaint resolution.

| Column | Data Type | Description |
|---------|-----------|-------------|
| confirmation_id | INT | Primary Key |
| complaint_id | INT | Foreign Key |
| citizen_id | INT | Foreign Key |
| satisfied | BOOLEAN | Satisfaction status |
| feedback | TEXT | Citizen feedback |

**Primary Key:** confirmation_id

**Foreign Keys:**
- complaint_id → Complaints.complaint_id
- citizen_id → Citizen_Profiles.citizen_id

---

# 14. Department_Performance

## Purpose
Stores department performance statistics.

| Column | Data Type | Description |
|---------|-----------|-------------|
| performance_id | INT | Primary Key |
| department_id | INT | Foreign Key |
| resolved_count | INT | Total resolved complaints |
| average_resolution_time | FLOAT | Average resolution time |
| updated_at | DATETIME | Last updated |

**Primary Key:** performance_id

**Foreign Key:**
- department_id → Departments.department_id

**Indexes:**
- department_id

---

## Summary

- Total Tables: 14
- Storage Engine: InnoDB
- Character Set: utf8mb4
- Collation: utf8mb4_unicode_ci
- Primary Keys defined for every table.
- Foreign Keys defined according to the ER Diagram.
- Frequently searched columns are indexed for better performance.