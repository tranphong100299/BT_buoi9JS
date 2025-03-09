/**
 * IPO
 * 
 * * Input:
 * chieuDai = 0
 * chieuRong = 0
 * chuViHCN = 0
 * dienTichHCN = 0
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
 * chuViHCN
 * dienTichHCN
 */

// B1:
let chieuDai = 0
let chieuRong = 0
let chuViHCN = 0
let dienTichHCN = 0

// B2:
function tinhChuViDienTich() {
    // B3:
    chieuDai = document.getElementById("BT4_input1").value
    chieuRong = document.getElementById("BT4_input2").value
    // B4:
    chuViHCN = (Number(chieuDai) + Number(chieuRong)) * 2
    dienTichHCN = chieuDai * chieuRong
    // B5:
    document.getElementById("result4").innerHTML = `
    Chu vi HCN là: ${chuViHCN}
    <br>
    Diện tích HCN là: ${dienTichHCN}
    `
}

// B6:
document.getElementById("btnTinh4").onclick = tinhChuViDienTich
