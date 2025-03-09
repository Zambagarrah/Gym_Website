import { reviewsData } from '../../Data';
//Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

//Import Required Modules
import { Pagination } from 'swiper/modules';
import './reviews.css'

export function Reviews() {
    return (
        <section className="review container" id="review">
            <h3 className="review-page-title text-center">Hear From Our Members</h3>
            <div className="reviews">
                <Swiper className="testimonial__container"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
                >
                    {reviewsData.map(({id, logo, name, date,  review }) => {
                        return (
                            <SwiperSlide className="review-card" key={id}>
                                <div className="title d-flex">
                                    <div className="review-logo">{logo}</div>
                                    <div className="reviewer-info">
                                        <div className="name">{name}</div>
                                        <div className="date">{date}</div>
                                    </div>
                                    <i className='bx bxl-google'></i>
                                </div>
                                <div className="rating d-flex">
                                    <div className="star">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                    <i className='bx bxs-check-circle check'></i>
                                </div>
                                <p className="review-statement">{review}</p>
                                <a href="#" className="link-btn">Read More...</a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <p></p>
        </section>
    )
}