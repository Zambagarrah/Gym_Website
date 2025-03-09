import './contact.css'

export function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact-container container d-flex ">
                    <div className="contact-content">
                        <h3 className="contact-title">Talk to Us</h3>
                        <div className="contact-info">
                            <div className="contact-card">
                                <i className="bx bx-mail-send contact-card-icon"></i>
                                <h3 className="contact-card-title">Email</h3>
                                <span className="contact-card-data">ultrafitness@gmail.com</span>
                                <a href="mailto:ultrafitness@gmail.com" className="contact-button link-btn">
                                    Write Me{' '}
                                    <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                                </a>
                            </div>
                            <div className="contact-card">
                                <i className="bx bxl-whatsapp contact-card-icon"></i>
                                <h3 className="contact-card-title">WhatsApp</h3>
                                <span className="contact-card-data">+254-705-959-9986</span>
                                <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more Information!" className="contact-button link-btn">
                                    Write Me{' '}
                                    <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                                </a>
                            </div>
                            <div className="contact-card">
                                <i className="bx bxl-messenger contact-card-icon"></i>
                                <h3 className="contact-card-title">Messenger</h3>
                                <span className="contact-card-data">user.fb123</span>
                                <a href="https://m.me/crypticalcoder" className="contact-button link-btn">
                                    Write Me{' '}
                                    <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-content">
                        <h3 className="contact-title">Give Us Your Feedback</h3>
                        <form className="contact-form">
                            <div className="contact-form-div">
                                <label className="contact-form-tag">Name</label>
                                <input 
                                    type="text"
                                    name='name' 
                                    className="contact-form-input"
                                    placeholder="Insert Your Name"
                                />
                            </div>
                            <div className="contact-form-div">
                                <label className="contact-form-tag">Mail</label>
                                <input 
                                    type="email"
                                    name='email' 
                                    className="contact-form-input"
                                    placeholder="example123@gmail.com"
                                />
                            </div>
                            <div className="contact-form-div contact-form-area">
                                <label className="contact-form-tag">Feedback</label>
                                <textarea 
                                    name='feedback' 
                                    cols='30'
                                    rows='10'
                                    className="contact-form-input"
                                    placeholder="Express Your Feedback"
                                ></textarea>
                            </div>
                            <button className='link-btn text-center'>
                                Send Message
                                <i className='bx bx-send bx-tada' ></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}