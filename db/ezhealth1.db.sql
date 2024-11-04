BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "doctors" (
	"doctor_id"	INTEGER NOT NULL,
	"user_id"	INTEGER,
	"specialization"	TEXT,
	"created_on"	TEXT,
	PRIMARY KEY("doctor_id"),
	FOREIGN KEY("user_id") REFERENCES "users"("user_id")
);
CREATE TABLE IF NOT EXISTS "files" (
	"file_id"	INTEGER NOT NULL,
	"patient_id"	INTEGER,
	"file_path"	TEXT,
	"description"	TEXT,
	"date_uploaded"	INTEGER,
	PRIMARY KEY("file_id"),
	FOREIGN KEY("patient_id") REFERENCES "patients"("patient_id")
);
CREATE TABLE IF NOT EXISTS "lifestyle_recommendations" (
	"recommendation_id"	INTEGER NOT NULL,
	"patient_id"	INTEGER,
	"recommendation_text"	TEXT,
	"date_created"	INTEGER,
	PRIMARY KEY("recommendation_id"),
	FOREIGN KEY("patient_id") REFERENCES "patients"("patient_id")
);
CREATE TABLE IF NOT EXISTS "patients" (
	"patient_id"	INTEGER NOT NULL,
	"user_id"	INTEGER,
	"doctor_id"	INTEGER,
	"medical_history"	TEXT,
	"created_on"	TEXT,
	PRIMARY KEY("patient_id"),
	FOREIGN KEY("user_id") REFERENCES "users"("user_id")
);
CREATE TABLE IF NOT EXISTS "symptoms" (
	"symptom_id"	INTEGER NOT NULL,
	"patient_id"	INTEGER,
	"description"	TEXT,
	"severity"	INTEGER,
	"date_logged"	INTEGER,
	PRIMARY KEY("symptom_id"),
	FOREIGN KEY("patient_id") REFERENCES "patients"
);
CREATE TABLE IF NOT EXISTS "tickets" (
	"ticket_id"	INTEGER NOT NULL,
	"user_id"	INTEGER,
	"issue_description"	TEXT,
	"status"	TEXT,
	"date_submitted"	INTEGER,
	PRIMARY KEY("ticket_id"),
	FOREIGN KEY("user_id") REFERENCES "users"("user_id")
);
CREATE TABLE IF NOT EXISTS "users" (
	"user_id"	INTEGER NOT NULL,
	"name"	TEXT,
	"email"	TEXT,
	"password"	TEXT,
	PRIMARY KEY("user_id")
);
COMMIT;
