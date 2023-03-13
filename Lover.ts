export type T = "Kim Ngưu" | "Bạch Dương" | "Cự Giải";
export class Lover {
    private _id: number;
    private _name: string;
    private _zodiac: T;
    private _homeTown: string;
    private _yearOfBirth: number;
    private _hobby: string;

    constructor(id: number, name: string, zodiac: T, homeTown: string, yearOfBirth: number, hobby: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): T {
        return this._zodiac;
    }

    set zodiac(value: T) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }

    getInfo() {
        return `Mã người yêu: ${this._id} | Tên người yêu: ${this.name} | Cung hoàng đạo : ${this.zodiac} |  Quê quán : ${this.homeTown} |
         Năm sinh: ${this.yearOfBirth} |  Sở thích: ${this.hobby} `
    }
}