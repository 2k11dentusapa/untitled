const http = require("http");
const fs = require('fs');

const readUI = (() => {
    try {
        const content = fs.readFileSync('UI.html', 'utf-8');
        return content;
    } catch (err) {
        console.error("Lỗi đọc file:", err);
        return "<h1>Lỗi không tìm thấy file index.html</h1>";
    }
})(); // Hàm tự chạy này sẽ gán thẳng chuỗi HTML vào biến readUI

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(readUI); // In ra nội dung HTML đã đọc thành công
    res.end();
})
.listen(8080, () => console.log("Server chạy tại http://localhost:8080"));
