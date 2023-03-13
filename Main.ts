import {LoverManager} from "./LoverManager";
import {Lover} from "./Lover";
export type T = "Kim Ngưu" | "Bạch Dương" | "Cự Giải";

let input = require('readline-sync');
let lover1 = new Lover(1,"hoa","Kim Ngưu","hà nội",2000,"hoa");
let loverManager = new LoverManager();
loverManager.addLover(lover1);
function main(){
    let choice = -1;
    do {
        console.log(`
        -------Menu chính ------
        1.Hiển thị danh sách
        2.Thêm mới
        3.Tìm kiếm
        4.Cập nhật
        5.Xoá
        0.Thoát`
        )
        choice = +input.question('Enter choice: ');
        switch (choice){

            case 1:
                show();
                break;
            case 2:
                add();
                break;
            case 3:
                search();
                break;
            case 4:
                update();
                break;
            case 5:
                dele();
                break;

        }
    }
    while(choice !== 0);

}
function show(){
    console.log(loverManager.showLover());
}
function add(){
    let id = +input.question('Nhập id\n');
    let name = input.question('Nhập tên người yêu \n');
    let zodiac: T = input.question('Nhập cung hoàng đạo:Kim Ngưu | Bạch Dương | Cự Giải  \n');
    let homeTown : string = input.question('Nhập quê quán\n');
    let yearOfBirth:number = +input.question('Nhập số năm sinh\n');
    let hobby: string = input.question('Nhập sở thích\n');
    let newLover = new Lover(id,name,zodiac,homeTown,yearOfBirth,hobby)
    loverManager.addLover(newLover);
}
function search(){
    let name = input.question('Nhập tên người yêu \n');
    console.log(loverManager.searchLover(name));
}
function update(){
    let id = +input.question('Nhập id\n');
    let newName = input.question('Nhập tên người yêu \n');
    let newZodiac: T = input.question('Nhập cung hoàng đạo:Kim Ngưu | Bạch Dương | Cự Giải  \n');
    let newHomeTown : string = input.question('Nhập quê quán\n');
    let newYearOfBirth:number = +input.question('Nhập số năm sinh\n');
    let newHobby: string = input.question('Nhập sở thích\n');
    loverManager.editLover(id,newName,newZodiac,newHomeTown,newYearOfBirth,newHobby);
}
function dele(){
    let id = +input.question('Nhập id\n');
    loverManager.deleteLover(id);
}
main();