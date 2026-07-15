Database Normalization Explanation

## First Normal Form (1NF)

- Each column stores only one value.
- Every row is unique.
- No repeating groups or duplicate columns.

## Second Normal Form (2NF)

- The database is already in 1NF.
- Every non-key column depends on the entire primary key.
- No partial dependencies exist.

## Third Normal Form (3NF)

- The database is already in 2NF.
- Non-key columns depend only on the primary key.
- No transitive dependencies exist.

## Example

### Not Normalized

Complaint

| Complaint ID | Department Name |
|--------------|-----------------|
|101|Road Department|
|102|Road Department|

The department name is repeated.

### Normalized

Departments

| Department ID | Department Name |
|---------------|-----------------|
|1|Road Department|

Complaints

| Complaint ID | Department ID |
|--------------|---------------|
|101|1|
|102|1|

This reduces duplicate data and improves consistency.
