import React, { Component } from 'react';
import './dieuKhoan.scss';
class dieuKhoan extends Component {
    render() {
        return (
            <div className="infoDieuKhoan">
                <div className="container-fluid">
                        <h3>Điều Khoản Sử Dụng</h3>
                    <div className="allInfor">
                        <p>BẢO VỆ THÔNG TIN CÁ NHÂN KHÁCH HÀNG</p>
                    </div>
                    <p>Mọi sự thu thập thông tin và sử dụng thông tin của Khách hàng đều được thông qua ý kiến của chính Khách
                        hàng đó trước khi Khách hàng tiến hành
                        các giao dịch cụ thể. Việc bảo vệ thông tin
                        cá nhân Khách hàng được thực hiện theo đúng nguyên tắc sau:
                    </p>
                    <div className="mucDich">
                        <b>1. Mục đích thu thập: việc thu thập thông tin Khách hàng để</b>
                        <p>- Thực hiện các giao dịch theo các đơn đặt hàng của Khách hàng, giới thiệu
                            về dịch vụ, tính năng mới của website Cliptv.vn, chăm sóc Khách hàng;
                        </p>
                        <p>- Quản lý việc đăng tải, bình luận của Khách hàng về giao dịch yêu cầu thực hiện;</p>
                        <p>- Giải quyết các thắc mắc hay khiếu nại phát sinh khi Khách hàng sử dụng dịch vụ Cliptv.vn;</p>
                        <p>- Ngăn chặn những hoạt động vi phạm pháp luật tại website Nexfux.vn.</p>
                    </div>
                    <div className="mucDich">
                        <b>2. Thời gian lưu trữ: 05 năm</b>
                    </div>
                    <div className="mucDich">
                        <b>3. Phạm vi sử dụng: </b>
                        <p>- Chỉ sử dụng các thông tin được Khách hàng đăng ký và/hoặc cập nhật trên website Cliptv.vn,
                            không sử dụng các thông tin do Khách hàng đưa trên các phương tiện, công cụ khác.
                        </p>
                    </div>
                    <div className="mucDich">
                        <b>4. Những đối tượng có thể tiếp nhận thông tin đã thu thập bao gồm:</b>
                        <p>- Đơn vị chủ quản website Nexfux.vn.</p>
                    </div>
                    <div className="mucDich">
                        <b>5. Phương thức, công cụ để Khách hàng có thể cung cấp và chỉnh sửa thông tin:</b>
                        <p>- Khách hàng có thể cung cấp và chỉnh sửa thông tin của mình khi đăng ký, 
                            đăng nhập vào hệ thống theo hướng dẫn chi tiết trên website Cliptv.vn.</p>
                    </div>
                    <div className="mucDich">
                        <b>6. Cam kết bảo mật thông tin cá nhân của Khách hàng</b>
                        <p>- Thực hiện các giao dịch theo các đơn đặt hàng của Khách hàng, giới thiệu
                            về dịch vụ, tính năng mới của website Cliptv.vn, chăm sóc Khách hàng;Thông tin cá nhân của Khách hàng trên Cliptv.vn được Cliptv.vn cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của Cliptv.vn. Việc thu thập và sử dụng thông tin của mỗi Khách hàng chỉ được
                            thực hiện khi có sự đồng ý của Khách hàng đó trừ những trường hợp pháp luật có quy định khác;
                        </p>
                        <p>- Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của 
                            Khách hàng khi không có sự cho phép đồng ý từ Khách hàng;</p>
                        <p>- Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân Khách hàng, Cliptv.vn sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều 
                            tra xử lý kịp thời và thông báo cho Khách hàng được biết;</p>
                        <p>- Tuy nhiên do hạn chế về mặt kỹ thuật, không một dữ liệu nào có thể được truyền trên đường truyền internet mà có thể được bảo mật 100%. Do vậy, Cliptv.vn không thể đưa ra một cam kết chắc chắn rằng thông tin Khách hàng cung cấp cho Cliptv.vn sẽ được bảo mật một cách tuyệt đối an toàn, và Cliptv.vn không thể chịu trách nhiệm trong trường hợp có sự truy cập trái phép thông tin cá nhân của Khách hàng,
                            như các trường hợp Khách hàng tự ý chia sẻ thông tin với người khác.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default dieuKhoan;
