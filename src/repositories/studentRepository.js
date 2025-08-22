const db = require("../db/database");

const getAllStudents = async () => {
  const [rows] = await db.query("SELECT * FROM students ORDER BY id");
  return rows;
};

const getStudentById = async (id) => {
  const [rows] = await db.query("SELECT * FROM students WHERE id = ?", [id]);
  return rows[0];
};

const createStudent = async (data) => {
  const { kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = data;
  const [result] = await db.query(
    `INSERT INTO students (kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa)
     VALUES (?, ?, ?, ?, ?)`,
    [kode_siswa, nama_siswa, alamat_siswa || null, tgl_siswa || null, jurusan_siswa || null]
  );
  return getStudentById(result.insertId);
};

const updateStudent = async (id, data) => {
  const { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = data;
  await db.query(
    `UPDATE students SET nama_siswa = ?, alamat_siswa = ?, tgl_siswa = ?, jurusan_siswa = ? WHERE id = ?`,
    [nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa, id]
  );
  return getStudentById(id);
};

const deleteStudent = async (id) => {
  const [result] = await db.query("DELETE FROM students WHERE id = ?", [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
