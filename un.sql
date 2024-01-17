-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2024 at 08:40 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `un`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2014_10_12_000000_create_tb_detail_transaksis_table', 2),
(6, '2014_10_12_000000_create_tb_members_table', 2),
(7, '2014_10_12_000000_create_tb_outlet_table', 3),
(8, '2014_10_12_000000_create_tb_pakets_table', 3),
(9, '2014_10_12_000000_create_tb_transaksi_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_detail_transaksis`
--

CREATE TABLE `tb_detail_transaksis` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_transaksi` varchar(255) NOT NULL,
  `id_paket` varchar(255) NOT NULL,
  `qty` double NOT NULL,
  `keterangan` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_members`
--

CREATE TABLE `tb_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_pengguna` varchar(255) NOT NULL,
  `alamat` text NOT NULL,
  `jenis_kelamin` enum('L','P') NOT NULL,
  `tlp` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_members`
--

INSERT INTO `tb_members` (`id`, `nama_pengguna`, `alamat`, `jenis_kelamin`, `tlp`, `created_at`, `updated_at`) VALUES
(1, 'Albert Futersinger', 'German', 'L', '0', '2023-11-13 00:30:52', '2023-11-13 00:30:52'),
(2, 'Alex Gunman', 'USA', 'L', '1', '2023-11-13 00:31:13', '2023-11-13 00:31:13'),
(3, 'Anna Redfield', 'USA', 'P', '000', '2023-11-13 01:04:19', '2023-11-13 01:04:19'),
(4, 'Albert Weskers', 'USA', 'L', '1', '2023-11-13 01:05:28', '2023-11-13 01:05:28'),
(5, 'Fajar', 'jl.singgalang', 'L', '08387173282', '2023-11-17 00:23:40', '2023-11-17 00:23:40'),
(6, 'Fajar', 'jl.singgalang', 'L', '08387173282', '2023-11-17 00:23:40', '2023-11-17 00:23:40'),
(7, 'Fajar', 'jl.singgalang', 'L', '08387173282', '2023-11-17 00:23:41', '2023-11-17 00:23:41'),
(8, 'Alex Gunman', 'USA', 'L', '1', '2023-11-24 00:26:23', '2023-11-24 00:26:23'),
(9, 'nameperson', 'nameperson', 'L', '21434234', '2023-11-24 00:26:32', '2023-11-24 00:26:32'),
(10, 'fajar', 'jkl.singgalang', 'L', '86789087652', '2023-11-24 00:43:12', '2023-11-24 00:43:12'),
(11, 'fajar', 'jkl.singgalang', 'L', '86789087652', '2023-11-24 00:43:13', '2023-11-24 00:43:13');

-- --------------------------------------------------------

--
-- Table structure for table `tb_outlets`
--

CREATE TABLE `tb_outlets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_outlet` varchar(255) NOT NULL,
  `alamat` text NOT NULL,
  `tlp` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_outlets`
--

INSERT INTO `tb_outlets` (`id`, `nama_outlet`, `alamat`, `tlp`, `created_at`, `updated_at`) VALUES
(1, 'asd', 'asd', '123123', '2023-11-17 04:47:15', '2023-11-17 04:47:15'),
(2, 'test', 'test', '21343', '2023-11-17 04:49:18', '2023-11-17 04:49:18'),
(3, 'Jacket', 'Jalan Permata sari', '21049934234', '2023-11-19 17:59:36', '2023-11-19 17:59:36'),
(4, 'sdfsdf', 'sdfsdfdf', '124234234', '2023-11-19 18:04:45', '2023-11-19 18:04:45'),
(5, 'sdfsdf', 'sdfsdfdf', '124234234', '2023-11-19 18:04:46', '2023-11-19 18:04:46'),
(6, 'sdfsdf', 'sdfsdfdf', '124234234', '2023-11-19 18:04:46', '2023-11-19 18:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `tb_pakets`
--

CREATE TABLE `tb_pakets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_outlet` varchar(255) NOT NULL,
  `jenis` enum('kiloan','selimut','bed_cover','kaos','lain') NOT NULL,
  `nama_paket` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `kode_invoice` varchar(255) NOT NULL,
  `id_member` int(11) NOT NULL,
  `tgl` datetime NOT NULL,
  `batas_waktu` datetime NOT NULL,
  `tgl_bayar` datetime NOT NULL,
  `biaya_tambahan` int(11) NOT NULL,
  `diskon` double NOT NULL,
  `pajak` int(11) NOT NULL,
  `status` enum('baru','proses','selesai','diambil') NOT NULL,
  `dibayar` enum('bayar','belum_dibayar') NOT NULL,
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `id_outlet` int(11) NOT NULL,
  `role` enum('admin','kasir','owner') NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `username`, `password`, `id_outlet`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Admin', '$2y$10$NwZN3iKqGT740Ad4..vUxeAMG6CCQtAkzGvdhKLAmRQ58JCwKjXXG', 1, 'admin', NULL, NULL, NULL),
(2, 'Kasir', 'Kasir', '$2y$10$dsMdThTS3Qp1pe1nREajLerV5wf/7bI7DGaF8RJMwoH.zmY0whgB6', 1, 'kasir', NULL, NULL, NULL),
(3, 'Owner', 'Owner', '$2y$10$jNKVIMlzVytnmXCJyGg49exLRehLjPcx4skYFN.UWrxmXsAtysoaG', 1, 'owner', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tb_detail_transaksis`
--
ALTER TABLE `tb_detail_transaksis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_members`
--
ALTER TABLE `tb_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_outlets`
--
ALTER TABLE `tb_outlets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_pakets`
--
ALTER TABLE `tb_pakets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `tb_detail_transaksis`
--
ALTER TABLE `tb_detail_transaksis`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_members`
--
ALTER TABLE `tb_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tb_outlets`
--
ALTER TABLE `tb_outlets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tb_pakets`
--
ALTER TABLE `tb_pakets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
