INSERT INTO department (name) VALUES
("Command"),
("Science"),
("Medical"),
("Engineering"),
("Security");

INSERT INTO role (title, salary, department_id) VALUES
("Admiral", 0.00, 1),
("Captain", 0.00, 1),
("Chief Science Officer", 0.00, 2),
("Doctor", 0.00, 3),
("Chief Engineer", 0.00, 4),
("Communications Officer", 0.00, 4),
("Pilot", 0.00, 1),
("Chief of Security", 0.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Christopher", "Pike", 1, null),
("James", "Kirk", 2, null),
("Spock", null, 3, null),
("Leonard", "McCoy", 4, null),
("Montgommery", "Scott", 5, null),
("Nyota", "Uhura", 6, null),
("Hikaru", "Sulu", 7, null),
("Pavel", "Chekov", 8, null);