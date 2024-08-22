import Pizza01 from '../../images/pizza01.jpg'
import Pizza02 from '../../images/pizza02.jpg'
import Pizza03 from '../../images/pizza03.jpg'

function Carousel() {
    return (
        <div id="carouselExampleIndicators" class=" container carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src= {Pizza01} height='550' class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src= {Pizza02} height='550' class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src= {Pizza03} height='550' class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel