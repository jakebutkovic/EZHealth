CREATE TABLE IF NOT EXISTS `ez_health`.`doctors` (
  `doctor_id` INT NOT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `specialization` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ez_health`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`files` (
  `file_id` INT NOT NULL,
  `patient_id` INT NULL DEFAULT NULL,
  `file_path` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `date_uploaded` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`file_id`),
  INDEX `fk_files_patient_id` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_files_patient_id`
    FOREIGN KEY (`patient_id`)
    REFERENCES `ez_health`.`patients` (`patient_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`lifestyle_recommendations` (
  `recommendation_id` INT NOT NULL,
  `patient_id` INT NULL DEFAULT NULL,
  `recommendation_text` TEXT NULL DEFAULT NULL,
  `date_created` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`recommendation_id`),
  INDEX `fk_lr_patient_id` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_lr_patient_id`
    FOREIGN KEY (`patient_id`)
    REFERENCES `ez_health`.`patients` (`patient_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`patients` (
  `patient_id` INT NOT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `doctor_id` INT NOT NULL,
  `medical_history` TEXT NULL DEFAULT NULL,
  `created_at` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  INDEX `patient_id` (`doctor_id` ASC) VISIBLE,
  CONSTRAINT `patient_id`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `ez_health`.`doctors` (`doctor_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`symptoms` (
  `symptom_id` INT NOT NULL,
  `patient_id` INT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `severity` INT NULL DEFAULT NULL,
  `date_logged` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`symptom_id`),
  INDEX `fk_symptoms_patient_id` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `fk_symptoms_patient_id`
    FOREIGN KEY (`patient_id`)
    REFERENCES `ez_health`.`patients` (`patient_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`tickets` (
  `ticket_id` INT NOT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `issue_description` TEXT NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `date_submitted` DATETIME NULL DEFAULT NULL,
  INDEX `fk_tickets_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_tickets_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `ez_health`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

CREATE TABLE IF NOT EXISTS `ez_health`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci