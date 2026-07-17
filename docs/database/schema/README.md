# CivicAI Database Schema

This folder contains the SQL schema for the CivicAI project.

## Execution Order

1. 01_create_database.sql
2. 02_create_tables.sql
3. 03_constraints.sql
4. 04_indexes.sql

## Description

- 01_create_database.sql
  Creates the database and selects it.

- 02_create_tables.sql
  Creates all tables required for CivicAI.

- 03_constraints.sql
  Adds primary and foreign key constraints.

- 04_indexes.sql
  Creates indexes to improve query performance.

## Database

Database Name: civicai_db

Storage Engine: InnoDB

Character Set: utf8mb4

Collation: utf8mb4_unicode_ci