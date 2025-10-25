import express from "express"
import {getSiswa,getSiswaId,createSiswa,updateSiswa,deleteSiswa} from "../controllers/siswaController.js"

const router = express.Router()

router.get('/siswa',getSiswa)
router.get('/siswa/:id',getSiswaId)
router.post('/siswa',createSiswa)
router.delete('/siswa/:id',deleteSiswa)
router.put('/siswa/:id',updateSiswa)

export default router