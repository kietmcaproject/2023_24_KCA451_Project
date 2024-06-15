-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 15, 2024 at 06:52 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waste food`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `a_id` int(11) NOT NULL,
  `a_name` varchar(255) NOT NULL,
  `a_password` varchar(255) NOT NULL,
  `a_address` varchar(255) NOT NULL,
  `a_number` bigint(25) NOT NULL,
  `a_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`a_id`, `a_name`, `a_password`, `a_address`, `a_number`, `a_email`) VALUES
(1, 'NAVNEET CHAUDHARY', 'Navneet@1', 'Saharanpur', 9759000083, 'chaudharynavneet1234@gmail.com'),
(2, 'Navneet', 'Navneet@1104', 'Saharanpur', 9759000083, 'admin@nav.in');

-- --------------------------------------------------------

--
-- Table structure for table `clientlogin`
--

CREATE TABLE `clientlogin` (
  `c_id` int(255) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `c_email` varchar(255) NOT NULL,
  `c_password` varchar(255) NOT NULL,
  `c_address` varchar(255) NOT NULL,
  `c_age` int(22) NOT NULL,
  `c_number` bigint(255) NOT NULL,
  `c_status` varchar(255) NOT NULL,
  `adhaar` bigint(255) NOT NULL,
  `profile` varchar(255) NOT NULL,
  `fadhaar` varchar(255) NOT NULL,
  `badhaar` varchar(255) NOT NULL,
  `c_city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clientlogin`
--

INSERT INTO `clientlogin` (`c_id`, `c_name`, `c_email`, `c_password`, `c_address`, `c_age`, `c_number`, `c_status`, `adhaar`, `profile`, `fadhaar`, `badhaar`, `c_city`) VALUES
(24, 'Navneet chaudhary', 'chaudharynavneet1234@gmail.com', 'Navneet@1', 'Saharanpur', 23, 9759000083, 'verified', 970278894035, 'IMG_9667.jpg', 'hunger.jpg', 'logo.jpg', 'Saharanpur'),
(27, 'Madhav', 'xyz@gmail.com', 'Madhav@123', 'Sultanpur', 23, 73672153536, 'Not verified', 327156144151452, 'IMG_9667.jpg', 'IMG_9667.jpg', 'hunger.jpg', 'Ghaziabad');

-- --------------------------------------------------------

--
-- Table structure for table `clothedonate`
--

CREATE TABLE `clothedonate` (
  `cl_id` int(255) NOT NULL,
  `cl_name` varchar(255) NOT NULL,
  `cl_email` varchar(255) NOT NULL,
  `cl_date` datetime NOT NULL,
  `cl_bags` int(255) NOT NULL,
  `cl_status` text NOT NULL,
  `cl_address` longtext NOT NULL,
  `cl_image` varchar(255) NOT NULL,
  `cl_zila` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothedonate`
--

INSERT INTO `clothedonate` (`cl_id`, `cl_name`, `cl_email`, `cl_date`, `cl_bags`, `cl_status`, `cl_address`, `cl_image`, `cl_zila`) VALUES
(1, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '2024-04-08 14:44:00', 5, 'verified', 'bcjansjsnq', 'IMG_9680.JPG', 'Saharanpur'),
(2, 'Navneet', 'navneet.2224mca1013@kiet.edu', '2024-05-06 10:45:00', 34, 'Not verified', 'asbdhaj', 'hunger.jpg', ''),
(3, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '2024-05-22 21:02:00', 34, 'Not verified', 'kg resort', 'hunger.jpg', 'saharanpur');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `d_id` int(255) NOT NULL,
  `d_name` varchar(255) NOT NULL,
  `d_number` bigint(20) NOT NULL,
  `d_vechile` varchar(255) NOT NULL,
  `d_image` varchar(255) NOT NULL,
  `d_date` datetime NOT NULL,
  `f_id` int(255) DEFAULT NULL,
  `c_id` int(255) DEFAULT NULL,
  `o_email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`d_id`, `d_name`, `d_number`, `d_vechile`, `d_image`, `d_date`, `f_id`, `c_id`, `o_email`) VALUES
(4, 'dnxbjs', 8281212711, 'gdy871271', 'Admin.jpg', '2024-04-11 08:13:00', 1, NULL, 'Navneet.2224mca1013@kiet.edu'),
(5, 'hbabaj', 71728162819, '82212hjs', 'bot-mini.png', '2024-04-12 12:12:00', NULL, 1, 'navneet.2224mca1013@kiet.edu'),
(6, 'ayush', 2819261961, 'bwhqd8271', 'background9.jpeg', '2024-04-21 18:36:00', 2, NULL, 'chaudharynavneet1234@gmail.com'),
(7, 'nitish', 356281518, '7361gshja', 'team4.jpg', '2024-04-22 12:22:00', NULL, 1, 'chaudharynavneet1234@gmail.com'),
(8, 'nitish', 356281518, '7361gshja', 'team4.jpg', '2024-04-22 12:22:00', NULL, 1, 'chaudharynavneet1234@gmail.com'),
(9, 'Nagapal', 125811717512, '263shaj', 'nitish.jpeg', '2024-04-23 11:26:00', 4, NULL, 'chaudharynavneet1234@gmail.com'),
(10, 'navneet', 8178316715, 'qege27', 'IMG_9667.jpg', '2024-05-05 20:59:00', NULL, 1, 'navneet.2224mca1013@kiet.edu'),
(11, 'navneet', 236276756, 'jbqsiwqge378', 'IMG_9667.jpg', '2024-05-05 21:00:00', 5, NULL, 'navneet.2224mca1013@kiet.edu'),
(12, 'madhav', 313561415, '77131', 'IMG_9667.jpg', '2024-05-05 21:02:00', 2, NULL, 'navneet.2224mca1013@kiet.edu'),
(13, 'hvshx', 321536425, 'vduwq65', 'IMG_9667.jpg', '2024-05-11 10:03:00', 6, NULL, 'navneet.2224mca1013@kiet.edu'),
(14, 'asbjvxdgq', 2613856412, '12thsva', 'IMG_9667.jpg', '2024-05-11 10:13:00', 7, NULL, 'chaudharynavneet1234@gmail.com'),
(15, 'Madhav', 812151652614, '2v761212ssx', 'IMG_9667.jpg', '2024-06-13 22:49:00', 8, NULL, 'navneet.2224mca1013@kiet.edu');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fooddonate`
--

CREATE TABLE `fooddonate` (
  `f_id` int(255) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `f_email` varchar(255) NOT NULL,
  `f_packets` varchar(255) NOT NULL,
  `f_status` varchar(255) NOT NULL,
  `f_image` varchar(255) NOT NULL,
  `f_address` longtext NOT NULL,
  `f_type_name` varchar(255) NOT NULL,
  `f_date` datetime NOT NULL,
  `f_zila` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fooddonate`
--

INSERT INTO `fooddonate` (`f_id`, `f_name`, `f_email`, `f_packets`, `f_status`, `f_image`, `f_address`, `f_type_name`, `f_date`, `f_zila`) VALUES
(2, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '4', 'Delivered', 'IMG_9680.JPG', 'hbdhbhqwbhqbjwj', 'dwjqj', '2024-04-09 14:12:00', 'Saharanpur'),
(4, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '1kg or dal, 10', 'Delivered', 'background7.jpeg', 'muradnagar', 'KG resort', '2024-04-23 11:23:00', ''),
(5, 'Madhav Sharma', 'madhav0192@gmail.com', '56', 'Delivered', 'hunger.jpg', 'qdhqvwgwewhb', 'Kg resort', '2024-05-05 20:54:00', ''),
(6, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '65', 'Delivered', 'hunger.jpg', 'cbjhabsah', 'bhaha', '2024-05-05 21:53:00', ''),
(7, 'Navneet chaudhary', 'chaudharynavneet1234@gmail.com', '34', 'Delivered', 'hunger.jpg', 'gdhwgdqb', 'bhwgehw', '2024-05-11 10:10:00', ''),
(8, 'Navneet chaudhary', 'chaudharynavneet1234@gmail.com', '1 kg of dal', 'Delivered', 'hunger.jpg', 'svdsag', 'Kg resort', '2024-05-11 11:14:00', 'Saharanpur'),
(9, 'sajdvq', 'xyz@gmail.com', '43', 'verified', '0*M4bxiCIjcTK-2Xr6.jpg', 'dnjwnw', 'kg', '2024-05-13 10:05:00', ''),
(10, 'NAVNEET CHAUDHARY', 'chaudharynavneet1234@gmail.com', '22', 'Not verified', 'hunger.jpg', 'jwbh', 'saw', '2024-05-19 23:33:00', 'Saharanpur');

-- --------------------------------------------------------

--
-- Table structure for table `moneydonate`
--

CREATE TABLE `moneydonate` (
  `m_id` int(255) NOT NULL,
  `m_email` varchar(255) NOT NULL,
  `m_name` varchar(255) NOT NULL,
  `m_image` varchar(255) NOT NULL,
  `upi_id` varchar(255) NOT NULL,
  `m_date` datetime NOT NULL,
  `reference` varchar(255) NOT NULL,
  `m_status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moneydonate`
--

INSERT INTO `moneydonate` (`m_id`, `m_email`, `m_name`, `m_image`, `upi_id`, `m_date`, `reference`, `m_status`) VALUES
(20, 'chaudharynavneet1234@gmail.com', 'NAVNEET CHAUDHARY', 'IMG_9667.jpg', '', '2024-04-08 00:00:00', '783193281991821673', NULL),
(21, 'chaudharynavneet1234@gmail.com', 'NAVNEET CHAUDHARY', '0*M4bxiCIjcTK-2Xr6.jpg', '', '2024-04-01 00:00:00', 'njabsahvhabs', NULL),
(22, 'chaudharynavneet1234@gmail.com', 'NAVNEET CHAUDHARY', '002_clip_image003.png', '', '2024-04-03 00:00:00', 'bahsabhvxgajahsah', 'Not verified'),
(23, 'navneet.2224mca1013@kiet.edu', 'Navneet', 'hunger.jpg', '732518328', '2024-05-06 10:40:00', 'asdadghfa', 'Not verified'),
(24, 'navneet.2224mca1013@kiet.edu', 'Navneet', 'hunger.jpg', '26173278671', '2024-05-10 23:36:00', 'dhaddg1712', 'Not verified');

-- --------------------------------------------------------

--
-- Table structure for table `ngoquery`
--

CREATE TABLE `ngoquery` (
  `ngo_id` int(255) NOT NULL,
  `ngo_name` varchar(255) NOT NULL,
  `ngo_email` varchar(255) NOT NULL,
  `ngo_number` bigint(20) NOT NULL,
  `ngo_message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ngoquery`
--

INSERT INTO `ngoquery` (`ngo_id`, `ngo_name`, `ngo_email`, `ngo_number`, `ngo_message`) VALUES
(1, 'Navneet', 'navneet.2224mca1013@kiet.edu', 327327, 'adjabasj');

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `o_id` int(255) NOT NULL,
  `o_name` varchar(255) NOT NULL,
  `o_email` varchar(255) NOT NULL,
  `o_gender` varchar(255) NOT NULL,
  `organisation` varchar(255) NOT NULL,
  `o_field` varchar(255) NOT NULL,
  `o_password` varchar(255) NOT NULL,
  `registration` varchar(255) NOT NULL,
  `o_number` bigint(20) NOT NULL,
  `o_address` longtext NOT NULL,
  `o_zila` varchar(255) NOT NULL,
  `o_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organisations`
--

INSERT INTO `organisations` (`o_id`, `o_name`, `o_email`, `o_gender`, `organisation`, `o_field`, `o_password`, `registration`, `o_number`, `o_address`, `o_zila`, `o_status`) VALUES
(1, 'Navneet', 'navneet.2224mca1013@kiet.edu', 'male', 'Navneet pvt ltd.', 'food', 'Navneet@1104', 'svqjquyq72518', 9759000083, 'Saharanpur', 'Saharanpur', 'verified');

-- --------------------------------------------------------

--
-- Table structure for table `query`
--

CREATE TABLE `query` (
  `q_id` int(255) NOT NULL,
  `q_name` varchar(255) NOT NULL,
  `q_email` varchar(255) NOT NULL,
  `q_number` bigint(255) NOT NULL,
  `q_message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`a_id`),
  ADD UNIQUE KEY `email` (`a_email`);

--
-- Indexes for table `clientlogin`
--
ALTER TABLE `clientlogin`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `email` (`c_email`);

--
-- Indexes for table `clothedonate`
--
ALTER TABLE `clothedonate`
  ADD UNIQUE KEY `id` (`cl_id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD UNIQUE KEY `id` (`d_id`);

--
-- Indexes for table `fooddonate`
--
ALTER TABLE `fooddonate`
  ADD UNIQUE KEY `id` (`f_id`);

--
-- Indexes for table `moneydonate`
--
ALTER TABLE `moneydonate`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `ngoquery`
--
ALTER TABLE `ngoquery`
  ADD UNIQUE KEY `id` (`ngo_id`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD UNIQUE KEY `id` (`o_id`);

--
-- Indexes for table `query`
--
ALTER TABLE `query`
  ADD PRIMARY KEY (`q_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clientlogin`
--
ALTER TABLE `clientlogin`
  MODIFY `c_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `clothedonate`
--
ALTER TABLE `clothedonate`
  MODIFY `cl_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `d_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `fooddonate`
--
ALTER TABLE `fooddonate`
  MODIFY `f_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `moneydonate`
--
ALTER TABLE `moneydonate`
  MODIFY `m_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `ngoquery`
--
ALTER TABLE `ngoquery`
  MODIFY `ngo_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `organisations`
--
ALTER TABLE `organisations`
  MODIFY `o_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `query`
--
ALTER TABLE `query`
  MODIFY `q_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
