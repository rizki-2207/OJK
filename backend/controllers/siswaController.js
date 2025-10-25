import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const getSiswa=async(req,res)=>{
    try {
        const response = await prisma.datasiswa.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

export const getSiswaId=async(req,res)=>{
    try {
        const response = await prisma.datasiswa.findUnique({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

export const createSiswa=async(req,res)=>{
    const {kode,nama,alamat,tgl_lahir,jurusan}=req.body
    try {
        console.log("Data diterima:", req.body);
        const response = await prisma.datasiswa.create({
            data:{
                kode:kode,
                nama:nama,
                alamat:alamat,
                tgl_lahir:tgl_lahir,
                jurusan:jurusan
            }
        })
        res.status(201).json(response)
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(400).json({message:error.message})
    }
}

export const updateSiswa=async(req,res)=>{
    
    const {kode,nama,alamat,tgl_lahir,jurusan}=req.body
    try {
        console.log("Data diterima:", req.body);
        const response = await prisma.datasiswa.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                kode:kode,
                nama:nama,
                alamat:alamat,
                tgl_lahir:tgl_lahir,
                jurusan:jurusan
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(400).json({message:error.message})
    }
}

export const deleteSiswa=async(req,res)=>{
    try {
        const response = await prisma.datasiswa.delete({
            where:{
                id:Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}