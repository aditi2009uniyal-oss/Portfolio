CREATE DATABASE quiz_hub;

USE quiz_hub;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);

CREATE TABLE quiz_results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subject VARCHAR(50),
    difficulty VARCHAR(20),
    score INT,
    total_questions INT,
    quiz_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (name, email, password)
VALUES ('Aditi', 'aditi@example.com', 'test123');

SELECT * FROM users;