import './home.css'

export function Home() {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="content d-grid text-center text-md-left">
                        <div className="content-main">
                            <h3>PUSHING YOU TOWARDS YOUR FITNESS GOALS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae dignissimos, magnam eos, libero quasi doloribus odio nobis fugit itaque, deleniti aliquam unde minus sunt aperiam omnis ut voluptatem. Fuga.</p>
                            <a href="#contact" className="link-btn">Start Your Journey</a>
                            <div className="ratings text-center d-flex">
                                <div className="rating1 d-grid">
                                    <div className="social-media-icon">
                                        <i className='bx bxl-google'></i>
                                    </div>
                                    <div className="rating-content">
                                        <div className="top d-flex">
                                            <div className="no">5.0</div>
                                            <div className="stars">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="no text-left">200+ Satisfied Customers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-separator">|</div>
                                <div className="rating1 d-grid">
                                    <div className="social-media-icon">
                                        <i className='bx bxl-facebook-circle'></i>
                                    </div>
                                    <div className="rating-content">
                                        <div className="top d-flex">
                                            <div className="no">4.5</div>
                                            <div className="stars">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star-half'></i>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="no text-left">200+ Satisfied Customers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}