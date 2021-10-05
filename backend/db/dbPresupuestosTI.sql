CREATE DATABASE presupuestosTI;

USE presupuestosTI;

CREATE TABLE users(
	idUser INT NOT NULL IDENTITY(1,1),
	[user] VARCHAR(50) NOT NULL,
	[password] VARCHAR(50) NOT NULL,
	PRIMARY KEY (idUser)
);

CREATE TABLE budgets(
	idBudget INT NOT NULL IDENTITY(1,1),
	creationDate DATE NOT NULL,
	project VARCHAR(50) NOT NULL,
	[version] FLOAT NOT NULL,
	PRIMARY KEY (idBudget)
);

-- Tablas ya con relacion foranea
CREATE TABLE cashFlow(
	idFlow INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	[entry] FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idFlow),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

CREATE TABLE income(
	idEntry INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	[entry] FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idEntry),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

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

CREATE TABLE administrativeExpenses(
	idSpending INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	spending FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idSpending),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);

CREATE TABLE directCosts(
	idCost INT NOT NULL IDENTITY(1,1),
	idBudget INT NOT NULL,
	concept VARCHAR(50) NOT NULL,
	cost FLOAT NOT NULL,
	[month] VARCHAR(15) NOT NULL,
	PRIMARY KEY (idCost),
	FOREIGN KEY (idBudget) REFERENCES budgets(idBudget) ON DELETE CASCADE
);