INSERT INTO departments (department_name) VALUES
("Command"),
("Science"),
("Medical"),
("Engineering"),
("Security");

INSERT INTO roles (title, salary, department_id) VALUES
("Admiral", 0.00, 1),
("Captain", 0.00, 1),
("Chief Science Officer", 0.00, 2),
("Doctor", 0.00, 3),
("Chief Engineer", 0.00, 4),
("Communications Officer", 0.00, 4),
("Pilot", 0.00, 1),
("Chief of Security", 0.00, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
("Christopher", "Pike", 1, null),
("James", "Kirk", 2, 1),
("Spock", null, 3, 2),
("Leonard", "McCoy", 4, 3),
("Montgommery", "Scott", 5, 3),
("Nyota", "Uhura", 6, 3),
("Hikaru", "Sulu", 7, 3),
("Pavel", "Chekov", 8, 3);