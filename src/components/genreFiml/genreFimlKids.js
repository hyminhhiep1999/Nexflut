import React, {
    useState
} from 'react';
import ItemFimlHori from '../itemFiml/itemFimlHori';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import tn1 from '../pages/home/image/thieu-nhi-1.webp';
import tn2 from '../pages/home/image/thieu-nhi-2.webp';
import tn3 from '../pages/home/image/thieu-nhi-3.webp';
import tn4 from '../pages/home/image/thieu-nhi-4.webp';
import tn5 from '../pages/home/image/thieu-nhi-5.webp';
import tn6 from '../pages/home/image/thieu-nhi-6.webp';
import tn7 from '../pages/home/image/thieu-nhi-7.webp';
import tn8 from '../pages/home/image/thieu-nhi-8.webp';

const GenreFimlKids = () => {
    const [countItemSeries, setCountItemSeries] = useState(
        window.screen.width < 768 ? 2 : 4
    );
    window.addEventListener('resize', function (event) {
        let maxWidth = window.screen.width;
        if (maxWidth < 768) {
            setCountItemSeries(2)
        }
        else {
            setCountItemSeries(4)
        }
    })
    // data
    const data = [
        {
            name: 'Phim Thiếu Nhi 1',
            image: tn1,
            old: 15
        },
        {
            name: 'Phim Thiếu Nhi 2',
            image: tn2,
            old: 16,
            theaters: 1
        },
        {
            name: 'Phim Thiếu Nhi 3',
            image: tn3,
            old: 17
        },
        {
            name: 'Phim Thiếu Nhi 4',
            image: tn4,
            old: 18
        },
        {
            name: 'Phim Thiếu Nhi 5',
            image: tn5,
            old: 19,
            theaters: 1
        },
        {
            name: 'Phim Thiếu Nhi 6',
            image: tn6,
            old: 18
        },
        {
            name: 'Phim Thiếu Nhi 7',
            image: tn7,
            old: 15
        }
        ,
        {
            name: 'Phim Thiếu Nhi 8',
            image: tn8,
            old: 22,
            theaters: 1
        }
    ]
    return (
        <div className="movie movie-thwart movie-for-kids">
            <h3>Phim thiếu nhi</h3>
            <OwlCarousel
                className="owl-theme"
                items={countItemSeries}
                loop
                dots={false}
                margin={15}
                nav
                slideBy={countItemSeries - 2}
                smartSpeed={450}
                autoplay={false}
                autoplayTimeout={5000}
            >
                {data.map((item, index) => (
                    <ItemFimlHori key={index} data={item} />
                ))}
            </OwlCarousel>
        </div>
    );
}
export default GenreFimlKids;