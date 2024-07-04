import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import axios from "axios";

const DetailDataStatistik = () => {

    const [data,setData] = useState([]);
    const [desa, setDesa] = useState("");
    const router = useRouter();
    const { id, status, kecamatan } = router.query;

    console.log(status);

    console.log(id);
    console.log(desa);
    console.log(kecamatan);

    useEffect(() => {
        if (id) {
          const fetchData = async () => {
            try {
              const response = await axios.get(`/api/statistik?id=${id}`);
              console.log(response.data);
              setData(response.data);
              setDesa(response.data[0].nama);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
        }
      }, [id]);
    
    console.log(data);
    

  return (
    <main>
      <Navbar />
      <div className="container-fluid xl:px-[80px] lg:px-[40px] md:px-[40px] px-[10px]">
        <div className="mt-[150px] mb-[250px]">
            <div className="flex justify-between">
                <div className="text-black font-semibold text-[20px]">{kecamatan}, {desa}</div>
                <div className={`w-[120px] h-[40px] flex text-center items-center justify-center font-semibold text-[16px] text-white ${status === 'Tidak aman' ? 'bg-red-default' : status === 'Aman' ? 'bg-green-default' : 'bg-gray-700 text-white'}`}>{status ? status : 'Belum Dinilai'} </div>
            </div>
            {data.map((items) => (
            <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] py-[15px] md:py-[25px] shadow-lg mt-[35px]">
                {items.pelaporanAwal.map((item, index) => (
                <div className="grid grid-cols-12">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                    <div className="w-[490px]">
                    <div className="text-black font-semibold text-[28px]">Karakteristik Wilayah</div>
                    <div className="mt-[10px] mb-[20px]">
                        <div className="mb-[10px] text-[16px] text-black">
                        Luas Wilayah <span className="ms-[90px] me-[10px]">:</span> {items.luas}
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Letak dan Batas Wilayah <span className="ms-[16px] me-[10px]">:</span> {items.letak_dan_batas}
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Jumlah Penduduk <span className="ms-[58px] me-[10px]">:</span> {items.jumlah_penduduk}
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Akses Komunikasi <span className="ms-[56px] me-[10px]">:</span> {items.akses_komunikasi}
                        </div>
                        <div className="text-[16px] text-black">
                        Akses Transportasi <span className="ms-[52px] me-[10px]">:</span> {items.akses_transportasi}
                        </div>
                    </div>
                    <div className="text-black font-semibold text-[28px]">Kelompok Rentan</div>
                        <div key={index}>
                            {item.upaya.map((it, idx) => (
                            <div key={idx} className="mt-[10px] mb-[20px]">
                                {it.kelompokRentan.map((i, ix) => (
                                <div key={ix}>
                                    <div className="mb-[10px] text-[16px] text-black">
                                    Bayi <span className="ms-[154px] me-[10px]">:</span> {i.bayi} orang
                                    </div>
                                    <div className="mb-[10px] text-[16px] text-black">
                                    Balita <span className="ms-[144px] me-[10px]">:</span> {i.balita} orang
                                    </div>
                                    <div className="mb-[10px] text-[16px] text-black">
                                    Ibu Hamil dan Menyusui <span className="ms-[10px] me-[10px]">:</span> {i.bumil} orang
                                    </div>
                                    <div className="mb-[10px] text-[16px] text-black">
                                    Buteki <span className="ms-[113px] me-[10px]">:</span> {i.buteki} orang
                                    </div>
                                    <div className="mb-[10px] text-[16px] text-black">
                                    Lansia <span className="ms-[138px] me-[10px]">:</span> {i.lansia} orang
                                    </div>
                                    <div className="text-[16px] text-black">
                                    Disabilitas <span className="ms-[110px] me-[10px]">:</span> {i.cacat} orang
                                    </div>
                                </div>
                                ))}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                    <div className="w-[490px]">
                    <div>
                        <div className="text-black font-semibold text-[28px] mb-[10px]">Jenis Bencana</div>
                        <div className="text-black text-[16px] mb-[20px]">{item.jenisBencana}</div>
                    </div>
                    <div className="text-black font-semibold text-[28px]">Jumlah Korban</div>
                    <div className="mt-[10px] mb-[20px]">
                        <div className="mb-[10px] text-[16px] text-black">
                        Korban Luka<span className="ms-[20px] me-[10px]">:</span> {item._count.korbanLuka} orang
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Meninggal <span className="ms-[32px] me-[10px]">:</span> {item._count.korbanMeninggal} orang
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Hilang <span className="ms-[62px] me-[10px]">:</span> {item._count.korbanHilang} orang
                        </div>
                        <div className="mb-[10px] text-[16px] text-black">
                        Pengungsi <span className="ms-[34px] me-[10px]">:</span> {item._count.korbanPengungsi} orang
                        </div>
                    </div>
                    {item.aksesDanKeadaan.map((it, AK) => (
                    <div key={AK}>
                        <div className="text-black font-semibold text-[28px] mb-[10px]">Fasilitas yang Rusak</div>
                        {it.bangunanSekolah !== "tidak_rusak" && (
                        <div className="text-black text-[16px] mb-[20px]">Bangunan Sekolah</div>
                        )}
                        {it.bangunanBalai !== "tidak_rusak" && (
                        <div className="text-black text-[16px] mb-[20px]">Balai Desa</div>
                        )}
                        {it.bangunanPustu !== "tidak_rusak" && (
                        <div className="text-black text-[16px] mb-[20px]">Puskesmas Pembantu</div>
                        )}
                        {it.fasilitasIbadah !== "tidak_rusak" && (
                        <div className="text-black text-[16px] mb-[20px]">Fasilitas Ibadah</div>
                        )}
                        {it.fasilitasUmum !== "tidak_rusak" && (
                        <div className="text-black text-[16px] mb-[20px]">Fasilitas Umum</div>
                        )}
                    </div>
                    ))}
                   {item.upaya.map((it, u) => (
                        <div key={u}>
                            <div>
                            <div className="text-black font-semibold text-[28px] mb-[10px]">Upaya yang telah dilakukan</div>
                            <div className="text-black text-[16px] mb-[20px]">{it.upayaPenanggulangan}</div>
                            </div>
                            <div>
                            <div className="text-black font-semibold text-[28px] mb-[10px]">Bantuan yang diperlukan</div>
                            <div className="text-black text-[16px] mb-[20px]">{it.bantuanYangDiperlukanSegera}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                ))}
            </div>
            ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default DetailDataStatistik