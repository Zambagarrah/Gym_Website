import 'boxicons'
import './footer.css'

export function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="container">
                <div className="subscribe">
                    <h3 className="subscribe-title">Subscribe to our newsfeed</h3>
                    <p className="subscribe-description">
                        Join our gym today and take the first step towards a healthier, stronger you! Enjoy state-of-the-art equipment, a variety of fitness classes, and expert trainers dedicated to helping you reach your goals. Sign up now and receive 20% off your first three months! Don’t miss out on this opportunity to transform your fitness journey—visit us or contact us for more details!
                    </p>
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="email" className="visually-hidden">Email</label>
                        <input type="email" id="email" placeholder="example123@gmail.com" required />
                        <button type="submit" className='link-btn'>Subscribe</button>
                    </form>
                </div>
                <div className="foot d-flex">
                    <div className="foot-items socials align-items-center justify-content-center">
                        <div className="logo-footer">
                            <a href="/" className="logo-footer d-flex">
                                <i className='bx bx-dumbbell bx-tada'></i>
                                Ultra Fitness
                            </a>
                        </div>
                        <div className="social-icons d-flex">
                            {['facebook', 'twitter', 'instagram-alt', 'tiktok'].map((platform) => (
                                <a key={platform} href={`#${platform}`} className="icon link-btn align-items-center justify-content-center">
                                    <box-icon name={platform} type='logo' animation='tada' className='icon' size="lg" color='#ffffff'></box-icon>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="foot-items find-us-info">
                        <div className="align-items-center justify-content-center">
                            <div className="logo-footer d-flex align-items-center justify-content-center">
                                <i className="bx bx-location-plus"></i>
                                FIND US
                            </div>
                        </div>
                        <p className="contact-details">
                            <div className="location">
                                <i className="bx bx-check"></i>
                                Maina Njenga St.
                            </div>
                            <div className="building">
                                <i className="bx bx-check"></i>
                                Tamoh Plaza, 5th Floor.
                            </div>
                            <div className="town">
                                <i className="bx bx-check"></i>
                                Nakuru, Kenya
                            </div>
                        </p>
                    </div>
                </div>
                <div className="copyright ">
                    &#169; Zambagarrah.Z.O. All Rights Reserved
                </div>
            </div>
        </section>
    )
}