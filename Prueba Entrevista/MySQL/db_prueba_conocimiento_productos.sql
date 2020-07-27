-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: db_prueba_conocimiento
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` int(11) NOT NULL,
  `existencia` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` enum('activo','inactivo','pendiente') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'activo',
  `id_bodega` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_id_bodega_foreign` (`id_bodega`),
  CONSTRAINT `productos_id_bodega_foreign` FOREIGN KEY (`id_bodega`) REFERENCES `bodegas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'producto1',123,10,'priemr producto','activo',1,NULL,NULL),(2,'producto2',456,5,'hola','inactivo',2,NULL,NULL),(3,'producto3',789,40,'chao','pendiente',3,NULL,NULL),(4,'producto4',159,2,'aja','activo',4,NULL,NULL),(5,'produto5',951,8,'lero','activo',1,NULL,NULL),(6,'andres',145,14,'jasdhah','inactivo',2,'2020-07-05 02:10:07','2020-07-05 02:10:07'),(7,'alejandrp',1421,145,'hola','activo',5,'2020-07-05 02:12:33','2020-07-05 02:12:33'),(8,'weeeeeee',333,333,'333','pendiente',3,'2020-07-05 02:13:28','2020-07-05 02:50:09'),(9,'jijiji',111,111,'111','activo',1,'2020-07-05 02:15:18','2020-07-05 02:47:22'),(10,'asdsad',1223,213,'23123','inactivo',2,'2020-07-05 02:15:55','2020-07-05 02:15:55'),(11,'7489',45,14,'sa{khjnsñajd','inactivo',2,'2020-07-05 02:18:37','2020-07-05 02:18:37'),(12,'31244323412',12,21,'adfssadf','inactivo',3,'2020-07-05 02:21:30','2020-07-05 02:21:30'),(13,'rtf',678,34,'edfadfads','inactivo',3,'2020-07-05 02:23:35','2020-07-05 02:23:35'),(14,'78945',456,78,'213423321','activo',2,'2020-07-05 02:25:30','2020-07-05 02:25:30'),(15,'7979',79,79,'7979','activo',2,'2020-07-05 02:53:13','2020-07-05 02:53:33');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-04 16:56:37
