
class Student {
  constructor({ id, kode_siswa, nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa }) {
    this.id = id;
    this.kode_siswa = kode_siswa;
    this.nama_siswa = nama_siswa;
    this.alamat_siswa = alamat_siswa;
    this.tgl_siswa = tgl_siswa;
    this.jurusan_siswa = jurusan_siswa;
  }
}

module.exports = Student;
