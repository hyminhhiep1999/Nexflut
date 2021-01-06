import React, {
    useState
} from 'react';

import ItemFiml from '../itemFiml/itemFiml';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ph1 from '../pages/home/image/phim-hot-1.webp';
import ph2 from '../pages/home/image/phim-hot-2.webp';
import ph3 from '../pages/home/image/phim-hot-3.webp';
import ph4 from '../pages/home/image/phim-hot-4.webp';
import ph5 from '../pages/home/image/phim-hot-5.webp';
import ph6 from '../pages/home/image/phim-hot-6.webp';
import ph7 from '../pages/home/image/phim-hot-7.webp';
import ph8 from '../pages/home/image/phim-hot-8.webp';
import ph9 from '../pages/home/image/phim-hot-9.webp';
import ph10 from '../pages/home/image/phim-hot-10.webp';
import ph11 from '../pages/home/image/phim-hot-11.webp';
import ph12 from '../pages/home/image/phim-hot-12.webp';


const GenreFimlSeries = () => {
    const [countItem, setCountItem] = useState(
        window.screen.width < 768 ? 3 : 6
    );
    window.addEventListener('resize', function (event) {
        let maxWidth = window.screen.width;
        if (maxWidth < 768) {
            setCountItem(3)
        }
        else {
            setCountItem(6)
        }
    })

    const data = [
        {
            name: 'Phim Bộ 1',
            image: ph1,
            old: 15
        },
        {
            name: 'Phim Bộ 2',
            image: ph2,
            old: 16
        },
        {
            name: 'Phim Bộ 3',
            image: ph3,
            old: 17
        },
        {
            name: 'Phim Bộ 4',
            image: ph4,
            old: 18
        },
        {
            name: 'Phim Bộ 5',
            image: ph5,
            old: 19
        },
        {
            name: 'Phim Bộ 6',
            image: ph6,
            old: 18
        },
        {
            name: 'Phim Bộ 7',
            image: ph7,
            old: 15
        }
        ,
        {
            name: 'Phim Bộ 8',
            image: ph8,
            old: 22
        }
        ,
        {
            name: 'Phim Bộ 9',
            image: ph9,
            old: 19
        }
        ,
        {
            name: 'Phim Bộ 10',
            image: ph10,
            old: 18,
        }
        ,
        {
            name: 'Phim Bộ 11',
            image: ph11,
            old: 13
        }
        ,
        {
            name: 'Phim Bộ 12',
            image: ph12,
            old: 16
        }
    ]
    return (
        <div className="movie movie-series">
            <h3>Phim bộ</h3>
            <OwlCarousel
                className="owl-theme"
                items={countItem}
                loop
                dots={false}
                margin={15}
                nav
                slideBy={countItem - 2}
                smartSpeed={400}
                autoplay={false}
                autoplayTimeout={5000}
            >

                {data.map((item, index) => (
                    <ItemFiml key={index} data={item} />
                ))}

            </OwlCarousel>
        </div>
    );
}
export default GenreFimlSeries;