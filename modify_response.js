// Lấy nội dung response từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra nếu là API "GetBalance" (https://king3317.com/be/portalapi/api/v1/Account/GetBalance)
if ($request.url.indexOf("Account/GetBalance") !== -1) {
    // Nếu mã Code là 200 thì chỉnh sửa giá trị "Balance" thành 133241.00
    if (obj.Code === 200) {
        obj.Result.Balance = 133241.00;  // Chỉnh sửa giá trị "Balance"
    }
}
// Kiểm tra nếu là API "Login" (https://portal.gsum01.com/api/Account/Login)
else if ($request.url.indexOf("Account/Login") !== -1) {
    // Nếu mã ResponseCode là 1 thì chỉnh sửa giá trị "Balance" thành 10000000
    if (obj.ResponseCode === 1) {
        obj.AccountInfo.Balance = 10000000;  // Chỉnh sửa giá trị "Balance"
    }
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
