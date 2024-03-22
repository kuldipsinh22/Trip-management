-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 07:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

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
(1, 'khushi', 1, 'khush@gmail.com', '1234567890', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, '', '123'),
(3, 'test', 1, 'test@test.com', '1111111111', 1, '2023-10-04 07:50:17', NULL, 0, '', '111');

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
  `role` int(4) NOT NULL COMMENT 'add role 1.admin 2.company',
  `entry_date` datetime NOT NULL COMMENT 'add insert record date',
  `update_date` datetime NOT NULL COMMENT 'add update record date',
  `entry_by` bigint(20) NOT NULL COMMENT 'store role id',
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tour_packages`
--

INSERT INTO `tour_packages` (`package_id`, `from_place`, `to_place`, `from_date`, `to_date`, `status`, `total_days`, `package_price`, `information`, `company_id`, `role`, `entry_date`, `update_date`, `entry_by`, `img`) VALUES
(8, 'kedarnath', 'bhavnagar', '2023-09-12', '2023-09-20', 1, '8', '20000', 'Legend has it that the original Pandavas built the temple of Kedarnath and the present temple was established by Adi Shankaracharya, who restored the glory of the shrine in the 8th century.\n                   The temple is said to be more than 1,200 years old and one among the 12 jyotilingas in india.The best time to visit Kedarnath is the summer season,from April to June.\n                   You can also plan Kedarnath Yatra during the pre-winter months,September-October.This sacred Dham or temple remains closed from November-March(Winter)due to extreme cold and heavy snowfal.', 2, 2, '2023-09-12 00:00:00', '2023-09-13 00:00:00', 0, ''),
(10, 'Saputara', 'bhavnagar', '2023-09-27', '2023-09-29', 1, '3', '3000', 'Saputara hill station is situted in the district of Dang.After the very first rain of the season,the whole area come out full of greenery, frequent waterfalls and gushing streams.The city has been developed as a Hill station by the government and is a favourite place of tourists all the way coming from Gujarat ,Nashik and Bombay.Many museums are here showing the culture of the Dang.', 2, 0, '2023-09-27 18:30:00', '0000-00-00 00:00:00', 0, ''),
(11, 'Kutch', 'bhavnagar', '2023-10-01', '2023-10-04', 1, '4', '7000', 'One of the Most Famous Tourist Attraction of Gujrat.\n                   White Rann of kutch is one of the most tourist attraction of Gujrat.\n                   Kala Dungar is also a magnificent place to view the desert significantly.\n                   The Mandvi Beach is a stretch of golden brown sand located at the southernmost point of Gujrat\'s Kutch district.\n                   Aaina Mahal,Vijay Villas Palace,Shree Swaminarayan Temple Bhuj,Parag Mahal,Narayan Sarovar,Bhujio Hill,Anjar most tourist attraction of Kutch.', 1, 0, '2023-10-01 00:00:00', '0000-00-00 00:00:00', 1, ''),
(12, 'Jaisalmer', 'bhavnagar', '2023-10-03', '2023-10-07', 1, '5', '8000', 'The city\'s most promminent landmark is the Jaisalmer Fort, also called Golden Fort.\n                   india and is one of the largest city of Rajasthan,which also comprises of pakistan border on the west.\n                   the town is the world heritage site and is mainly built of yellowish sandstone.\n                   i think the best place to enjoy your winter vacation is Jaisalmer,\n                   Jaisalmer Fort,Gadisar Lake,Bada Bagh,Nathmal ki Haveli,Jaisalmer War Museum,Desert National Park Most tourist attraction of Jaisalmer.', 3, 0, '2023-10-03 00:00:00', '0000-00-00 00:00:00', 1, ''),
(13, 'Haridwar', 'bhavnagar', '2023-10-03', '2023-10-10', 1, '8', '12000', 'In Haridwar,the most prominent Ganga Aarti takes place at Har-Ki-Pauri which is considered the \"feet of god.\"\n                   Har ki pauri is a famous ghat on the banks of the Ganges in Haridwar in Uttarakhand State in india.\n                   \"Har\" means \"Loard Shiva\" who is the god according to shaivite school of Hindu theology,\"Ki\" means \"of\" and \"pauri\" means \"steps\".\n                   Haridwar\'s long standing position as a great source for ayurvedic medicines and herbal.\n                   the best time to visit Haridwar is between November and March as the weather is cool and pleasant when you are out exploring the place.', 4, 0, '2023-10-03 00:00:00', '0000-00-00 00:00:00', 2, ''),
(14, 'Karnataka', 'bhavnagar', '2023-10-12', '2023-10-19', 1, '7', '12000', 'Karnataka is primarily known for its destinations and its Wildlife/National Parks.\n                   Ensure to cover most important places to visit in Karnataka like Mysore,Coorg,Chikmagalur,Hampi,Murudeshwar,\n                   Udupi,Gokarna,Badami,Bidar,Bheemeshwari,Dandeli,\n                   Kanakpura,Madikeri,etc most visit Karnataka.\n                   Coorg one of the most beautiful places in Karnataka.Coorg is known as the \'Scotland of india\'.\n                   where you can see coffee plantations as far as your eyes go.October through April is the best time to visit \n                   Karnataka and South india.Winters are maild,summer are hot and humaid,and monsoon arrives early in Karnataka.', 5, 0, '2023-10-03 00:00:00', '0000-00-00 00:00:00', 0, ''),
(15, 'Shimla Manali', 'bhavnagar', '2023-10-20', '2023-10-27', 1, '7', '15000', 'Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.\n                   Manali is a popular tourist destination in india.March to June summer season in Manali is the best time to visit.\n                   Manali especially with friends and family is the best place to visit.Manali is also famous for adventure sports like skiing,\n                   mountaineering,paragliding,rafting,trekking etc.in brief,Manali-the veritable \"valley of the gods\".Tourist Places to visit in shimla the Ridge of Shimla,\n                   Kurfi,Green Valley,Jakhoo Hill,Chail,Kiala Forest,Christ Church,Kali Bari Temple,Chadwick waterfall and many more amazing attractions.', 10, 0, '2023-10-03 00:00:00', '0000-00-00 00:00:00', 0, '');

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
(3, 'khushi', 'kuldipsinh0031@gmail.com', '1234567945', '2023-09-11', 'India', '000000000', '', 1, '2023-09-12 13:00:00', '2023-09-12 13:00:00', 1);

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
  MODIFY `package_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'add primary key', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
