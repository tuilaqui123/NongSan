import React from "react";
import { Link } from "react-router-dom";
const ItemInfo = () => {
    return (
        <div>
            {/* xuất xứ, trang trại, quy trình sản xuất, giá trị dinh dưỡng và công dụng, cách bảo quản và sử dụng */}
            <p className="font-bold flex flex-row items-center mb-3">Trang trại:
                <Link className="group">
                    <div className="ml-1 hover:bg-[#7dc642]  px-2 py-1 rounded-lg">
                        <p className="font-bold group-hover:text-white">VinaFarm</p>
                    </div>
                </Link>
            </p>
            <div className="mb-3 flex flex-col gap-3">
                <p className="font-bold">Quy trình sản xuất:</p>
                <p className="indent-5">Tôm sú hữu cơ Binca được nuôi trồng và sơ chế theo tiêu chuẩn hữu cơ nghiêm ngặt của EU (Châu Âu) tại Cà Mau. Tôm sú hữu cơ có thịt săn chắc, vị ngọt đậm đà và chứa nhiều chất dinh dưỡng tốt cho sức khỏe người tiêu dùng. Tôm sú hữu cơ size XL của Binca có khoảng 20 con/kg, thích hợp cho bạn chế biến những món ăn ngon cho gia đình.</p>
                <p className="indent-5">Sản phẩm tôm sú hữu cơ Binca đã đạt chứng nhận hữu cơ EU và Naturland. Tôm sú hữu cơ được nuôi trồng trong môi trường tự nhiên, không sử dụng thức ăn công nghiệp, thuốc kháng sinh, thuốc tăng trưởng hay bất kì chất tăng trưởng nào khác trong quá trình nuôi.</p>
            </div>
            <div className="mb-3 flex flex-col gap-3">
                <p className="font-bold">Giá trị dinh dưỡng & công dụng:</p>
                <p className="indent-5">Phần chúng ta ăn được trong quả bưởi là múi bưởi, trong múi bưởi có chứa rất nhiều dinh dưỡng như: Vitamin C, Kali, chất xơ,... Có nghiên cứu đã chỉ ra, quả bưởi chứa đến hơn 15 loại Vitamin và khoáng chất tốt cho sức khỏe.</p>
                <p className="indent-5">Ăn bưởi thường xuyên giúp bạn tăng cường hệ miễn dịch. Nó được đánh giá cao vì giàu hàm lượng vitamin C cùng tính chất chống oxy hóa, được biết đến có khả năng bảo vệ tế bào khỏi sự gây hại của vi khuẩn và virus.</p>
                <p className="indent-5">Trong múi bưởi còn có rất nhiều Pectin. Đây là một loại chất xơ hoà tan, khi vào cơ thể sẽ đốt cháy Cholesterol trong máu giúp giảm nguy cơ mắc các bệnh về tim mạch.</p>
                <p className="indent-5">Ngoài ra, bưởi còn rất tốt đối với các chị em phụ nữ khi nó giúp làm đẹp như làm cho da luôn căng mịn, giảm nếp nhăn và chống lão hoá, không những vậy còn phục hồi tóc hư tổn và kích tóc mọc nhanh.</p>
            </div>
            <div className="mb-3 flex flex-col gap-3">
                <p className="font-bold">Cách bảo quản & sử dụng:</p>
                <p className="indent-5">Bưởi da xanh có thể dùng để ăn tươi hoặc ép nước uống hằng ngày. Bên cạnh đó, bưởi còn được sử dụng để chế biến các món ăn như chè bưởi, salad bưởi, gỏi bưởi,...</p>
                <p className="indent-5">Bưởi da xanh có thể bảo quản ở môi trường bên ngoài, để bưởi được tươi ngon hơn, bạn nên bảo quản bưởi trong hộp đựng thực phẩm và để trong tủ lạnh. Bưởi da xanh để ngoài được 8 -10 ngày.</p>
            </div>

        </div>
    );
}

export default ItemInfo;