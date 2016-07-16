-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.11-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- Dumping data for table bamazon.departments: ~0 rows (approximately)
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;

-- Dumping data for table bamazon.products: ~11 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `productName`, `departmentName`, `price`, `stockQuantity`) VALUES
	(1, 'oculus rift', 'tech', 600.00, 15),
	(2, 'xbox one', 'tech', 280.00, 10),
	(3, 'versace shoes', 'shoes', 200.00, 5),
	(4, 'kayak', 'outdoors', 350.00, 7),
	(5, 'hat', 'clothing', 20.00, 15),
	(6, 'macBook Pro', 'tech', 1000.00, 5),
	(7, 'galaxy s7', 'phones', 700.00, 8),
	(8, 'one plus 3', 'phones', 300.00, 10),
	(9, 'nikes', 'shoes', 50.00, 100),
	(10, 'adidas', 'shoes', 40.00, 50),
	(11, 'Astro headset', 'gaming', 300.00, 14),
	(12, 'vizio tv', 'tech', 200.00, 4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
