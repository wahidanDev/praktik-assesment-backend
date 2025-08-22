CREATE DATABASE IF NOT EXISTS db_sekolah;
USE db_sekolah;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kode_siswa VARCHAR(50) NOT NULL UNIQUE,
  nama_siswa VARCHAR(255) NOT NULL,
  alamat_siswa TEXT,
  tgl_siswa DATE,
  jurusan_siswa VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO students (kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa)
VALUES
('S003', 'Andi Pratama', 'Jl. Kenanga 5', '2005-07-15', 'RPL'),
('S004', 'Dewi Lestari', 'Jl. Anggrek 8', '2006-03-10', 'TKJ'),
('S005', 'Rina Putri', 'Jl. Dahlia 3', '2005-11-01', 'RPL'),
('S006', 'Agus Saputra', 'Jl. Melati 14', '2006-01-22', 'TKJ'),
('S007', 'Lia Kurnia', 'Jl. Mawar 7', '2005-09-30', 'RPL'),
('S008', 'Bambang Sutrisno', 'Jl. Flamboyan 10', '2006-05-05', 'TKJ'),
('S009', 'Sari Dewi', 'Jl. Cemara 12', '2005-08-18', 'RPL'),
('S010', 'Rizky Hidayat', 'Jl. Teratai 9', '2006-04-11', 'TKJ'),
('S011', 'Nina Marlina', 'Jl. Bougenville 2', '2005-10-25', 'RPL'),
('S012', 'Fajar Nugroho', 'Jl. Cempaka 6', '2006-06-14', 'TKJ'),
('S013', 'Yulia Rahma', 'Jl. Kenanga 4', '2005-12-05', 'RPL'),
('S014', 'Hendra Wijaya', 'Jl. Melur 11', '2006-07-07', 'TKJ');

