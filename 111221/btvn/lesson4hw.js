// // 2
// class Clock{
//     constructor( template ) {
//         this.template = template;
//     }
//     render(){
//         let date = new Date();
    
//         let hours = date.getHours()
//         if (hours < 10) hours = "0" + hours;
    
//         let mins =  date.getMinutes()
//         if (mins < 10) mins = "0" + mins
    
//         let secs = date.getSeconds();
//         if (secs < 10) "0" + secs;
    
//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs) ;
//         console.log (output) ;
//     }
//     stop () {
//         clearInterval(this.timer) ;
//     }   
//     start () {
//         this.render()
//         this.timer = setInterval(() => this.render, 1000);
//     }
// }
// class ExtendedClock extends Clock {
//     constructor(template) {
//         super(template);
//         this.template = template;
//     }
//     render(){
//         let date = new Date();
    
//         let hours = date.getHours()
//         if (hours < 10) hours = "0" + hours;
    
//         let mins =  date.getMinutes()
//         if (mins < 10) mins = "0" + mins
    
//         let secs = date.getSeconds();
//         if (secs < 10) "0" + secs;
        
//         let milliseconds = date.getMilliseconds()
//         if (milliseconds < 10) milliseconds = "0" + milliseconds
//         else if (milliseconds < 100) milliseconds = "00" + milliseconds;

        
//         let output = this.template
//             .replace("h", hours)
//             .replace("m", mins)
//             .replace("s", secs)
//             .replace("ms", milliseconds);

//         console.log(output) ;
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1);
//     }
// }
// let msclock = new ExtendedClock("h:m:s:ms");
// e chỉ biết copy từ trên xuống dưới thôi
// --------------------------------------------------------
//3
class fraction {
    constructor(numerator, denominator){
        if (typeof numerator == "number" && typeof denominator == "number"){
            if (denominator === 0){
                console.log("ko dc dau ban tre")
            }else{
            this.numerator = numerator
            this.denominator = denominator
            }
        }
        this.simplify()
    }
    gcd(a,b) {
        a = Math.abs(a);
        b = Math.abs(b);
        if (b > a) {var temp = a; a = b; b = temp;}
        while (true) {
            if (b == 0) return a;
            a %= b;
            if (a == 0) return b;
            b %= a;
        }
    }
    findLCM(a, b){
        return Math.abs(a*b)/this.gcd(a,b)
    }
    simplify(){
        let gcf = this.gcd(this.numerator, this.denominator)
        this.numerator = this.numerator/gcf 
        this.denominator = this.denominator/gcf 
    }
    add(a){
        let final = new fraction(this.numerator, this.denominator)
        let b = this.findLCM(a.denominator, this.denominator)
        console.log(b)
        final.numerator = this.numerator*(b/this.denominator) + a.numerator*(b/a.denominator)
        final.denominator = b
        final.simplify()
        return final
    }
    subtract(a){
        let final = new fraction(this.numerator, this.denominator)
        let b = this.findLCM(a.denominator, this.denominator)
        final.numerator = this.numerator*(b/this.denominator) - a.numerator*(b/a.denominator) 
        final.denominator = b
        final.simplify()
        return final
    }
    times(a){
        let final = new fraction(this.numerator, this.denominator)
        final.numerator = this.numerator * a.numerator
        final.denominator = this.denominator * a.denominator
        final.simplify()
        return final
    }
    divide(a){
        let final = new fraction(this.numerator, this.denominator)
        final.numerator = this.numerator * a.denominator
        final.denominator = this.denominator * a.numerator
        final.simplify()
        return final
    }
}

let a = new fraction(3, 8)
let b = new fraction(1, 8)
console.log(a.add(b))
console.log(a.subtract(b))
console.log(a.times(b))
console.log(a.divide(b))
