DROP DATABASE IF EXISTS dteach;
CREATE DATABASE dteach;
USE dteach;

CREATE TABLE `dteach`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `dteach`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` CHAR(100) NOT NULL,
  `apellido` CHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `dteach`.`especialidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `dteach`.`clases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(55) NOT NULL,
  `nombre_profesor` VARCHAR(55) NOT NULL,
  `ubicacion` VARCHAR(55) NOT NULL,
  `precio` INT NOT NULL,
  `descripcion` VARCHAR(100) ,
  `id_especialidad` INT NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `dteach`.`usuarios_clases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_clase` INT NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `usuarios` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categorias`(`id`);
ALTER TABLE `clases` ADD FOREIGN KEY (`id_especialidad`) REFERENCES `especialidades`(`id`);
ALTER TABLE `usuarios_clases` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`);
ALTER TABLE `usuarios_clases` ADD FOREIGN KEY (`id_clase`) REFERENCES `clases`(`id`);