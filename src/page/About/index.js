import React from "react";
import { aboutImg } from "../../assets";
import Gap from "../../component/Gap";

const About = () => {
  return (
    <div id="about" className="about-container">
      <header className="about-header">
        <h1>Tentang Filkom Day</h1>
        <p>Acara Tahunan Fakultas Ilmu Komputer Universitas Klabat</p>
      </header>
      <Gap height={100} />
      <section className="about-content">
        <div className="about-text">
          <p>
            Filkom Day merupakan kegiatan Fakultas yang diadakan setiap satu
            tahun sekali yang wajib diikuti oleh seluruh mahasiswa Filkom.
            Kegiatan ini bertujuan untuk mendorong mahasiswa agar semakin aktif
            dan berkembang dalam bidang akademik maupun non-akademik dalam
            kehidupan sehari-hari. Tidak hanya mahasiswa, namun kegiatan ini
            juga melibatkan para dosen Filkom sehingga dapat mempererat hubungan
            komunikasi mahasiswa dan para dosen Filkom
          </p>
          <p>
            Dengan semangat kebersamaan dan inovasi, Filkom Day menghadirkan
            kesempatan bagi semua peserta untuk belajar, berbagi pengetahuan,
            dan menunjukkan karya-karya terbaik mereka. Acara ini diadakan
            dengan tujuan mengembangkan minat dan bakat mahasiswa serta
            memberikan pengalaman yang bermanfaat bagi semua pihak yang
            terlibat.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Filkom Day" />
        </div>
      </section>
    </div>
  );
};

export default About;
