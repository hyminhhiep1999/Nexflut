import React from 'react';
import './footer.scss';
import { Link } from "react-router-dom";
import {Row} from 'reactstrap';

//icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";

import logoFooter from './image/logofooter.png';
const Footer = () => {
    return (
        <div className="footer-forall">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <div className="imageLogoFooter">
                        <h4 className="payment"></h4>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4 col-img-footer">
                                <img src={logoFooter} alt="Logofooter" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="type_protype">
                        <Row>
                                <ul className="list col-6 col-sm-4 col-lg-2">Thông tin 
                            
                                    <li><Link to="/gioithieu">Giới thiệu</Link></li> 
                                    <li><Link to="/dieukhoan">Điều khoản sử dụng</Link></li> 
                                    <li><Link to="/chatluong">Công bố chất lượng</Link></li> 
                                </ul>
                                <ul className="list col-6 col-sm-4 col-lg-2">Clip Film 
                                    <li><a href="">Phim Mới</a></li> 
                                    <li><a href="">Phim Bộ</a></li> 
                                    <li><a href="">Phim Lẻ</a></li> 
                                </ul>
                                <ul className="list col-6 col-sm-4 col-lg-2" > <br/>  
                                <li><a href="">Phim Chiếu Rạp</a></li>
                                    <li><a href="">Thiếu Nhi</a></li> 
                                    <li><a href="">Anime</a></li> 
                                </ul>
                                <ul className="list col-6 col-sm-4 col-lg-2">Trợ Giúp
                                    <li><a href="">FAQ </a></li> 
                                    <li><a href="">Góp ý - Báo lỗi</a></li> 
                                    <li><Link to="/lienhe">Liên hệ</Link></li> 
                                </ul>
                                <ul className="list col-6 col-sm-4 col-lg-2">Ứng Dụng 
                                    <li><a href=""><i className="fab fa-apple"></i> IOS </a></li> 
                                    <li><a href=""><i className="fab fa-android"></i> Android</a></li> 
                                    <li><a href=""><i className="fas fa-laptop-medical"></i> Thiết Bị Hỗ Trợ</a></li> 
                                </ul>
                                <ul className="list col-2 col-sm-4 col-lg-2">Liên Kết 
                                    <li><a href="https://lendbox.vn/"> Lendbox.vn </a></li> 
                                </ul>
                        </Row>
                    </div>
                </div>
                <div className="col-md-2">
                <a href="#" className="facebookIcon"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
            <div className="app-footer"></div>
            <div className="giayPhep col-md-9 offset-md-2 p-0">
                <p>
                    Cơ quan chủ quản: Sinh viên TDC, Thành Phố Hồ Chí Minh.
                </p>
                <p>  
                    Điện thoại/Fax: 090-0000000 - Email: tdc@gmail.vip.vn 
                </p>
               
            </div>
        </div>
        
    </div>
    );
}

export default Footer;
