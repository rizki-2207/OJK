import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const fetcher = async () => {
  const response = await axios.get("http://localhost:5000/siswa", {
    headers: { Accept: "application/json" },
  });
  return response.data;
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thTdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const thStyle = {
  ...thTdStyle,
  backgroundColor: "#f2f2f2",
};

const buttonStyle = {
  marginLeft: "5px",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const editButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#4CAF50",
  color: "white",
};

const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#f44336",
  color: "white",
};

const linkStyle = {
  padding: "6px 12px",
  backgroundColor: "#2196F3",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
};

const DaftarSiswa = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR("http://localhost:5000/siswa", fetcher);

  const deleteSiswa = async (id) => {
    if (window.confirm("Apakah yakin ingin menghapus data ini?")) {
      await axios.delete(`http://localhost:5000/siswa/${id}`);
      mutate("http://localhost:5000/siswa");
    }
  };

  if (error) return <h1>Gagal memuat data</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Daftar Siswa</h1>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <Link to="/tambah" style={linkStyle}>
          Tambah data siswa
        </Link>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>No</th>
            <th style={thStyle}>Kode Siswa</th>
            <th style={thStyle}>Nama Siswa</th>
            <th style={thStyle}>Alamat</th>
            <th style={thStyle}>Tanggal Lahir</th>
            <th style={thStyle}>Jurusan</th>
            <th style={thStyle}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((siswa, idx) => (
            <tr key={siswa.id}>
              <td style={thTdStyle}>{idx + 1}</td>
              <td style={thTdStyle}>{siswa.kode}</td>
              <td style={thTdStyle}>{siswa.nama}</td>
              <td style={thTdStyle}>{siswa.alamat}</td>
              <td style={thTdStyle}>{siswa.tgl_lahir}</td>
              <td style={thTdStyle}>{siswa.jurusan}</td>
              <td style={thTdStyle}>
                <Link to={`/edit/${siswa.id}`} style={editButtonStyle}>
                  Edit
                </Link>
                <button
                  onClick={() => deleteSiswa(siswa.id)}
                  style={deleteButtonStyle}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DaftarSiswa;
