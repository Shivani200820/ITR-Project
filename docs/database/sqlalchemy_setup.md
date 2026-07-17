# SQLAlchemy Setup

## Objective

This module integrates the CivicAI MySQL database with Python using SQLAlchemy ORM.

## Technologies Used

- Python
- SQLAlchemy
- PyMySQL
- python-dotenv
- MySQL

## Project Structure

database/
├── __init__.py
├── database.py
├── models.py
└── test_connection.py

.env
requirements.txt

## Installation

Install the required packages:

pip install sqlalchemy pymysql python-dotenv

## Database Connection

The database connection is configured in `database.py`.

Connection details are stored securely in the `.env` file.

## Testing

Run the following command:

python -m database.test_connection

Expected Output:

Database connected successfully!

## Status

Module 3 database connection completed successfully.