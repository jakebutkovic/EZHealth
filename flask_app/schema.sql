DROP TABLE IF EXISTS patient;

CREATE TABLE patient (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  pass TEXT NOT NULL
  symptom_data JSON 
);