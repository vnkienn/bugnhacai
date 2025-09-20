// Lấy nội dung response từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra nếu là API "GetBalance"
if ($request.url.indexOf("Account/GetBalance") !== -1) {
    // Nếu mã Code là 200 thì chỉnh sửa giá trị "Balance" thành 50000000
    if (obj.Code === 200) {
        obj.Result.Balance = 50000000;  // Thay đổi giá trị Balance
    }
}
// Kiểm tra nếu là API "login"
else if ($request.url.indexOf("Account/Login") !== -1) {
    // Nếu ResponseCode là 1 thì chỉnh sửa giá trị "Balance" thành 50000000
    if (obj.ResponseCode === 1) {
        obj.AccountInfo.Balance = 50000000;  // Thay đổi giá trị Balance
    }
}
// Kiểm tra nếu là WebSocket response từ Luckydice Hub
else if ($request.url.indexOf("luckydiceHub") !== -1) {
    // Thay đổi giá trị của Dice1, Dice2, Dice3
    if (obj.M && obj.M[0].H === "luckydiceHub" && obj.M[0].M === "sessionInfo") {
        obj.M[0].A[0].Result.Dice1 = 1;  // Thay đổi giá trị Dice1
        obj.M[0].A[0].Result.Dice2 = 2;  // Thay đổi giá trị Dice2
        obj.M[0].A[0].Result.Dice3 = 3;  // Thay đổi giá trị Dice3
    }
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
