import React, {
    useState
} from 'react';

const ItemIndiacators = (props) => {
    return (
        // thằng này data-slide-to='0' nó tự động tăng lên +1 nè ông
        <li data-target="#carouselExampleIndicators" data-slide-to={props.dataSiteTo} className={props.isActive ? 'active' : ''}>
            <img alt="" src={props.dataCarousel.images} />
        </li>
    );
}
export default ItemIndiacators;