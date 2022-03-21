import { Menu } from '../models/Menu.js';
import { MonAn } from '../models/MonAn.js';
import { DANH_SACH_MON_AN } from '../util/settings.js';

let menu = new Menu();
// menu.danhSachMonAn
menu.layLocalStorage();
menu.renderMonAn('#tbodyFood');


window.xoaMonAn = (maMonClick) =>{
    // alert(maMonClick);
    menu.xoaMonAn(maMonClick);
    menu.renderMonAn('#tbodyFood');
    // menu.luuLocalStorage();
}

window.suaMonAn = (maMon) => {
   document.querySelector('#exampleModalLabel').innerHTML = 'Cập nhật món ăn';
   let monAnChinhSua = menu.layThongTinMonAn(maMon);
   //Load dữ liệu của món ăn click lên các thẻ select,input,textarea của #foodForm
   let arrInput = document.querySelectorAll('#foodForm input,#foodForm select,#foodForm textArea');
   for(let input of arrInput){
       let {id} = input;
       input.value = monAnChinhSua[id];
   }

}


document.querySelector('#btnCapNhat').onclick = function () {
    //Lấy tất cả dữ liệu trên giao diện đưa vào đối tượng cập nhật trong mảng danhSachMonAn
    let monAnChinhSua = new MonAn();
    let arrInput = document.querySelectorAll('#foodForm input,#foodForm select,#foodForm textArea');
    for(let input of arrInput) {
        let {id,value} = input;
        monAnChinhSua[id] = value;
    };

    menu.capNhatMonAn(monAnChinhSua);
    menu.renderMonAn('#tbodyFood');

}


document.querySelector('#selLoai').onchange = () => {
    let value = document.querySelector('#selLoai').value;

    
    menu.filterMonAn(value,'#tbodyFood');
}















// //Cách 1: 
// renderMonAn(menu.danhSachMonAn);


// function renderMonAn (mangMon) {
//     //Tạo table món ăn từ mảng món ăn lấy ra từ localstorage
//     console.log('mangMon', mangMon);
//     let htmlContent = '';

//     //Dữ liệu lấy ra từ storage sẽ bị mất tất cả phương thức
//     for (let monAnStore of mangMon) {
//         let monAn = new MonAn(); //{maMon:'',tenMon:'',tinhGiaKhuyenMai: f() {}}
//         monAn = {...monAn,...monAnStore}      
//         htmlContent += `
//             <tr>
//                 <td>${monAn.maMon}</td>
//                 <td>${monAn.tenMon}</td>
//                 <td>${monAn.loaiMon}</td>
//                 <td>${monAn.khuyenMai}</td>
//                 <td>${monAn.giaMon}</td>
//                 <td>${monAn.tinhGiaKhuyenMai()}</td>
//                 <td>${monAn.maTinhTrang}</td>
//                 <td>
//                     <button class="btn btn-danger" >Xoá</button>
//                     <button class="btn btn-primary ml-2" >Sửa</button>
//                 </td>
//             </tr>
//         `
//     }
//     document.querySelector('#tbodyFood').innerHTML = htmlContent;
// }
