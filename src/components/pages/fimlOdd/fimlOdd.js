import React, {
    useState
} from 'react';

import '../fimlOdd/fimlGenre.scss';

import ItemFimls from '../../pages/fimlOdd/itemFiml/itemFimls';


import ph1 from '../../pages/home/image/phim-hot-1.webp';
import ph2 from '../../pages/home/image/phim-hot-2.webp';

import ph3 from '../../pages/home/image/phim-hot-3.webp';
import ph4 from '../../pages/home/image/phim-hot-4.webp';
import ph5 from '../../pages/home/image/phim-hot-5.webp';
import ph6 from '../../pages/home/image/phim-hot-6.webp';
import ph7 from '../../pages/home/image/phim-hot-7.webp';
import ph8 from '../../pages/home/image/phim-hot-8.webp';
import ph9 from '../../pages/home/image/phim-hot-9.webp';
import ph10 from '../../pages/home/image/phim-hot-10.webp';
import ph11 from '../../pages/home/image/phim-hot-11.webp';
import ph12 from '../../pages/home/image/phim-hot-12.webp';

// import old13 from '../../pages/home/image/13.png';
// import old16 from '../pages/home/image/16.png';
// import old17 from '../pages/home/image/17.png';
// import old18 from '../pages/home/image/18.png';

const FimlOdd = () => {
    const data = [
        {
            image: ph2,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 15,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph3,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph4,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph5,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph6,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph7,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 18,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
        {
            image: ph8,
            name: 'Sống ở sông đáy',
            point: 8.4,
            old: 13,
            episode: 16,
            des: 'Là một bộ phim hành động gây cấn năm 2020...',
        },
    ]
    return (
        <div className="content">
            <div className="container">
                <div className="header-fiml">
                    <div className="fiml-genre">
                        <div className="fiml"><a href="">Phim</a></div>
                        <span><i class="fas fa-angle-right"></i></span>
                        <div className="genre">Phim bộ</div>
                    </div>
                    <div className="filter-movies">
                        <div className="filter">
                            <select className="genrefiml-filter  custom-select">
                                <option value="0">Phim bộ</option>
                                <option value="1">Phim lẻ</option>
                                <option value="2">Phim hoạt hình</option>
                                <option value="3">Phim anmie</option>
                                <option value="4">Phim chiếu rạp</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="category-fiml-filter filter custom-select">
                                <option value="0">Tất cả</option>
                                <option value="1">Phiêu liêu</option>
                                <option value="2">Hài hước</option>
                                <option value="3">Cổ trang</option>
                                <option value="4">Tâm lý</option>
                                <option value="5">Viễn tưởng</option>
                                <option value="6">Hoạt hình</option>
                                <option value="7">Kinh dị</option>
                                <option value="8">Hình sự</option>
                                <option value="9">Võ thuật</option>
                                <option value="10">Hành động</option>
                                <option value="11">Gia đình</option>
                                <option value="12">Chiến tranh</option>
                                <option value="13">Thần thoại</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="national-fiml-filter filter custom-select">
                                <option value="0">Mỹ</option>
                                <option value="1">Ấn độ</option>
                                <option value="2">Việt nam</option>
                                <option value="3">Thái lan</option>
                                <option value="4">Trung quốc</option>
                                <option value="5">Hàn quốc</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="list-fiml">
                    <div className="row">
                    {data.map((item, index) => (
                    <ItemFimls key={index} data={item} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FimlOdd;