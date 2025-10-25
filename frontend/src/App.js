import {BrowserRouter, Routes, Route} from "react-router-dom"
import DaftarSiswa from "./components/daftarSiswa.jsx"
import TambahSiswa from "./components/tambahSiswa.jsx"
import EditSiswa from "./components/editSiswa.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DaftarSiswa/>}/>
        <Route path="/tambah" element={<TambahSiswa/>}/>
        <Route path="/edit/:id" element={<EditSiswa/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
