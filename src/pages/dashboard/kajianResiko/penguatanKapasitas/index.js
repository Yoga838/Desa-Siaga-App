import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import bgPenguatan from '../../../../../public/bg-2.jpg';
import Router from "next/router";

const PenguatanKapasitas = () => {
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const [d,setD] = useState()
    const [e,setE] = useState()
    const [f,setF] = useState()
    const [g,setG] = useState()
    const [h,setH] = useState()

    const handleBack = () => {
      Router.back();
    };
    const nextKuisioner = () => {
        Router.push('/dashboard/kajianResiko/peringatanDini');
      };

    return (
        <section className="container-fluid h-full relative">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={bgPenguatan}
                    alt="bg-image"
                    className="h-full"
                />
            </div>
            <div className="flex flex-col justify-center items-center xl:mx-[151px] lg:mx-[121px] md:mx-[80px] mx-[20px]">
                <div className="text-black font-bold xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] text-center mt-[60px]">Kuisioner Kajian Resiko Bencana/Krisis Kesehatan</div>
                <div className="w-full bg-white xl:px-[50px] lg:px-[35px] md:px-[25px] px-[15px] xl:py-[50px] lg:py-[35px] md:py-[25px] py-[15px] shadow-lg mt-[35px]">
                    <div className="text-black font-semibold text-[16px]">Penguatan Kapasitas</div>
                    <div className="my-[20px] w-full h-[50px] rounded bg-input-default border border-primary-default" />
                    
                    {/* Pertanyaan Start */}
                    
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-0 lg:me-0 md:me-[20px] me-0">
                            <div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">a. Adakah gedung pustu di desa</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="gedung_pustu" onChange={(e)=> setA(e.target.value)} />
                                        <label className="text-black font-semibold text-[16px]">Ada</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="gedung_pustu" onChange={(e)=> setA(e.target.value)} />
                                        <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">b. Adakah mobil ambulan/mobil pelayanan kesehatan desa</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="kendaraan_kesehatan" onChange={(e)=> setB(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Ada</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="kendaraan_kesehatan" onChange={(e)=> setB(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">c. Adakah tenaga kesehatan penduduk asli desa?</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="tenaga_kesehatan" onChange={(e)=> setC(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Ada</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="tenaga_kesehatan" onChange={(e)=> setC(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">d. Adakah tim/organisasi tanggap bencana desa?</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="tim_bencana" onChange={(e)=> setD(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="tim_bencana" onChange={(e)=> setD(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">e. Adakah tim reaksi cepat bencana yang dimiliki desa?</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="tim_reaksi" onChange={(e)=> setE(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="tim_reaksi" onChange={(e)=> setE(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">f. SOP mobilisasi tim/organisasi tanggap bencana desa</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="sop_bencana" onChange={(e)=> setF(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Ada</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="sop_bencana" onChange={(e)=> setF(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">g. Memiliki petugas terlatih dalam tanggap darurat bencana</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="petugas_terlatih" onChange={(e)=> setG(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Memiliki</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="petugas_terlatih" onChange={(e)=> setG(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Memiliki</label>
                                    </div>
                                </div>
                                <div className="mb-[16px]">
                                    <div className="text-black font-semibold text-[16px] my-[10px]">h. Perencanaan peningkatan kapasitas SDM terkait tim tanggap darurat bencana</div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="ada" value='ada' name="kapasitas_sdm" onChange={(e)=> setH(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Ada</label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input type="radio" id="tidak" value='tidak' name="kapasitas_sdm" onChange={(e)=> setH(e.target.value)}/>
                                        <label className="text-black font-semibold text-[16px]">Tidak Ada</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pertanyaan End */}

                </div>

                <div className="my-5 w-full">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:me-[14px] lg:me-[14px] md:me-[14px] me-0">
                            <button
                                type=""
                                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                                onClick={handleBack}
                            >
                                Kembali 
                            </button>   
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 xl:ms-[14px] lg:ms-[14px] md:ms-[14px] ms-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4">
                            <button
                                type=""
                                onClick={nextKuisioner}
                                className="bg-secondary-default w-full py-2 hover:bg-secondary-dark transition-all duration-150 rounded-md"
                            >
                                Lanjut Kuisioner Berikutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PenguatanKapasitas
