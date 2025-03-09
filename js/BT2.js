/**
 * IPO
 * 
 * * Input:
 * num1, num2, num3, num4, num5
 * 
 * * Process
 * B1: Khởi tạo biến
 * B2: Tạo hàm tính trung bình
 *      //* lấy khi user đã click button
 *      B3: lấy giá trị từ form và lưu vào biến
 *      B4: tính trung bình
 *      B5: hiển thị kết quả
 * 
 * *Quy định thời điểm chạy hàm
 * B6: Gán hàm vào sự kiện click của button 
 * 
 * 
 * *Output
 * sumNum
 */

// B1:
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let sumNum = 0

// B2:
function tinhDiemTrungBinh() {
    // B3: 
    num1 = document.getElementById("BT2_input1").value
    num2 = document.getElementById("BT2_input2").value
    num3 = document.getElementById("BT2_input3").value
    num4 = document.getElementById("BT2_input4").value
    num5 = document.getElementById("BT2_input5").value
    // B4:
    sumNum = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /5
    // B5:
    document.getElementById("result2").innerHTML = "Điểm trung bình là: " + sumNum
}
// B6:
document.getElementById("btnTinh2").onclick = tinhDiemTrungBinh;