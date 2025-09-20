// Lấy nội dung response từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra nếu là API "GetBalance" (https://king3317.com/be/portalapi/api/v1/Account/GetBalance)
if ($request.url.indexOf("Account/GetBalance") !== -1) {
    // Nếu mã Code là 200 thì chỉnh sửa giá trị "Balance" thành 133241.00
    if (obj.Code === 200) {
        obj.Result.Balance = 133241.00;  // Chỉnh sửa giá trị "Balance"
    }
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
