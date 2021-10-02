CREATE DATABASE presupuestosTI;

USE presupuestosTI;

CREATE TABLE users(
	idUser INT NOT NULL IDENTITY(1,1),
	[user] VARCHAR(50) NOT NULL,
	[password] VARCHAR(50) NOT NULL,
	PRIMARY KEY (idUser)
);