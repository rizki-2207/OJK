import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSiswa = () => {
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tgl_lahir, setTgl_lahir] = useState("");
  const [jurusan, setJurusan] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSiswaById = async () => {
      const response = await axios.get(`http://localhost:5000/siswa/${id}`);
      setKode(response.data.kode);
      setNama(response.data.nama);
      setAlamat(response.data.alamat);
      setTgl_lahir(response.data.tgl_lahir);
      setJurusan(response.data.jurusan);
    };
    getSiswaById();
  }, [id]);

  const updateSiswa = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/siswa/${id}`, {
      kode: Number(kode),
      nama: nama,
      alamat: alamat,
      tgl_lahir: tgl_lahir,
      jurusan: jurusan,
    });
    navigate("/");
  };

  // Styles
  const formContainerStyle = {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const formGroupStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={updateSiswa}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Kode Siswa</label>
          <input
            type="text"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Nama Siswa</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Alamat Siswa</label>
          <input
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Tanggal Lahir Siswa</label>
          <input
            type="date"
            value={tgl_lahir}
            onChange={(e) => setTgl_lahir(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Jurusan</label>
          <input
            type="text"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <button type="submit" style={buttonStyle}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSiswa;
