import aboutImg from '../../assets/backgrounds/prog4selfdefence.jpg'
import './about.css'

export function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 about_image-wrapper d-flex justify-content-center align-items-center">
                        <img src={aboutImg} alt="Self Defense" className="about_img mb-3 img-fluid mb-md-0" />
                    </div>
                    <div className="col-md-6 content">
                        <h3>Ready to Make New</h3>
                        <span>CHANGES?</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magnam id hic, adipisci, libero at voluptate cupiditate assumenda voluptatem iure quae harum sit quod sapiente inventore fuga pariatur delectus atque? Alias eos distinctio dicta magnam soluta porro nisi quos in nulla corrupti, ex veritatis natus, ipsum velit. Nulla repellendus omnis ipsa aliquam.</p>
                        <a href="#contact" className="link-btn">Join Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

