import prisma from "../../../../lib/prisma";

export default async function pengkajianHandler(req, res) {
  if (req.method === "POST") {
    const {jenins_ancaman,riwayat,desa_id} = req.body

    if(!jenins_ancaman || !riwayat || !desa_id){
        return res.status(400).json({message:"data tidak lengkap",status:'error'})
    }
    try{
        const pengkajian = await prisma.pengkajian.create({
            data:{
                jenins_ancaman,
                riwayat,
                desa_id
            }
        })
        return res
        .status(200)
        .json({message:"Berhasil Menambahkan data Kebijakan Peraturan",status:'success'})
    }
    catch(error){
        return res.status(500).json({message:"server error",status:'error'})
    }
  }
}