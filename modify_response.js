// Script để chỉnh sửa response trả về từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra xem mã code có phải là 0 không
if (obj.code === 0) {
    obj.t = 199935625.000;  // Chỉnh sửa giá trị "t" thành 1999.000
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
