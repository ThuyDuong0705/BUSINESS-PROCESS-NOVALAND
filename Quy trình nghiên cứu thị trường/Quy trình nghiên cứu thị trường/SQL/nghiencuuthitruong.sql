-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2021 at 04:51 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nghiencuuthitruong`
--

-- --------------------------------------------------------

--
-- Table structure for table `thitruong`
--

CREATE TABLE `thitruong` (
  `stt` int(11) NOT NULL,
  `research` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `job` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `goal` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `plan` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `note` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `idea` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `thitruong`
--

INSERT INTO `thitruong` (`stt`, `research`, `job`, `location`, `goal`, `plan`, `price`, `note`, `idea`) VALUES
(3, 'ABC', 'DCF', 'Đồng Nai', ' ABC', 'DEF', ' 432423423', ' Không', 'Đã duyệt'),
(7, 'ABC', 'CDF', 'Đồng Nai', ' OPI', 'DEF', ' 433333', ' Không', 'Đã duyệt'),
(8, 'ABC', 'CDF', 'Đồng Nai', ' RTY', 'DEF', ' 44333333', ' Không', 'Đã duyệt'),
(9, 'ABC', 'DCF', 'Đồng Nai', ' ABC', 'DEF', ' 53333', ' Không', 'Đã duyệt'),
(12, 'Tóm tắt: Quản lý dự án định hướng giá trị trong dự án đầu tư xây dựng là hướng nghiên cứu, cách tiếp cận mới trong khoa học quản lý dự án. Đây là cách tiếp cận chú trọng đến việc đảm bảo và nâng cao giá trị của dự án đầu tư xây dựng trong suốt các hoạt động và quyết định của dự án, do đó, giúp đem lại giá trị tối đa cho chủ đầu tư xây dựng công trình và các bên liên quan khi triển khai các dự án đầu tư xây dựng. Trong thực tế, như một số nghiên cứu về chủ đề này cho thấy, nhiều quốc gia trên thế giới đã bắt đầu áp dụng cách tiếp cận này. Một số nghiên cứu có liên quan đã được thực hiện về các chủ đề bao gồm: quản lý dự án đầu tư xây dựng và các nội dung của quản lý dự án đầu tư xây dựng; nâng cao hoặc cải tiến giá trị dự án đầu tư xây dựng và nhóm chủ đề về phương thức thực hiện dự án đầu tư xây dựng, chủ yếu là được thực hiện ở nước ngoài. Tại Việt Nam, mới chỉ rất ít các nghiên cứu rời rạc về các chủ đề tương tự, cũng thể hiện thực tế cách tiếp cận này chưa được chú ý xem xét và triể', 'Để xác định các chủ đề nghiên cứu chính liên quan đến vấn đề quản lý dự án định hướng giá trị đối với các dự án đầu tư xây dựng, các từ khóa “Quản lý dự án đầu tư xây dựng”/ “Quản lý dự án xây dựng, với các nội dung: Quản lý chi phí, quản lý tiến độ, quản lý chất lượng…”, “Giá trị dự án đầu tư xây dựng”. Và các từ khóa tiếng Anh liên quan đến “Construction project managenment”, “Construction project value” được sử dụng tìm kiếm.', 'Tp.HCM', ' Các nghiên cứu ngoài nước về quản lý dự án đầu tư xây dựng', 'Do chủ đề quản lý dự án đầu tư xây dựng là một chủ đề đã được quan tâm từ rất nhiều thập kỷ trước, vì thế, những nghiên cứu về các nội dung cơ bản hầu hết đã được tích hợp vào các tài liệu hướng dẫn chuyên môn, các sách giáo khoa về quản lý dự án đầu tư xây dựng. Các nghiên cứu được xuất bản gần đây thiên nhiều hơn về nghiên cứu chuyên sâu một số khía cạnh trong quản lý dự án xây dựng.', ' 30000000', ' Không', 'Không duyệt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `thitruong`
--
ALTER TABLE `thitruong`
  ADD PRIMARY KEY (`stt`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `thitruong`
--
ALTER TABLE `thitruong`
  MODIFY `stt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
