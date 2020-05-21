-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Maj 2020, 12:55
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

DROP TABLE IF EXISTS `licznik`;
CREATE TABLE `licznik` (
  `number` int(11) NOT NULL,
  `LastDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `licznik`
--

INSERT INTO `licznik` (`number`, `LastDate`) VALUES
(49, '2020-05-21 10:18:49');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tab1`
--

DROP TABLE IF EXISTS `tab1`;
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
(2, 'Ziemniaki', '1.99', 'Ziemniaki myte'),
(3, 'Cebula', '5.99', 'Zwykła cebula'),
(4, 'Marchew', '2.99', 'Marchewka polska');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamówienia`
--

DROP TABLE IF EXISTS `zamówienia`;
CREATE TABLE `zamówienia` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `towarId` int(11) NOT NULL,
  `ilosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `tab1`
--
ALTER TABLE `tab1`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `zamówienia`
--
ALTER TABLE `zamówienia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `tab1`
--
ALTER TABLE `tab1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `zamówienia`
--
ALTER TABLE `zamówienia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
