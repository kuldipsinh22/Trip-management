-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2024 at 07:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trip_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `about_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `description` text NOT NULL COMMENT 'add about message',
  `status` int(4) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store admin id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`about_id`, `description`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(3, 'Cheers Holidays Tour Company,Founded in 2023.Welcome To Cheers Holidays. Cheers Holidays a Tourisam management company with a difference! What makes us different?What makes us special? we offer customized holidays and packages, the way you want! right from the duration of stay to the  transportation.it is all specially designed to suit your needs & fulfilyour desires. we are provide best Tour Packages.we make a commitment of superior and back it up with an in-house team that ensure your trip is smooth & well planned from arrival to departure and monitor your tour round the clock to make it comfortable & enjoyable. our aim is to produce such product which not only liked by people but is lived by the people, i.e.we want you to live every moment when you are on your holidays. we want to make you feel as you are on the top of the world having attained all the happiness of life. our motive is to give you maximum enjoyment from your investment and giving you optimum exposure of the places for destination you have selected, so that we make your holidays memorable. to know more,you can connect with us via any of the following mediums. wish you a safe and happy journey!', 1, '2023-09-16 02:02:37', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `admin_name` varchar(150) NOT NULL COMMENT 'add name',
  `role` int(4) NOT NULL DEFAULT 1 COMMENT 'add role',
  `admin_email` varchar(100) NOT NULL COMMENT 'add email',
  `contact1` varchar(15) NOT NULL COMMENT 'add contact',
  `status` int(5) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date and time',
  `update_date` datetime DEFAULT NULL COMMENT 'update record date and time',
  `entry_by` bigint(20) NOT NULL COMMENT 'store admin id',
  `image` varchar(255) NOT NULL COMMENT 'add image',
  `password` varchar(30) NOT NULL COMMENT 'Add Password'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `role`, `admin_email`, `contact1`, `status`, `entry_date`, `update_date`, `entry_by`, `image`, `password`) VALUES
(1, 'khushi', 1, 'khush@gmail.com', '1111111111', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, '', '123');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `company_name` varchar(200) NOT NULL COMMENT 'Add company name',
  `owner_name` varchar(200) NOT NULL COMMENT 'add company owner name',
  `role` int(4) NOT NULL DEFAULT 2 COMMENT 'add role',
  `company_email1` varchar(100) NOT NULL COMMENT 'add email',
  `company_email2` varchar(100) DEFAULT NULL COMMENT 'add email',
  `contact1` varchar(15) NOT NULL COMMENT 'add contact no',
  `contact2` varchar(15) DEFAULT NULL COMMENT 'add contact no',
  `password` varchar(30) NOT NULL COMMENT 'Add Passwor',
  `image` varchar(255) DEFAULT NULL COMMENT 'add image',
  `status` int(5) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'update record date ',
  `entry_by` bigint(20) NOT NULL COMMENT 'store company id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `owner_name`, `role`, `company_email1`, `company_email2`, `contact1`, `contact2`, `password`, `image`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(1, 'KK INDUSTRY', 'KK', 2, 'abc@gmail.com', 'khyati@gmail.com', '2222222222', '0987654321', '123', '1234', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `contact_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `email1` varchar(100) NOT NULL COMMENT 'add email',
  `email2` varchar(100) DEFAULT NULL COMMENT 'add email',
  `phone_no1` varchar(15) NOT NULL COMMENT 'add phone no',
  `phone_no2` varchar(15) DEFAULT NULL COMMENT 'add phone no',
  `address` varchar(255) NOT NULL,
  `status` int(5) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store admin id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`contact_id`, `email1`, `email2`, `phone_no1`, `phone_no2`, `address`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(5, 'abc@gmail.com', 'khushi@gmail.com', '1234567890', '9078563421', '2531,Shree Complex,Opp Blood Bank Bhavnagar,Sardarnagar,Bhavnagar,Gujrat 364001', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(6, 'khushipatel@gmail.com', 'khushipatel@gmail.com', '6353220031', '9898989898', '311,University Plaza,Above Chocolate Room,vijay Cross Roads navrangpura,Ahemdabad,Gujrat 380009', 1, '2023-10-03 07:09:28', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedback_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `rating` int(10) DEFAULT NULL COMMENT 'add rating',
  `comment` text DEFAULT NULL COMMENT 'add comment',
  `status` int(5) NOT NULL COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store user id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedback_id`, `rating`, `comment`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(3, 3, 'maja aavi gai', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `highlights`
--

CREATE TABLE `highlights` (
  `highlight_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `place_name` varchar(50) NOT NULL COMMENT 'add place',
  `description` text NOT NULL COMMENT 'add description',
  `status` int(5) NOT NULL COMMENT '1.active and 2.inactive ',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime NOT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store admin id',
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `highlights`
--

INSERT INTO `highlights` (`highlight_id`, `place_name`, `description`, `status`, `entry_date`, `update_date`, `entry_by`, `img`) VALUES
(9, 'Kedarnath Tempal', 'Jay Bhole', 0, '2023-10-06 00:00:00', '2023-10-13 00:00:00', 1, 'Kedarnath_Temple.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `inquiries_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `question` varchar(100) NOT NULL COMMENT 'add question',
  `status` int(5) NOT NULL COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store admin id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inquiries`
--

INSERT INTO `inquiries` (`inquiries_id`, `question`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(1, 'How to ride car?', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `manage_bookings`
--

CREATE TABLE `manage_bookings` (
  `booking_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `user_id` bigint(20) NOT NULL COMMENT 'fk:user',
  `package_id` bigint(20) NOT NULL COMMENT 'fk:package',
  `company_id` bigint(20) NOT NULL COMMENT 'fk:company',
  `total_person` int(10) NOT NULL COMMENT 'add total person',
  `price` bigint(20) NOT NULL COMMENT 'fk:packages',
  `adv_payment` int(10) NOT NULL COMMENT 'add payment',
  `status` int(5) NOT NULL COMMENT '1.active and 2.inactive',
  `entary_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store user id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manage_bookings`
--

INSERT INTO `manage_bookings` (`booking_id`, `user_id`, `package_id`, `company_id`, `total_person`, `price`, `adv_payment`, `status`, `entary_date`, `update_date`, `entry_by`) VALUES
(3, 1, 1, 1, 5, 350000, 35000, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tour_packages`
--

CREATE TABLE `tour_packages` (
  `package_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `from_place` varchar(100) NOT NULL COMMENT 'add from place',
  `to_place` varchar(100) NOT NULL COMMENT 'add to place',
  `from_date` date NOT NULL COMMENT 'add from date',
  `to_date` date NOT NULL COMMENT 'add to date',
  `status` int(5) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `total_days` varchar(10) NOT NULL COMMENT 'add total days',
  `package_price` varchar(10) NOT NULL COMMENT 'add packages price',
  `information` text NOT NULL COMMENT 'add information',
  `company_id` bigint(100) NOT NULL COMMENT 'store company id',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime NOT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store role id',
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tour_packages`
--

INSERT INTO `tour_packages` (`package_id`, `from_place`, `to_place`, `from_date`, `to_date`, `status`, `total_days`, `package_price`, `information`, `company_id`, `entry_date`, `update_date`, `entry_by`, `img`) VALUES
(20, 'Bhavnagar', 'Somnath', '2024-04-17', '2024-04-19', 1, '2', '800', 'Somnath Har Har MAHADEVVVV Harrrrrr', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 'somnath.jpg1713122235695'),
(22, 'Bhavnagar', 'Gova', '2024-04-15', '2024-04-18', 1, '4', '5000', 'Govaaaa Daruuuu..............', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 'gova.jpg1713124952603');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL COMMENT 'add primary key',
  `user_name` varchar(150) NOT NULL COMMENT 'add name',
  `user_email` varchar(100) NOT NULL COMMENT 'add email',
  `user_contact` varchar(15) NOT NULL COMMENT 'add contact number',
  `user_dob` date NOT NULL COMMENT 'add date of birth',
  `user_country` varchar(10) NOT NULL COMMENT 'add country',
  `user_password` varchar(20) NOT NULL COMMENT 'add password',
  `image` varchar(255) NOT NULL COMMENT 'add image',
  `status` int(5) NOT NULL DEFAULT 1 COMMENT '1.active and 2.inactive',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime DEFAULT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store user id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_contact`, `user_dob`, `user_country`, `user_password`, `image`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES
(3, 'khushi', 'kuldipsinh0031@gmail.com', '1112223334', '2023-09-11', 'India', '123', '', 1, '2023-09-12 13:00:00', '2023-09-12 13:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`about_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `highlights`
--
ALTER TABLE `highlights`
  ADD PRIMARY KEY (`highlight_id`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`inquiries_id`);

--
-- Indexes for table `manage_bookings`
--
ALTER TABLE `manage_bookings`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tour_packages`
--
ALTER TABLE `tour_packages`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `about_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contact_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedback_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `highlights`
--
ALTER TABLE `highlights`
  MODIFY `highlight_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `inquiries_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `manage_bookings`
--
ALTER TABLE `manage_bookings`
  MODIFY `booking_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tour_packages`
--
ALTER TABLE `tour_packages`
  MODIFY `package_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
