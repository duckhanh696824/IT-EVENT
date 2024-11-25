"use strict";
const authLogin = localStorage.getItem('authLogin');
const userInfo = localStorage.getItem('userInfo');
//const username: string = "JohnDoe"; // Thay bằng username động
const avatarUrl = "/images/biaHutech.jpg"; // Thay bằng URL avatar động
if (!authLogin) {
    alert("Chưa đăng nhập");
    window.location.href = 'Login.html';
}
else {
    document.querySelectorAll("li.auth-button a").forEach((link) => {
        link.style.display = "none";
    });
    if (userInfo) {
        const user = JSON.parse(userInfo);
        console.log('User Info:', user);
        const username = user.nickname;
        // Hiển thị tên người dùng lên giao diện
        const usernameDisplay = document.getElementById("dropdown-username");
        if (usernameDisplay) {
            usernameDisplay.textContent = `Chào, ${username}`;
            usernameDisplay.style.display = "inline"; // Bỏ ẩn phần tử
        }
    }
    else {
        alert("Chưa có thông tin người dùng.");
    }
}
