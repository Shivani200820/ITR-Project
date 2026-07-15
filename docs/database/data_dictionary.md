# Data Dictionary

| Column | Data Type | Description |
|---------|-----------|-------------|
| user_id | INT | Unique user identifier |
| citizen_id | INT | Citizen identifier |
| officer_id | INT | Officer identifier |
| department_id | INT | Department identifier |
| complaint_id | INT | Complaint identifier |
| image_id | INT | Image identifier |
| analysis_id | INT | AI analysis identifier |
| support_id | INT | Complaint support identifier |
| history_id | INT | Complaint status history identifier |
| notification_id | INT | Notification identifier |
| confirmation_id | INT | Citizen confirmation identifier |
| performance_id | INT | Department performance identifier |
| email | VARCHAR(255) | User email address |
| phone | VARCHAR(15) | User phone number |
| status | ENUM | Complaint status |
| priority | ENUM | Complaint priority |
| description | TEXT | Complaint description |
| image_url | VARCHAR(255) | Complaint image location |
| created_at | DATETIME | Record creation time |
| updated_at | DATETIME | Record update time |