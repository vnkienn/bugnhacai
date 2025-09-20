// Lấy nội dung response từ API
let obj = JSON.parse($response.body);  // Chuyển response thành đối tượng JSON

// Kiểm tra nếu là API "user/money" (https://api.tk88.com/api/front/user/money)
if ($request.url.indexOf("user/money") !== -1) {
    // Nếu mã code là 0 thì chỉnh sửa giá trị "t" thành 1999.000
    if (obj.code === 0) {
        obj.t = 1999.000;  // Chỉnh sửa giá trị "t"
    }
}
// Kiểm tra nếu là API "timeline/game?gameId=161" (https://api.tk88.com/api/front/user/timeline/game?gameId=161)
else if ($request.url.indexOf("timeline/game?gameId=161") !== -1) {
    // Nếu mã code là 0 thì chỉnh sửa giá trị "userMoney" thành 199935625.000
    if (obj.code === 0) {
        obj.t.userMoney = 199935625.000;  // Chỉnh sửa giá trị "userMoney"
    }
}
// Kiểm tra nếu là API "timeline" (https://api.tk88.com/api/front/user/timeline)
else if ($request.url.indexOf("timeline") !== -1) {
    // Nếu mã code là 0 thì chỉnh sửa giá trị "userMoney" thành 199935625.000
    if (obj.code === 0) {
        obj.t.userMoney = 199935625.000;  // Chỉnh sửa giá trị "userMoney"
    }
}
// Kiểm tra nếu là API "login" (https://api.wsmt8g.cc/v2/auth/token/login)
else if ($request.url.indexOf("auth/token/login") !== -1) {
    // Nếu mã code là 0 thì chỉnh sửa giá trị "wallet" thành 1000000
    if (obj.data.wallet === "0") {
        obj.data.wallet = "1000000";  // Chỉnh sửa giá trị "wallet"
    }
}

// Gửi lại response đã chỉnh sửa
$done({ body: JSON.stringify(obj) });
