// Đợi cho HTML tải xong mới thực thi code
document.addEventListener('DOMContentLoaded', function() {
    console.log("Trang web của KIET đã được tải hoàn tất.");

    const avatar = document.getElementById('avatarImg');
    
    if (avatar) {
        avatar.onclick = function() {
            alert("Bạn đang xem bài tập của SV: KIET");
        };
    }
});