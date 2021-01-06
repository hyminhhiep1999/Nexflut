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


const GenreFimlHot = () => {
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
      name: 'Phim Hot 1',
      image: ph1,
      old: 15
    },
    {
      name: 'Phim Hot 2',
      image: ph2,
      old: 16
    },
    {
      name: 'Phim Hot 3',
      image: ph3,
      old: 17
    },
    {
      name: 'Phim Hot 4',
      image: ph4,
      old: 18
    },
    {
      name: 'Phim Hot 5',
      image: ph5,
      old: 19
    },
    {
      name: 'Phim Hot 6',
      image: ph6,
      old: 18
    },
    {
      name: 'Phim Hot 7',
      image: ph7,
      old: 15
    }
    ,
    {
      name: 'Phim Hot 8',
      image: ph8,
      old: 22
    }
    ,
    {
      name: 'Phim Hot 9',
      image: ph9,
      old: 19
    }
    ,
    {
      name: 'Phim Hot 10',
      image: ph10,
      old: 18
    }
    ,
    {
      name: 'Phim Hot 11',
      image: ph11,
      old: 13
    }
    ,
    {
      name: 'Phim Hot 12',
      image: ph12,
      old: 16
    }
  ]
  return (
    <div className="movie movie-top">
      <h3>Phim hot</h3>
      <OwlCarousel
        className="owl-theme"
        items={countItem}
        loop
        dots={false}
        margin={15}
        nav
        slideBy={countItem - 2}
        smartSpeed={400}
        autoplay={true}
        autoplayTimeout={5000} >

        {data.map((item, index) => (
          <ItemFiml key={index} data={item}/>
        ))}

      </OwlCarousel>
    </div>
  );
}
export default GenreFimlHot;