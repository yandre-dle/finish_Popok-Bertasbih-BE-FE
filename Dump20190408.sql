CREATE DATABASE  IF NOT EXISTS `popokpedia_abcd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `popokpedia_abcd`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: popokpedia_abcd
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `popokId` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `popok`
--

DROP TABLE IF EXISTS `popok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `popok` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `merk` varchar(45) NOT NULL,
  `harga` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `description` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `popok`
--

LOCK TABLES `popok` WRITE;
/*!40000 ALTER TABLE `popok` DISABLE KEYS */;
INSERT INTO `popok` VALUES (3,'bebek1','Bronson',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg','keren weh');
/*!40000 ALTER TABLE `popok` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaksi`
--

DROP TABLE IF EXISTS `transaksi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `totalPrice` float NOT NULL,
  `totalItem` varchar(45) NOT NULL,
  `tglTransaksi` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaksi`
--

LOCK TABLES `transaksi` WRITE;
/*!40000 ALTER TABLE `transaksi` DISABLE KEYS */;
INSERT INTO `transaksi` VALUES (1,'yandre1',1200,'1','2019-04-08'),(2,'yandre1',1200,'1','2019-04-08'),(3,'yandre1',1200,'1','2019-04-08'),(4,'yandre1',1200,'1','2019-04-08'),(5,'yandre1',1200,'1','2019-04-08'),(6,'yandre1',1200,'1','2019-04-08'),(7,'yandre1',150000,'1','2019-04-08'),(8,'yandre1',145480000,'1','2019-04-08'),(9,'yandre1',1200,'1','2019-04-08'),(10,'yandre1',1200,'1','2019-04-08'),(11,'yandre1',1200,'1','2019-04-08'),(12,'yandre1',1200,'1','2019-04-08'),(13,'yandre1',1200,'1','2019-04-08'),(14,'yandre1',1200,'1','2019-04-08'),(15,'yandre1',1200,'1','2019-04-08');
/*!40000 ALTER TABLE `transaksi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaksiitem`
--

DROP TABLE IF EXISTS `transaksiitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaksiitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `harga` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `popokId` int(11) NOT NULL,
  `transaksiId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaksiitem`
--

LOCK TABLES `transaksiitem` WRITE;
/*!40000 ALTER TABLE `transaksiitem` DISABLE KEYS */;
INSERT INTO `transaksiitem` VALUES (1,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,1),(2,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,2),(3,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,3),(4,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,4),(5,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,5),(6,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,6),(7,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',125,3,7),(8,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',121233,3,8),(9,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,9),(10,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,10),(11,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,11),(12,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,12),(13,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,13),(14,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,14),(15,'bebek1',1200,'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck%2C_stretching.jpg',1,3,15);
/*!40000 ALTER TABLE `transaksiitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL,
  `lastlogin` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'yandre1','3a287afa316dd9b3261110fa959f0a95f75aa604b9554f2e6b39f5bca4cc7017','reuter3yandri3@gmail.com','081382151584','Verified','Users','2019-04-08 18:40:27');
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

-- Dump completed on 2019-04-08 19:44:08
