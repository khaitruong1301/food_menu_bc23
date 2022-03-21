import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";
//Lưu ý: Các class trong model sẽ không chứa code DOM bất kỳ giao diện nào, nếu muốn thực hiện DOM trong model phải chuyển tất cả selector, id, ... thành tham số 
export class Menu {
    danhSachMonAn = []; //mảng chứa các object monAn
    constructor() {
    }
    themMonAn = (monAn) => {
        this.danhSachMonAn.push(monAn);
        return this.danhSachMonAn;
    }
    xoaMonAn = (maMon) => {
        this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.maMon !== maMon);
        return this.danhSachMonAn;
    }
    luuLocalStorage = () => {
        //Lấy this.danhSachMonAn => biến thành chuỗi và lưu vào localstorage
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn);
    }
    layLocalStorage = () => {
        if (localStorage.getItem(DANH_SACH_MON_AN)) {
            let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
            this.danhSachMonAn = JSON.parse(sMangMonAn);
        }
    }
    renderMonAn = (selector) => {
        //Tạo table món ăn từ mảng món ăn lấy ra từ localstorage

        let htmlContent = '';

        //Dữ liệu lấy ra từ storage sẽ bị mất tất cả phương thức
        for (let monAnStore of this.danhSachMonAn) {
            let monAn = new MonAn(); //{maMon:'',tenMon:'',tinhGiaKhuyenMai: f() {}}
            monAn = { ...monAn, ...monAnStore }
            htmlContent += `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loaiMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.tinhGiaKhuyenMai()}</td>
                    <td>${monAn.maTinhTrang}</td>
                    <td>
                        <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMon}')" >Xoá</button>
                        <button data-toggle="modal" data-target="#exampleModal" onclick="suaMonAn('${monAn.maMon}')" class="btn btn-primary ml-2" >Sửa</button>
                    </td>
                </tr>
            `
        }
        document.querySelector(selector).innerHTML = htmlContent;
    }

    layThongTinMonAn = (maMon) => {//2
        //this.danhSachMonAn = [{maMon:1,tenMon:'A'},{maMon:2,tenMon:'B'},{maMon:3,tenMon:'C'}]
        let monAn = this.danhSachMonAn.find(mon => mon.maMon == maMon);
        return monAn;
    }

    capNhatMonAn = (monAnChinhSua) => {//Dữ liệu người dùng đã thay đổi
        //Tìm ra món ăn trong mảng
        let monAnCapNhat = this.layThongTinMonAn(monAnChinhSua.maMon);
        //Cập nhật tất cả giá trị của người dùng sửa vào monAnCapNhat

        // monAnCapNhat.tenMon = monAnChinhSua.tenMon;
        for (let key in monAnChinhSua) {
            monAnCapNhat[key] = monAnChinhSua[key];
        }
    }


    filterMonAn = (loaiMon, selector) => {
        //backup lại dữ liệu trước khi filter
        let dsMonAn = [...this.danhSachMonAn];
        if (loaiMon !== 'all') {
            this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.loaiMon == loaiMon);
            //Sau khi giao diện hiển thị restore lại dữ liệu cũ
        }
        this.renderMonAn(selector);
        this.danhSachMonAn = dsMonAn;

    }


}