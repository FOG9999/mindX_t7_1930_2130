// // Bài 1

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(); // call đến constructor của class Animal
//         this.name = name;
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// alert(rabbit.name);

// Bài 2

class Clock {
    constructor(template) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor(template) {
        super(template);
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let ticks = date.getMilliseconds();
        if (ticks < 10) ticks = '000' + ticks;
        else if (ticks < 100) ticks = '00' + ticks;
        else if (ticks < 1000) ticks = '0' + ticks;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
            .replace('t', ticks);

        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1/20);
    }
}

let hehe = new ExtendedClock("h:m:s:t");
let hihi = new Clock("h:m:s");

// // Bài 3
// // e bo cuoc a a

// class PhanSo {
//     tuSo;
//     mauSo;
//     constructor(tuSo, mauSo) {
//         this.tuSo = tuSo;
//         this.mauSo = mauSo;
//         console.log(`${this.tuSo}/${this.mauSo}`) // 1/2 hay TuSo / MauSo
//     };

//     // timUSCLN(a, b) {
//     //     while (a != b) {
//     //         if (a > b) {
//     //             a -= b;
//     //         } else {
//     //             b -= a;
//     //         }
//     //     }
//     //     return a;
//     // };
     
//     toiGianPhanSo() {
//         var i = (function() {
//             while (tuSo != mauSo) {
//                 if (tuSo > mauSo) {
//                     tuSo -= mauSo;
//                 } else {
//                     mauSo -= tuSo;
//                 }
//             }
//             return tuSo;
//         })
//         this.tuSo = this.tuSo / i;
//         this.mauSo = this.mauSo / i;
//     };

//     congPhanSo(phanSo) {
//         // a/b + c/d = (ad + bc)/bd
//         let resultTuSo = (this.tuSo * phanSo.mauSo + this.mauSo * phanSo.tuSo);
//         let resultMauSo = this.mauSo * phanSo.mauSo;
//         let resultPhanSo = new PhanSo(resultTuSo, resultMauSo);
//         resultPhanSo.toiGianPhanSo();
//         return resultPhanSo;
//     };

//     truPhanSo(phanSo) {
//         // a/b - c/d = (ad - bc)/bd
//         let resultTuSo = (this.tuSo * phanSo.mauSo - this.mauSo * phanSo.tuSo);
//         let resultMauSo = this.mauSo * phanSo.mauSo;
//         let resultPhanSo = new PhanSo(resultTuSo, resultMauSo);
//         resultPhanSo.toiGianPhanSo();
//         return resultPhanSo;
//     };

//     nhanPhanSo(phanSo) {
//         let resultTuSo = this.tuSo * phanSo.tuSo;
//         let resultMauSo = this.mauSo * phanSo.mauSo;
//         let resultPhanSo = new PhanSo(resultTuSo, resultMauSo);
//         resultPhanSo.toiGianPhanSo();
//         return resultPhanSo;
//     };

//     chiaPhanSo(phanSo) {
//         let resultTuSo = this.tuSo * phanSo.mauSo;
//         let resultMauSo = this.mauSo * phanSo.tuSo;
//         let resultPhanSo = new PhanSo(resultTuSo, resultMauSo);
//         resultPhanSo.toiGianPhanSo();
//         return resultPhanSo;
//     };
// };

// let phanSoA = new PhanSo(1, 2);
// let phanSoB = new PhanSo(3, 4);
// console.log(phanSoA.truPhanSo(phanSoB));
