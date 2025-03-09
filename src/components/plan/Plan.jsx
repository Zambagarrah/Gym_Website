import './plan.css'

export function Plan() {
    return (
        <section className="plan section" id="plan">
            <div className="container">
                <div className="title text-center">
                    <h3 className="plan-sub">Start Your Journey</h3>
                    <h3 className="plan-title">CHOOSE A PLAN</h3>
                </div>
                <div className="card-holder d-flex">
                    <div className="cards text-center card-w">
                        <h4 className="card-title">BEGINNER</h4>
                        <p className="card-price">$45.99</p>
                        <div className="card-info text-left">
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                5 Days a Week
                            </p>
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                Free Fitness Gear
                            </p>
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                Free Supplements
                            </p>
                        </div>                        
                        <a className="btns">Join Now</a>
                    </div>
                    <div className="cards text-center main">
                        <p className="card-features">Most Popular</p>
                        <h4 className="card-title">INTERMIDIATE</h4>
                        <p className="card-price">$75.99</p>
                        <p className="card-price-before">$135.99</p>
                        <div className="card-info text-left">
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                All in Beginner
                            </p>
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                Free Fitness Trainer
                            </p>
                        </div>
                        <a className="btns btn2">Join Now</a>
                        <i className='bx bxs-badge-dollar bx-spin offer'></i>
                    </div>
                    <div className="cards text-center card-w">
                        <h4 className="card-title">ADVANCED</h4>
                        <p className="card-price">$165.99</p>
                        <div className="card-info text-left">
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                All in Intermediate
                            </p>
                            <p className="card-features">
                                <i className='bx bx-check-double'></i>
                                Personalised Training Sessions
                            </p>
                        </div>
                        <a className="btns">Join Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}