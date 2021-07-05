-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 05, 2021 at 05:07 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `nxt_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tarea`
--

CREATE TABLE `tarea` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `descripcion` varchar(350) NOT NULL,
  `fecha` date NOT NULL,
  `estatus` tinyint(1) NOT NULL,
  `amanecer` date NOT NULL,
  `anochecer` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tarea`
--

INSERT INTO `tarea` (`id`, `id_usuario`, `descripcion`, `fecha`, `estatus`, `amanecer`, `anochecer`) VALUES
(1, 1, 'una tarea', '2021-07-01', 1, '2021-07-01', '2021-07-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tarea`
--
ALTER TABLE `tarea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;