INSERT INTO department (id, department_name)
VALUES (001, "Engineering"),
       (002, "Accounting");

INSERT INTO position (role_id, title, salary, department_id)
VALUES (1000, "Engineer", 120000, 1),
       (1001, "Accountant", 70000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager)
VALUES (5422, "Noah", "Redford", 1, "Jenny"),
       (5562, "Chris", "Berganza", 2, "Michael");