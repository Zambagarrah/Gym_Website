import './levels.css'

export function Levels() {
    return (
        <section className="level section"id="level">
            <div className="container">
                <h3 className="level-title text-center">choose a plan that</h3>
                <h3 className="level-title sub text-center">fits your preference</h3>
                <div className="level-container d-flex flex-wrap p-4 justify-content-center align-items-center">
                    <div className="program text-center">
                        <h3 className="program-title">Beginners Fitness Program</h3>
                        <div className="program-details d-flex">
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                4 Days a Week
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Fitness Gear
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Supplements
                            </div>
                        </div>                         
                    </div>
                    <div className="level-separator">-</div>
                    <div className="program text-center">
                        <h3 className="program-title">Intermediate Fitness Program</h3>
                        <div className="program-details d-flex">
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                5 Days a Week
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Fitness Gear
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Supplements
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Personal Trainer
                            </div>
                        </div>                        
                    </div>
                    <div className="level-separator">-</div>
                    <div className="program text-center">
                        <h3 className="program-title">Advance Fitness Program</h3>
                        <div className="program-details d-flex">
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                6 Days a Week
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Fitness Gear
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Supplements
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Free Personal Trainer
                            </div>
                            <div className="details-dets">
                                <i className='bx bx-radio-circle-marked'></i>
                                Personalized Sessions
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>    
    )
}