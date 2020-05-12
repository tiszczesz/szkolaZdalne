-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Maj 2020, 10:36
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cw2_1pg`
--
CREATE DATABASE IF NOT EXISTS `cw2_1pg` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `cw2_1pg`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kategorie`
--

CREATE TABLE `kategorie` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `opis` varchar(50) COLLATE utf8_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `kategorie`
--

INSERT INTO `kategorie` (`id`, `nazwa`, `opis`) VALUES
(1, 'warzywa', 'to da się zjeść'),
(2, 'pieczywo', 'całkiem chrupkie'),
(3, 'owoce', 'zwykle słodkie'),
(4, 'agd', 'pomocne w domowych pracach'),
(5, 'spożywcze', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `towary`
--

CREATE TABLE `towary` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `cena` decimal(10,2) NOT NULL,
  `opis` varchar(100) COLLATE utf8_polish_ci DEFAULT NULL,
  `kategoriaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `towary`
--

INSERT INTO `towary` (`id`, `nazwa`, `cena`, `opis`, `kategoriaId`) VALUES
(1, 'Buraki', '6.99', 'jeszcze inny opis', 1),
(2, 'Ziemniaki', '3.59', 'jeszcze inny opis', 1),
(3, 'Ogórki', '4.89', 'jeszcze inny opis', 1),
(4, 'Cebula', '5.99', 'jeszcze inny opis', 1),
(5, 'Ryż', '0.00', '45', 5),
(9, 'Koperek', '34.99', NULL, 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `towary`
--
ALTER TABLE `towary`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `towary`
--
ALTER TABLE `towary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
