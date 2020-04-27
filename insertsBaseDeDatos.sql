CREATE DATABASE jugadoresdel_realMadrid;

USE jugadores_realMadrid

CREATE TABLE datos_jugadores (
id_jugador INT NOT NULL AUTO_INCREMENT,
dorsal INTEGER, 
nombre VARCHAR(50),
apellido VARCHAR(50),
nacionalidad VARCHAR(30),
PRIMARY KEY (id_jugador));

INSERT INTO datos_jugadores VALUES (1, 13, "Thibaut", "Courtois", "Belga"), 
(2, 2, "Dani", "Carvajal", "Española"), 
(3, 3, "Eder", "Militao", "Brasileño"), 
(4, 4, "Sergio", "Ramos", "Española"), 
(5, 5, "Raphael", "Varane", "Francesa"), 
(6, 6, "Nacho", "Fernandez", "Española"), 
(7, 12, "Marcelo", "Vieira", "Brasileña"), 
(8, 23, "Ferland", "Mendy", "Francesa"), 
(9, 8, "Toni", "Kroos", "Alemana"), 
(10, 10, "Luka", "Modric", "Croata"), 
(11, 14, "Henrique", "Casemiro", "Brasileña"), 
(12, 15, "Fede", "Valverde", "Uruguaya"), 
(13, 16, "James", "Rodriguez", "Colombiana"), 
(14, 22, "Isco", "Alarcon", "Española"), 
(15, 7, "Eden", "Hazard", "Belga"), 
(16, 9, "Karim", "Benzema", "Francesa"), 
(17, 11, "Gareth", "Bale", "Gales"), 
(18, 17, "Lucas", "Vazquez", "Española"), 
(19, 18, "Luka", "Jovic", "Serbia"), 
(20, 20, "Marco", "Asensio", "Española"), 
(21, 21, "Brahim", "Diaz", "Española"), 
(22, 24, "Mariano", "Diaz", "Española"), 
(23, 25, "Vinicius", "Junior", "Brasileña"), 
(24, 27, "Rodrygo", "Goes", "Brasileña"),
(25, 1, "Alphonse", "Areola", "Francesa");  


