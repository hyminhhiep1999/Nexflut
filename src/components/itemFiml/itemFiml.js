import React, {
    
} from 'react';


import old13 from '../pages/home/image/13.png';
import old16 from '../pages/home/image/16.png';
import old17 from '../pages/home/image/17.png';
import old18 from '../pages/home/image/18.png';

import chieurap from '../pages/home/image/phimchieurap.png';

const ItemFiml = (props) => {
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
    //theaters
    let theaters = null;
    if(props.data.theaters == 1){
        theaters = <img src={chieurap} id=""></img>;
    }
    return (
        <div className="item">
            <div className="img-movie">
                <a href="#"><img id="" src={props.data.image}></img></a>
            </div>
            <div className="title-movie">
                <h6><a href="#" id="">{props.data.name}</a></h6>
            </div>
            <div className="old-movie">
                {old}
            </div>
            <div className="theaters">
                {theaters}
            </div>
        </div>
    );
}
export default ItemFiml;
