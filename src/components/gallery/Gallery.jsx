import './gallery.css'
import { galleryPics } from '../../Data'

export function Gallery() {
    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <h3 className="gallery-title text-center">OUR GALLERY</h3>
                <div className="gallery-section d-grid text-center">
                    {galleryPics.map(({id, img, title}) => {
                        return (
                            <div className="gallery-item" key={id}>
                                <div className="img-wrapper">
                                    <img src={img} alt="" className="gallery-img" />
                                </div>
                                <a href="/" className="gallery-icon">
                                    <i className='bx bx-plus bx-tada'></i>
                                </a>
                                <h3 className="gallery-item-title">{title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}