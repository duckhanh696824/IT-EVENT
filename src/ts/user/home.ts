const authLogin: string | null = localStorage.getItem('authLogin');
const userInfo: string | null = localStorage.getItem('userInfo');


if (!authLogin) {
    alert("Chưa đăng nhập");
    window.location.href = 'Login.html';
} else {
    document.querySelectorAll<HTMLAnchorElement>("li.auth-button a").forEach((link) => {
        link.style.display = "none";
    });
    if(userInfo){
        const user = JSON.parse(userInfo);
        console.log('User Info:', user);
        const username = user.nickname;

        // Hiển thị tên người dùng lên giao diện
        const usernameDisplay = document.getElementById("dropdown-username");
        if (usernameDisplay) {
            usernameDisplay.textContent = `Chào, ${username}`;
            usernameDisplay.style.display = "inline"; // Bỏ ẩn phần tử
        }
    }else{
        alert("Chưa có thông tin người dùng.");
    }


}
