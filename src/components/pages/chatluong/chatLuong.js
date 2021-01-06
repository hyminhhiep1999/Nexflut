import React, { Component } from 'react';
import './chatLuong.scss';
class chatLuong extends Component {
    render() {
        return (
            <div className="chatLuong">
                <div className="container-fluid">
                    <div className="title">
                        Công bố chất lượng dịch vụ  
                    </div>
                    <b>BẢN CÔNG BỐ CHẤT LƯỢNG DỊCH VỤ PHÁT THANH, TRUYỀN HÌNH</b>
                    <p className="congBo ">
                        <b>CÔNG BỐ</b>
                    </p>
                    <ul>
                        <li>Chất lượng dịch vụ: Dịch vụ phát thanh và truyền hình trên mạng internet – Next-Flux</li>
                        <li>Phù hợp quy chuẩn kỹ thuật: TCVN 10298:2014/BTTTT</li>
                    </ul>
                    <div className=""></div>
                    <table border="1">
                        <tbody>


                        <tr>
                            <th>STT</th>
                            <th> Tên Chỉ Tiêu</th>
                            <th>
                                <p>Mức theo Quy chuẩn kỹ thuật quốc gia</p>
                                <div className="soHieu">
                                    <p>(số hiệu Quy chuẩn kỹ thuật quốc gia)</p>
                                </div>
                            </th>
                            <th>Mức Công Bố</th>
                            <th>Ghi chú</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <th>TCVN 10298:2014</th>
                            <th>
                                <p>Tốc độ chương trình tương ứng cho từng cấu hình (Video bitrates):</p>
                                <p>
                                    + CIF: tốc độ từ 64 kbit/s tới 2Mbit/s
                                </p>
                                <p> + VGA: tốc độ từ 128 kbit/s đến 4Mbit/s</p>
                            </th>
                            <th>
                                <p>Tốc độ chương trình tương ứng cho từng cấu hình (Video bitrates):</p>
                                <p>+ VGA: tốc độ từ 800 kbit/s đến 4Mbit/s</p>
                            </th>
                            
                            <th>
                                <div className="dung">
                                    <p>Đáp ứng</p>
                                </div>
                            </th>
                        </tr>
                        
                        
                        <tr>
                            <th>2</th>
                            <th>TCVN 10298:2014	</th>
                            <th>Tốc độ tải trung bình chương trình truyền hình: Tth ≥ 320 kbps</th>
                            <th>Tốc độ tải trung bình chương trình truyền hình: Tth ≥ 800 kbps</th>
                            <th>
                                <div className="dung">
                                    <p>Đáp ứng</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>TCVN 10298:2014	</th>
                            <th>Điểm chất lượng tín hiệu Video trung bình ≥ 3</th>
                            <th>Điểm chất lượng tín hiệu Video trung bình ≥ 4</th>
                            <th>
                                <div className="dung">
                                    <p>Đáp ứng</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>4</th>
                            <th>TCVN 10298:2014	</th>
                            <th>Điểm chất lượng tín hiệu Audio trung bình ≥ 3</th>
                            <th>Điểm chất lượng tín hiệu Audio trung bình ≥ 4</th>
                            <th>
                                <div className="dung">
                                    <p>Đáp ứng</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>TCVN 10298:2014	</th>
                            <th>Điểm chất lượng tín hiệu Video/Audio trung bình ≥ 3</th>
                            <th>Điểm chất lượng tín hiệu Video/Audio trung bình ≥ 4</th>
                            <th>
                                <div className="dung">
                                    <p>Đáp ứng</p>
                                </div>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default chatLuong;
