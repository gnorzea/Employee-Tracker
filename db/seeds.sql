INSERT INTO department (department_name) 
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title,salary,department_id)
VALUES
('Salesperson', 80000,1),
('Lead Engineer', 150000,2),
('Software Engineer', 120000,2),
('Account Manager', 160000,3),
('Accountant', 125000,3),
('Legal Team Lead', 250000,4),
('Lawyer', 190000,4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Dora', 'Carrington', 1, NULL),
('Edward', 'Bellamy', 2, NULL),
('Montague', 'Summers', 3, NULL),
('Octavia', 'Butler', 4,NULL),
('Virginia', 'Woolf', 5, NULL),
('Piers', 'Gaveston', 6, NULL),
('Charles', 'LeRoi', 7, NULL),
('Katherine', 'Mansfield', 8, NULL);

 