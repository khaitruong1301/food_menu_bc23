/* 
    Lập trình hướng đối tượng OOP (object oriented programming) 
    Hướng đối tượng có mấy tính chất:
    + Tính trừu tượng (Abstraction): Loại bỏ những thứ phức tạp không cần thiết của đối tượng, chỉ tập trung vào những gì cốt lõi và quan trọng, tổ chức thành các thuộc tính và phương thức xử lý trong lập trình.
    + Tính đóng gói (encapsulation): Tính chất che giấu thông tinh và những xử lý bên trong của đối tượng. Các đối tượng khác không thể truy xuất đến được. Ví dụ: Thuộc tính của object nào thì object đó mới có thể truy xuất thay đổi, phương thức của object nào thì phải thông qua object đó mới có thể gọi được.
    + Tính kế thừa (inheritance): Các class con có thể kế thừa các thuộc tính và phương thức từ class cha. Có thể định nghĩa lại các phương đó (overide - ghi đè phương thức)
    + Tính đa hình (polymorphism): Javascript không hổ trợ tính đa hình của hướng đối tượng.
*/

//ES5
function SinhVien (maSV,tenSV) { //SinhVien gọi là tên lớp (prototype)
    this.maSinhVien = maSV; //Thuộc tính
    this.tenSinhVien = tenSV;
    this.hienThiThongTin = function () { //Phương thức
        console.log('Mã sinh viên',this.maSinhVien);
        console.log('Tên sinh viên',this.tenSinhVien);
    }
}
let sv = new SinhVien (1,'Nguyễn Văn A'); 
console.log('sv',sv);
// sv.maSinhVien = 1;
// sv.tenSinhVien = 'Nguyễn Văn A';

//ES6
class SinhVienES6 {
    maSinhVien = '';
    tenSinhVien = '';
    constructor(maSV,tenSV) {
        this.maSinhVien = maSV;
        this.tenSinhVien = tenSV;
    }
    //thuộc tính là function
    hienThiTT  = function () {
        console.log('Mã sinh viên',this.maSinhVien);
        console.log('Tên sinh viên',this.tenSinhVien);
    }
    hienThiTTSV = () => {
        console.log('Mã sinh viên',this.maSinhVien);
        console.log('Tên sinh viên',this.tenSinhVien);
    }
    //Phương thức
    hienThiThongTin() {
        console.log('Mã sinh viên',this.maSinhVien);
        console.log('Tên sinh viên',this.tenSinhVien);
    }
}

let sv2 = new SinhVienES6(1,'Nguyễn Văn Tèo');
sv2.hienThiThongTin();
sv2.hienThiTT();
// console.log(sv2)

/*
    Kỹ thuật kế thừa trong hướng đối tượng
*/

class NguoiDung {
    taiKhoan ='';
    matKhau ='';
    email = '';
    soDienThoai = '';
    constructor(taiKhoan,email) {
        this.taiKhoan = taiKhoan;
        this.email = email;
    }
    dangNhap() {
        console.log('Đăng nhập')
    }
    dangXuat() {
        console.log('Đăng xuất')
    }
    hienThiThongTin () {
        console.log('taiKhoan',this.taiKhoan);
        console.log('email',this.email);
    }
}

class HocVien extends NguoiDung {
    danhSachLopHoc = ['FE','BE'];
    constructor(taiKhoan,email) {
        super(taiKhoan,email);
    }
    hienThiThongTin() {
        super.hienThiThongTin();
        console.log('Danh sách lớp học', this.danhSachLopHoc);
    }

}
let hocVien = new HocVien('admin','admin@gmail.com');

hocVien.hienThiThongTin();
// console.log(hocVien);
// console.log('hocVien',hocVien);

