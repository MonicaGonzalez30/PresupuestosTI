CREATE DATABASE presupuestosTI;

USE presupuestosTI;

--Usuarios
CREATE TABLE users(
	idUser INT NOT NULL IDENTITY(1,1),
	[user] VARCHAR(50) NOT NULL,
	[password] VARCHAR(50) NOT NULL,
	PRIMARY KEY (idUser)
);

--Registros usuarios
INSERT INTO users ([user],[password]) VALUES (
	'AdminMonica','contraM30'
);
INSERT INTO users ([user],[password]) VALUES (
	'AdminVanesa','contraV01'
);

SELECT * FROM users;

--Presupuestos
CREATE TABLE budgets(
	idBudget INT NOT NULL IDENTITY(1,1),
	creationDate DATE NOT NULL,
	project VARCHAR(50) NOT NULL,
	[version] FLOAT NOT NULL,
	PRIMARY KEY (idBudget)
);

--Registros presupuestos
INSERT INTO budgets (creationDate,project,[version]) VALUES (
	'2021-10-05','Proyecto de prueba',1.0
);
INSERT INTO budgets (creationDate,project,[version]) VALUES (
	'2021-10-06','Proyecto de prueba número 2',1.1
);
INSERT INTO budgets (creationDate,project,[version]) VALUES (
	'2021-10-06','Proyecto de prueba número 3',2
);

SELECT * FROM budgets;

-- Tablas ya con relacion foranea

--Flujo de efectivo
CREATE TABLE cashFlow(
	idFlow INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	[entry] FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idFlow),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

--Registros flujo de efectivo
INSERT INTO cashFlow (idBudget,[entry],[month]) VALUES (
	1,2300,'Enero'
);
INSERT INTO cashFlow (idBudget,[entry],[month]) VALUES (
	2,6900,'Febrero'
);
INSERT INTO cashFlow (idBudget,[entry],[month]) VALUES (
	3,16850,'Marzo'
);

SELECT * FROM cashFlow;

--Ingresos
CREATE TABLE income(
	idEntry INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	[entry] FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idEntry),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

--Registros ingresos
INSERT INTO income (idBudget,concept,[entry],[month]) VALUES (
	1,'Ejemplo de una entrada',1500.50,'Enero'
);
INSERT INTO income (idBudget,concept,[entry],[month]) VALUES (
	2,'Ejemplo de una entrada 2',1550.99,'Febrero'
);
INSERT INTO income (idBudget,concept,[entry],[month]) VALUES (
	3,'Ejemplo 3 de una entrada',23000,'Marzo'
);

SELECT * FROM income;

--Recursos
CREATE TABLE sinews(
	idResource INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	[role] VARCHAR(30) NOT NULL,
	[resource] FLOAT NOT NULL,
	[percentage] FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idResource),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

--Registros recursos
INSERT INTO sinews (idBudget,[role],[resource],[percentage],[month]) VALUES (
	1,'Rol 1',1500,15.3,'Enero'
);
INSERT INTO sinews (idBudget,[role],[resource],[percentage],[month]) VALUES (
	2,'Rol 3',3200,50,'Febrero'
);
INSERT INTO sinews (idBudget,[role],[resource],[percentage],[month]) VALUES (
	3,'Rol 2',55000,10,'Marzo'
);

SELECT * FROM sinews;

--Gastos administrativos
CREATE TABLE administrativeExpenses(
	idSpending INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	spending FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idSpending),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

--Registros gastos administrativos
INSERT INTO administrativeExpenses (idBudget,concept,spending,[month]) VALUES (
	1,'Ejemplo de un gasto administrativo',160,'Enero'
);
INSERT INTO administrativeExpenses (idBudget,concept,spending,[month]) VALUES (
	2,'Ejemplo 2 de un gasto administrativo',590.99,'Febrero'
);
INSERT INTO administrativeExpenses (idBudget,concept,spending,[month]) VALUES (
	3,'Ejemplo 3 de un gasto administrativo',6238,'Marzo'
);

SELECT * FROM administrativeExpenses;

--Costos directos
CREATE TABLE directCosts(
	idCost INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	cost FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idCost),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

--Registros costos directos
INSERT INTO directCosts (idBudget,concept,cost,[month]) VALUES (
	1,'Ejemplo de un costo directo',290.33,'Enero'
);
INSERT INTO directCosts (idBudget,concept,cost,[month]) VALUES (
	2,'Ejemplo 2 de un costo directo',900.50,'Febrero'
);
INSERT INTO directCosts (idBudget,concept,cost,[month]) VALUES (
	3,'Ejemplo 3 de un costo directo',2300,'Marzo'
);

SELECT * FROM directCosts;