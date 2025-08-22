const studentRepo = require("../repositories/studentRepository");

const getAllStudents = async (req, res) => {
  try {
    const students = await studentRepo.getAllStudents();
    res.json(students);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentRepo.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ error: "Siswa tidak ditemukan" });
    res.json(student);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = await studentRepo.createStudent(req.body);
    res.status(201).json(newStudent);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentRepo.updateStudent(req.params.id, req.body);
    res.json(updatedStudent);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deleted = await studentRepo.deleteStudent(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Siswa tidak ditemukan" });
    res.json({ message: "Siswa berhasil di delete" });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
