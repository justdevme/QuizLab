document.addEventListener("DOMContentLoaded", function () {
    // Xử lý hiển thị mật khẩu
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.querySelector(".toggle-password");
    const eyeIcon = togglePasswordButton.querySelector("img");

    togglePasswordButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Hiển thị mật khẩu
            eyeIcon.src = "assets/open-eye.png"; // Đổi icon thành mắt mở
            eyeIcon.classList.remove("closeeye-icon");
            eyeIcon.classList.add("openeye-icon");
        } else {
            passwordInput.type = "password"; // Ẩn mật khẩu
            eyeIcon.src = "assets/close-eye.png"; // Đổi lại icon mắt nhắm
            eyeIcon.classList.remove("openeye-icon");
            eyeIcon.classList.add("closeeye-icon");
        }
    });

    // Xử lý chuyển đổi giữa form đăng nhập và đăng ký
    const createAccountLink = document.getElementById("createAccountLink");
    const signInLink = document.getElementById("signInLink");
    const signInForm = document.getElementById("signInForm");
    const registerForm = document.getElementById("registerForm");

    createAccountLink.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        signInForm.style.display = "none"; // Ẩn form đăng nhập
        registerForm.style.display = "block"; // Hiển thị form đăng ký
    });

    signInLink.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
        registerForm.style.display = "none"; // Ẩn form đăng ký
        signInForm.style.display = "block"; // Hiển thị form đăng nhập
    });
});