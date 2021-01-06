import React, {
    useState
} from 'react';


import old13 from '../../../pages/home/image/13.png';
import old16 from '../../../pages/home/image/16.png';
import old17 from '../../../pages/home/image/17.png';
import old18 from '../../../pages/home/image/18.png';

const ItemFimls = (props) => {
    let old = null;
    const getold = props.data.old ;
    if(getold >= 13 && getold < 16) {
        old = <img src={old13} id=""></img>;
    }
    else if(getold >= 16 && getold < 17){
        old = <img src={old16} id=""></img>;
    }
    else if(getold >= 17 && getold < 18){
        old = <img src={old17} id=""></img>;
    }
    else if(getold >= 18){
        old = <img src={old18} id=""></img>;
    }
    return (
        <div className="col-md-2">
            <div className="banner-fiml">
                <a href="">
                    <img src={props.data.image} />
                </a>
            </div>
            <div className="title-fiml">
                <a href="">{props.data.name}</a>
            </div>
            <div className="content-fiml">
                <div className="btn-seen">
                    <a href=""><i class="fas fa-play"></i></a>
                </div>
                <div className="des-fiml">
                    <div className="title">
                        <a href="">{props.data.name}</a>
                    </div>
                    <div className="quality-score">
                        <div className="quality">
                            <div className="star">
                                <i class="fas fa-star"></i>
                            </div>
                            <span className="point">{props.data.point}</span>
                        </div>
                        <div className="old">
                            {old}
                        </div>
                        <div className="episode-number">
                            <span className="episode">{props.data.episode}</span>
                            <span>Tập</span>
                        </div>
                    </div>
                    <div className="introduced">
                        <p>{props.data.des}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ItemFimls;