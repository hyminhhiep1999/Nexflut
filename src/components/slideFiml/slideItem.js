import React, {
    useState
} from 'react';

const SlideItem = (props) => {
    return (
        <div className={props.isActive ? 'carousel-item active' : 'carousel-item'}>
            <div className="row">
                <div className="col-md-5">
                    <div className="logo">
                        <img src={props.dataCarousel.logofiml}></img>
                    </div>
                    <div className="title">
                        <a href="">{props.dataCarousel.title}</a>
                    </div>
                    <div className="des">
                        <p>{props.dataCarousel.des}</p>
                    </div>
                    <div className="btn-click-ahref">
                        <a className="btn-seen" ahref="#">Xem ngay</a>
                        <a className="btn-love" ahref="#">Yêu thích</a>
                    </div>
                </div>
                <div className="col-md-7">
                    <img src={props.dataCarousel.images}></img>
                </div>
            </div>
        </div>
    );
}
export default SlideItem;