import {Lover} from "./Lover";
export type T = "Kim Ngưu" | "Bạch Dương" | "Cự Giải";

export class LoverManager{
    private listLover : Lover[];

    constructor() {
        this.listLover = [];
    }
    getIndex(id:number){
        for (let i = 0; i < this.listLover.length; i++) {
            if(id == this.listLover[i].id){
                return i
            }
        }
        return  -1
    }
    showLover(){
        return this.listLover
    }
    searchLover(name:string){
        for (let i = 0; i < this.listLover.length; i++) {
            if(name == this.listLover[i].name){
                return this.listLover[i].getInfo();
            }
        }
        console.log('không có dữ liệu phù hợp');
    }
    addLover(item:Lover){
        this.listLover.push(item);
    }
    editLover(id:number, newName : string, newZodiac: T, newHometown:string, newYearOfBird:number, newHobby : string){
        for (let i = 0; i < this.listLover.length; i++) {
            if(id == this.listLover[i].id){
                return this.listLover[i] = new Lover(id,newName,newZodiac,newHometown,newYearOfBird,newHobby);
            }
        }
        console.log('Không tồn tại người yêu cần cập nhật')
    }
    deleteLover(id:number){
        for (let i = 0; i < this.listLover.length; i++) {
            if(id==this.listLover[i].id){
                return this.listLover.splice(i,1);

            }
        }
        console.log('Không tồn tại người yêu cần cập nhật')
    }

}