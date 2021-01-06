
import React, {
    useState
} from 'react';
import './home.scss';

import GenreFimlHot from '../../genreFiml/genreFimlHot';
import GenreFimlNew from '../../genreFiml/genreFimlNew';
import GenreFimlSeries from '../../genreFiml/genreFimlSeries';
import GenreFimlTheaters from '../../genreFiml/genreFimlTheaters';
import GenreFimlKids from '../../genreFiml/genreFimlKids';
import GenreFimlOdd from '../../genreFiml/genreFimlOdd';
import GenreFimlAnime from '../../genreFiml/genreFimlAnime';

// import Slide from '../../slideFiml/slide';
import SlideItem from '../../slideFiml/slideItem';
import SlideIndiaCators from '../../slideFiml/itemIndiacators';



import img1 from '../home/image/17337.jpg';
import img2 from '../home/image/choctucvoyeu.png';
import img4 from '../home/image/4.jpg';
import img5 from '../home/image/5.jpg';
import img6 from '../home/image/6.jpg';
import img7 from '../home/image/7.png';
import img8 from '../home/image/8.png';
import img9 from '../home/image/9.png';



const Home = () => {
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
    //
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

    const dataCarousel = [
        {
            logofiml: img2,
            title: 'Phim Nam Nữ 2020',
            des: 'Bị active đánh tráo từ khi sinh ra, nhận lại cha mẹ ruột, Nhã Đan cũng không được yêu thương và bị em gái nuôi hãm hại. Cuộc đời cô dần thay đổi khi gặp hai cha con Gia Bách và Gia Bảo.',
            images: img1,
            imagesindicators: img1,
            
        },
        {
            logofiml: img2,
            title: 'Phim Nam Nữ 2021',
            des: 'Bị active đánh tráo từ khi sinh ra, nhận lại cha mẹ ruột, Nhã Đan cũng không được yêu thương và bị em gái nuôi hãm hại. Cuộc đời cô dần thay đổi khi gặp hai cha con Gia Bách và Gia Bảo.',
            images: img1,
            imagesindicators: img1,
        },
        {
            logofiml: img2,
            title: 'Phim Nam Nữ 2022',
            des: 'Bị active đánh tráo từ khi sinh ra, nhận lại cha mẹ ruột, Nhã Đan cũng không được yêu thương và bị em gái nuôi hãm hại. Cuộc đời cô dần thay đổi khi gặp hai cha con Gia Bách và Gia Bảo.',
            images: img1,
            imagesindicators: img1,
        },
        {
            logofiml: img2,
            title: 'Phim Nam Nữ 2023',
            des: 'Bị active đánh tráo từ khi sinh ra, nhận lại cha mẹ ruột, Nhã Đan cũng không được yêu thương và bị em gái nuôi hãm hại. Cuộc đời cô dần thay đổi khi gặp hai cha con Gia Bách và Gia Bảo.',
            images: img1,
            imagesindicators: img1,
        },
    ]


    return (
        <div className="content">
            <div className="slide-header ">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {dataCarousel.map((item, index) => (
                            <SlideIndiaCators key={index} dataCarousel={item} dataSiteTo={index} isActive={index == 0} />
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {dataCarousel.map((item, index) => (
                            <SlideItem key={index} dataCarousel={item} isActive={index == 0} />
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container">
                {/* phim hot */}
                <GenreFimlHot />
                {/* phim mới */}
                <GenreFimlNew />
                {/* phim bộ */}
                <GenreFimlSeries />
                {/* phim chiếu rạp */}
                <GenreFimlTheaters />
                {/* phim thiếu nhi */}
                <GenreFimlKids />
                {/* phim lẻ */}
                <GenreFimlOdd />
                {/* phim anime  */}
                <GenreFimlAnime />
            </div>
        </div>
    );

}

export default Home;
