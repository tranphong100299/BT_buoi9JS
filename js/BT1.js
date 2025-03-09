/**
 * Input:
 * luongMotngay = 100000
 * soNgaylam = 0
 */ 

/**
 * Process:
 * B1: Khởi tạo biến và gán giá trị
 * B2: Tạo hàm tính lương:
 *  luong = luongMotngay * soNgaylam
 *      B3: Lấy giá trị từ form lưu vào biến
 *      B4: Tính lương
 *      B5: Hiển thị kết quả
 * B6:Gán hàm vào sự kiện click của button
 */

/**
 * Output:
 * luong 
 */


// B1:
let luongMotngay = 100000
let soNgaylam = 0
let luong = 0

// B2:
function tinhLuong() {
    // B3:
    luongMotngay = document.getElementById("BT1_input1").value
    soNgaylam = document.getElementById("BT1_input2").value
    // B4:
    luong = luongMotngay * soNgaylam

    // B5:
    document.getElementById("result1").innerHTML = "Tổng số lương là: "+ luong
}

// B6:
document.getElementById("btnTinh1").onclick = tinhLuong;



