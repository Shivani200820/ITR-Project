# CRUD Operations

## Overview

This module implements CRUD (Create, Read, Update, Delete) operations using SQLAlchemy ORM for the CivicAI database.

## Functions

### create_user()
Creates a new user in the Users table.

### get_user_by_email()
Retrieves a user using their email address.

### create_complaint()
Creates a new complaint record.

### get_all_complaints()
Returns all complaint records.

### get_complaint_by_id()
Returns a complaint by its ID.

### update_complaint_status()
Updates the status of an existing complaint.

### delete_complaint()
Deletes a complaint from the database.

## Testing

CRUD operations were tested successfully using `database/test_crud.py`.