/**
 * IPO
 * 
 * * Input:
 * oneUSD = 23.500
 * soTien = 0
 * 
 * * Process
 * B1: Khởi tạo biến
 * B2: Tạo hàm tính trung bình
 *      //* lấy khi user đã click button
 *      B3: lấy giá trị từ form và lưu vào biến
 *      B4: tính giá tiền
 *      B5: hiển thị kết quả
 * 
 * *Quy định thời điểm chạy hàm
 * B6: Gán hàm vào sự kiện click của button 
 * 
 * 
 * *Output
 * thanhTien
 */

// B1:
let oneUSD = 23500
let soTien = 0
let thanhTien = 0
// B2:
function doiGiaTien() {
    // B3:
    soTien = document.getElementById("BT3_input1").value
    // B4:
    thanhTien = oneUSD * soTien
    // B5:
    document.getElementById("result3").innerHTML = "Số tiền là: " + Intl.NumberFormat('vn-VN').format(thanhTien);
}

// B6:
document.getElementById("btnTinh3").onclick = doiGiaTien;

