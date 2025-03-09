import './scrollup.css';

export function ScrollUp() {

    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector(".scrollup");
        //When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 100) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove('show-scroll');
    })

    return (
        <a href="" className="scrollup">
            <i className='bx bxs-chevrons-up bx-fade-up scrollup__icon' style='color:#ff0000'  ></i>
        </a>
    )
}