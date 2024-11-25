document.getElementById('loginForm')?.addEventListener('submit', function (event: Event) {
  event.preventDefault(); // Ngừng hành động mặc định của form (reload trang)

  // Lấy giá trị từ các input
  const username = (document.getElementById('username') as HTMLInputElement)?.value;
  const password = (document.getElementById('password') as HTMLInputElement)?.value;

  console.log('Username:', username); // Kiểm tra giá trị của username
  console.log('Password:', password); // Kiểm tra giá trị của password

  // Tạo đối tượng FormData
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  // Gửi yêu cầu đăng nhập tới API của Yii2
  fetch('http://157.20.82.3:9000/api/auth/login', {
      method: 'POST',
      body: formData,
  })
      .then((response: Response) => {
          console.log('Response Status:', response.status); // Kiểm tra mã trạng thái của phản hồi
          return response.json();
      })
      .then((data: any) => {
          console.log('Response Data:', data); // Kiểm tra dữ liệu trả về từ API

          const authLogin = data.data;
          localStorage.setItem('authLogin', authLogin);

          const responseString = JSON.stringify(data);
          const parsedData = JSON.parse(responseString);
          const userInfo = parsedData.data && parsedData.data.user_info;

          console.log('User Info:', userInfo);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));

          if (data.statusCode === 200) {
              if (userInfo?.is_admin) {
                  window.location.href = './html/admin/home.html';
              } else {
                  window.location.href = './html/user/home.html';
              }
          } else {
              alert(data.message); // Hiển thị lỗi khi đăng nhập thất bại
          }
      })
      .catch((error: Error) => {
          console.error('Lỗi kết nối tới API:', error);
          alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
      });
});
