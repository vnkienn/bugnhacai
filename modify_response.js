// Lấy nội dung response từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra nếu là API "GetAccountInfo" (https://portal.gsum01.com/api/Account/GetAccountInfo)
if ($request.url.indexOf("Account/GetAccountInfo") !== -1) {
    // Nếu mã ResponseCode là 1 thì chỉnh sửa giá trị "Balance" thành 50000000
    if (obj.ResponseCode === 1) {
        obj.AccountInfo.Balance = 50000000;  // Chỉnh sửa giá trị "Balance"
    }
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
