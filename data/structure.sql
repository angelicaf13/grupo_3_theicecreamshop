CREATE DATABASE  IF NOT EXISTS `icrecream_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `icrecream_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: icrecream_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Holanda'),(2,'Ben & Jerry\'s'),(3,'Häagen-Dazs'),(4,'Blue Bell'),(5,'Thrifty');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_products`
--

DROP TABLE IF EXISTS `car_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_products` (
  `id_car_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_car` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` float NOT NULL,
  PRIMARY KEY (`id_car_product`),
  KEY `id_car` (`id_car`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `car_products_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id_car`),
  CONSTRAINT `car_products_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_products`
--

LOCK TABLES `car_products` WRITE;
/*!40000 ALTER TABLE `car_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id_car` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_payment_type` int(11) NOT NULL,
  `total` float NOT NULL,
  `date_sale` date NOT NULL,
  PRIMARY KEY (`id_car`),
  KEY `id_user` (`id_user`),
  KEY `id_payment_type` (`id_payment_type`),
  CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `cars_ibfk_2` FOREIGN KEY (`id_payment_type`) REFERENCES `payment_types` (`id_payment_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'admin'),(2,'client');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flavors`
--

DROP TABLE IF EXISTS `flavors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flavors` (
  `id_flavor` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_flavor`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flavors`
--

LOCK TABLES `flavors` WRITE;
/*!40000 ALTER TABLE `flavors` DISABLE KEYS */;
INSERT INTO `flavors` VALUES (1,'Mint Chocolate Cookie'),(2,'Strawberry Cheesecake'),(3,'Netflix & Chill\'d'),(4,'Piña Colada'),(5,'Lime Mojito Sorbet'),(6,'Vanilla'),(7,'Chocolate Chip Cookie Dough');
/*!40000 ALTER TABLE `flavors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_types`
--

DROP TABLE IF EXISTS `payment_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_types` (
  `id_payment_type` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_payment_type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_types`
--

LOCK TABLES `payment_types` WRITE;
/*!40000 ALTER TABLE `payment_types` DISABLE KEYS */;
INSERT INTO `payment_types` VALUES (1,'Credit Card'),(2,'Debit Card'),(3,'Cash'),(4,'PayPal');
/*!40000 ALTER TABLE `payment_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_brand` int(11) NOT NULL,
  `id_flavor` int(11) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `id_size` int(11) NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `productImage` varchar(100) NOT NULL DEFAULT 'default-product.png',
  PRIMARY KEY (`id_product`),
  KEY `id_brand` (`id_brand`),
  KEY `id_flavor` (`id_flavor`),
  KEY `id_size` (`id_size`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_flavor`) REFERENCES `flavors` (`id_flavor`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`id_size`) REFERENCES `sizes` (`id_size`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,2,1,NULL,1,145,10,1,'ben-jerry-mint-chocolate.webp'),(2,2,1,NULL,2,64.5,18,1,'ben-jerry-mint-chocolate.webp'),(3,2,1,NULL,3,195,6,1,'ben-jerry-mint-chocolate.webp'),(4,2,2,NULL,1,145,20,1,'ben-jerry-strawberry-cheesecake.webp'),(5,2,2,NULL,2,64.5,20,1,'ben-jerry-strawberry-cheesecake.webp'),(6,2,2,NULL,3,195,10,1,'ben-jerry-strawberry-cheesecake.webp'),(7,2,3,NULL,1,155,15,1,'ben-jerry-netflix-chilld.png'),(8,2,3,NULL,2,72,15,1,'ben-jerry-netflix-chilld.png'),(9,2,3,NULL,3,210,15,1,'ben-jerry-netflix-chilld.png'),(10,3,4,NULL,1,170,30,1,'Pina-Colada-Pint.png'),(11,3,4,NULL,2,86,30,1,'Pina-Colada-Pint.png'),(12,3,4,NULL,3,240,30,1,'Pina-Colada-Pint.png'),(13,3,5,NULL,1,170,25,1,'Lime-Mojito-Pint.png'),(14,3,5,NULL,2,86,25,1,'Lime-Mojito-Pint.png'),(15,3,5,NULL,3,240,25,1,'Lime-Mojito-Pint.png'),(16,3,6,NULL,1,160,20,1,'vanilla-haagen.png'),(17,3,6,NULL,2,74,20,1,'vanilla-haagen.png'),(18,3,6,NULL,3,220,20,1,'vanilla-haagen.png'),(19,4,7,NULL,1,135,50,1,'BlueBell_ChocChip.png'),(20,4,7,NULL,2,78,50,1,'BlueBell_ChocChip.png'),(21,4,7,NULL,3,195,50,1,'BlueBell_ChocChip.png'),(22,1,6,NULL,1,79,20,1,'holanda-vainilla.webp'),(23,1,6,NULL,2,130,20,1,'holanda-vainilla.webp'),(24,1,6,NULL,3,190,20,1,'holanda-vainilla.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id_size` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_size`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'1 lt.'),(2,'1/2 lt.'),(3,'1.89 lt.');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `id_category` int(11) NOT NULL,
  `profileImage` varchar(100) NOT NULL DEFAULT 'default.png',
  PRIMARY KEY (`id_user`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ana','Fierro','anafierro190498@gmail.com','1',2,'ana.jpg'),(2,'Ana Bertha','Hernández','hernandezgonzalezg7@gmail.com','1',2,'user1630030287758.jpeg'),(3,'Angelica','Figueroa','swiftie13_98@outlook.com','1',2,'user1629743333317.PNG');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-06 16:57:58
