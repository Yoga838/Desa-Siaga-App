import prisma from "../../../../../lib/prisma";

export default async function pelaporanHandler(req, res) {
  if (req.method === "POST") {
      const {
        upayaPenanggulangan,
        pelayananKesehatan,
        pelayananKesehatanReproduksi,
        pengendalianPenyakit,
        DVI,
        pelayananGizi,
        logisticKesehatan,
        pelayananJiwa,
        HambatanPelayananKesehatan,
        bantuanYangDiperlukanSegera,
        rencanaTindakLanjut,
        statusDesa,
        pelaporan_id,
        bayi,
        bumil,
        balita,
        cacat,
        buteki,
        lansia,
      } = req.body;
      if(
        !upayaPenanggulangan||
        !pelayananKesehatan ||
        !pelayananKesehatanReproduksi ||
        !pengendalianPenyakit ||
        !DVI ||
        !pelayananGizi ||
        !logisticKesehatan ||
        !pelayananJiwa ||
        !HambatanPelayananKesehatan ||
        !bantuanYangDiperlukanSegera ||
        !rencanaTindakLanjut ||
        !statusDesa ||
        !pelaporan_id||
        !bayi||
        !bumil||
        !balita||
        !cacat||
        !buteki||
        !lansia
      ) {
        return res.status(400).json({ message: "Data tidak boleh Kosong!" });
      }

      try {
        const pelaporan = await prisma.upaya.create({
          data: {
            upayaPenanggulangan,
            pelayananKesehatan,
            pelayananKesehatanReproduksi,
            pengendalianPenyakit,
            DVI,
            pelayananGizi,
            logisticKesehatan,
            pelayananJiwa,
            HambatanPelayananKesehatan,
            bantuanYangDiperlukanSegera,
            rencanaTindakLanjut,
            statusDesa,
            pelaporan_id: parseInt(pelaporan_id),
          },
        });
        const kelompokRentan = await prisma.kelompokRentan.create({
          data: {
            bayi: parseInt(bayi),
            bumil: parseInt(bumil),
            balita: parseInt(balita),
            cacat: parseInt(cacat),
            buteki: parseInt(buteki),
            lansia: parseInt(lansia),
            upaya_id : parseInt(pelaporan.id),
          },
        })
        return res
          .status(200)
          .json({ message: "Berhasil menambahkan data upaya", status: "success" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Server error!", status: "failed" });
      }
  }
}