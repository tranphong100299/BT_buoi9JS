/**
 * IPO
 * 
 * * Input:
 * soHaiChuSo = 0
 * tinhTong = 0
 * 
 * * Process
 * B1: Khởi tạo biến
 * B2: Tạo hàm tính trung bình
 *      //* lấy khi user đã click button
 *      B3: lấy giá trị từ form và lưu vào biến
 *      B4: công thức tính tổng 2 ký số
 *      B5: hiển thị kết quả
 * 
 * *Quy định thời điểm chạy hàm
 * B6: Gán hàm vào sự kiện click của button 
 * 
 * 
 * *Output
 * tinhTong
 */

// B1:
let soHaiChuSo = 0
let tinhTong = 0
let soHangDonVi = 0
let soHangChuc = 0 

//B2:
function tongHaiKySo() {
    // B3:
    soHaiChuSo = document.getElementById("BT5_input1").value
    // B4:
    tinhTong = 
    // B5: 
    document.getElementById("result5").innerHTML = `
    👉`
}

// B6:
document.getElementById("btnTinh5").onclick = tongHaiKySo