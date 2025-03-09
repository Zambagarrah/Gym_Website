import { programmes } from '../../Data';
import './program.css'


export function Program() {
    return (
        <section className="programs" id="programmes">
            <div className="container">
                <div className="align-items-center ">
                    <h3 className="program-title">
                        BROWSE OUR PROGRAMMES
                    </h3>
                    <div className="program d-flex position-relative">
                        {programmes.map(({ img, progName, description, time}, index) => (
                            <li key={index} className='prog-info d-flex'>
                                <div className="img-wrapper">
                                    <img src={img} className="img" />
                                </div>
                                <div className="info">
                                    <div className="progName">{progName}</div>
                                    <div className="description">{description}</div>
                                    <div className="time">{time}</div>
                                    <div className="link-btn">Join Now</div>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}