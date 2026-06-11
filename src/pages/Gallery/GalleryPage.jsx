import galleryData from '../../data/galleryData';
// import Gallery from '../../components/Gallery/Gallery';
import './GalleryPage.css';

function GalleryPage() {
  return (

  
    <main className="gallery-page">

      {/* HERO IMAGE */}
      <section className="gallery-new">
        <img
          src="https://plca-p-001.sitecorecontenthub.cloud/api/public/content/fc15b34116194d608c4f78b888535473?v=911314f5"
          alt="Gallery-new"
        />
      </section>

      {/* PROJECT 1 */}
      <section className="gallery-content">
        <h2>Vidhyalay</h2>

          <div className="img-grid four">
          <img src="/images/gallery/vidhyalay1.jpg" />
          <img src="/images/gallery/vidhyalay2.jpg" />
          <img src="/images/gallery/vidhyalay3.jpg" />
          <img src="/images/gallery/vidhyalay4.jpg" />
        </div>
      </section>

      {/* PROJECT 2 */}
      <section className="gallery-content">
        <h2>Nari Tarang</h2>

          <div className="img-grid three">
            <img src="/images/gallery/nari1.jpg" />
            <img src="/images/gallery/nari2.jpg" />
            <img src="/images/gallery/nari3.jpg" />
          </div>
      </section>

      {/* PROJECT 3 */}
      <section className="gallery-content">
        <h2>Zero Hunger Drive</h2>

        <div className="img-grid four">
          <img src="/images/gallery/hunger1.jpg" />
          <img src="/images/gallery/hunger2.jpg" />
          <img src="/images/gallery/hunger3.jpg" />
          <img src="/images/gallery/hunger4.jpg" />
        </div>
      </section>

      {/* PROJECT 4 */}
      <section className="gallery-content">
        <h2>Jal Project</h2>

        <div className="img-grid three">
          <img src="/images/gallery/jal1.jpg" />
          <img src="/images/gallery/jal2.jpg" />
          <img src="/images/gallery/jal3.jpg" />
        </div>
      </section>


       <section className="gallery-content">
        <h2>Sahara</h2>

          <div className="img-grid four">
          <img src="/images/gallery/sahara1.jpg" />
          <img src="/images/gallery/sahara2.jpg" />
          <img src="/images/gallery/sahara3.jpg" />
          <img src="/images/gallery/sahara4.jpg" />
        </div>
      </section>



      {/* PROJECT 5 */}
      <section className="gallery-content">
        <h2>Medical (Life-Line)</h2>

        <div className="img-grid three">
          <img src="/images/gallery/medical1.jpg" />
          <img src="/images/gallery/medical2.jpg" />
          <img src="/images/gallery/medical3.jpg" />
        </div>
      </section>

    </main>
 



  );
}
 


export default GalleryPage;
