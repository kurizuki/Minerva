CREATE DATABASE  IF NOT EXISTS `thoth` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `thoth`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: thoth
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Price` decimal(20,3) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `Stock` int unsigned DEFAULT NULL,
  `BarCode` int unsigned DEFAULT NULL,
  `Brand` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL,
  `ColorWay` varchar(50) DEFAULT NULL,
  `Sizes` varchar(50) DEFAULT NULL,
  `Category` varchar(50) DEFAULT NULL,
  `Image` varchar(50) DEFAULT NULL,
  `ReleaseDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productxstockentry`
--

DROP TABLE IF EXISTS `productxstockentry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productxstockentry` (
  `ProductID` int unsigned DEFAULT NULL,
  `StockEntryID` int unsigned DEFAULT NULL,
  KEY `productxstockentry_fk_ProductID` (`ProductID`),
  KEY `productxstockentry_fk_StockEntryID` (`StockEntryID`),
  CONSTRAINT `productxstockentry_fk_ProductID` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  CONSTRAINT `productxstockentry_fk_StockEntryID` FOREIGN KEY (`StockEntryID`) REFERENCES `stockentry` (`StockEntryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productxstockentry`
--

LOCK TABLES `productxstockentry` WRITE;
/*!40000 ALTER TABLE `productxstockentry` DISABLE KEYS */;
/*!40000 ALTER TABLE `productxstockentry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale` (
  `SaleID` int unsigned NOT NULL AUTO_INCREMENT,
  `SellerID` int unsigned DEFAULT NULL,
  `UserID` int unsigned DEFAULT NULL,
  `SaleDate` datetime DEFAULT NULL,
  `TotalPrice` decimal(20,3) DEFAULT NULL,
  PRIMARY KEY (`SaleID`),
  KEY `fk_UserID` (`UserID`),
  KEY `fk_SellerID` (`SellerID`),
  CONSTRAINT `fk_SellerID` FOREIGN KEY (`SellerID`) REFERENCES `seller` (`SellerID`),
  CONSTRAINT `fk_UserID` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saledetail`
--

DROP TABLE IF EXISTS `saledetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saledetail` (
  `SaleID` int unsigned DEFAULT NULL,
  `ProductID` int unsigned DEFAULT NULL,
  `Amount` int unsigned DEFAULT NULL,
  `TotalPrice` decimal(20,3) DEFAULT NULL,
  KEY `fk_SaleID` (`SaleID`),
  KEY `fk_ProductID` (`ProductID`),
  CONSTRAINT `fk_ProductID` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  CONSTRAINT `fk_SaleID` FOREIGN KEY (`SaleID`) REFERENCES `sale` (`SaleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saledetail`
--

LOCK TABLES `saledetail` WRITE;
/*!40000 ALTER TABLE `saledetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `saledetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `SellerID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`SellerID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockentry`
--

DROP TABLE IF EXISTS `stockentry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockentry` (
  `StockEntryID` int unsigned NOT NULL AUTO_INCREMENT,
  `DateStock` datetime DEFAULT NULL,
  `Amount` int unsigned DEFAULT NULL,
  PRIMARY KEY (`StockEntryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockentry`
--

LOCK TABLES `stockentry` WRITE;
/*!40000 ALTER TABLE `stockentry` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockentry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockinputxsupplier`
--

DROP TABLE IF EXISTS `stockinputxsupplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockinputxsupplier` (
  `StockEntryID` int unsigned DEFAULT NULL,
  `SupplierID` int unsigned DEFAULT NULL,
  KEY `StockInputXSupplier_fk_StockEntryID` (`StockEntryID`),
  KEY `StockInputXSupplier_fk_SupplierID` (`SupplierID`),
  CONSTRAINT `StockInputXSupplier_fk_StockEntryID` FOREIGN KEY (`StockEntryID`) REFERENCES `stockentry` (`StockEntryID`),
  CONSTRAINT `StockInputXSupplier_fk_SupplierID` FOREIGN KEY (`SupplierID`) REFERENCES `supplier` (`SupplierID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockinputxsupplier`
--

LOCK TABLES `stockinputxsupplier` WRITE;
/*!40000 ALTER TABLE `stockinputxsupplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockinputxsupplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `SupplierID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`SupplierID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int unsigned NOT NULL AUTO_INCREMENT,
  `FullName` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-12 20:51:54
