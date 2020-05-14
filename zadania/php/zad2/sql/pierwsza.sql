-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Maj 2020, 12:58
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pierwsza`
--
CREATE DATABASE IF NOT EXISTS `pierwsza` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `pierwsza`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `licznik`
--

CREATE TABLE `licznik` (
  `number` int(11) NOT NULL,
  `LastDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `licznik`
--

INSERT INTO `licznik` (`number`, `LastDate`) VALUES
(20, '2020-05-14 10:55:21');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tab1`
--

CREATE TABLE `tab1` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `opis` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `tab1`
--

INSERT INTO `tab1` (`id`, `nazwa`, `cena`, `opis`) VALUES
(1, 'Buraki123', '34.89', 'Buraki czerwone'),
(2, 'Ziemniaki', '12.78', 'Ziemniaki myte'),
(3, 'Cebula', '5.99', 'Zwykła cebula'),
(4, 'Marchew', '2.99', 'Marchewka polska'),
(9, 'www4wwww', '45.90', 'wwww');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `tab1`
--
ALTER TABLE `tab1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `tab1`
--
ALTER TABLE `tab1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
