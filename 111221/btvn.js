class Clock {
    constructor({ template }) {
        this.template = template;
    }


    render() {
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if(secs < 10) secs = '0' + secs;

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
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };

// Bài 3
class Fraction {
    constructor(tu, mau) {
        if (typeof tu === 'number' && typeof mau === 'number') {  
            this.tu = tu;
            this.mau = mau;
            if (this.mau === 0) {
                throw new Error('Invalid Fraction')
            }
        }
        this.rutgon();
    }
    static ucln(a, b) {    
        return b ? Fraction.ucln(b, a % b) : a;
    }
    static bcnn(a, b) {  
        return Math.abs(a * b) / Fraction.ucln(a, b);
    }
    rutgon() {    
        let gcd = Fraction.ucln(this.tu, this.mau);
        this.tu /= gcd;
        this.mau /= gcd;
    }
    cong(n) {    
        let kq = new Fraction(this.tu, this.mau); 
        let lcm = Fraction.bcnn(kq.mau, n.mau);
        kq.tu = kq.tu * (lcm / kq.mau) + n.tu * (lcm / n.mau);
        kq.mau = lcm;
        kq.rutgon();
        return kq;
    }
    tru(n) {    
        let kq = new Fraction(this.tu, this.mau);
        let lcm = Fraction.bcnn(kq.mau, n.mau);
        kq.tu = kq.tu * (lcm / kq.mau) - n.tu * (lcm / n.mau);
        kq.mau = lcm;
        kq.rutgon();
        if (kq.mau < 0) {  
            kq.mau *= -1;
            kq.tu *= -1;
        }
        return kq;
    }
    nhan(n) {    
        let kq = new Fraction(this.tu, this.mau); 
        kq.tu *= n.tu;
        kq.mau *= n.mau;
        kq.rutgon();
        return kq;
    }
    chia(n) {   
        let kq = new Fraction(this.tu, this.mau); 
        kq.tu *= n.mau;
        kq.mau *= n.tu;
        kq.rutgon();
        return kq;
    }
}

let t1 = window.prompt("Enter first numerator: ")
let m1 = window.prompt("Enter first denominator: ")
let t2 = window.prompt("Enter second numerator: ")
let m2 = window.prompt("Enter second denominator: ")
let p1 = new Fraction(parseInt(t1), parseInt(m1));
let p2 = new Fraction(parseInt(t2), parseInt(m2));
console.log(p1.cong(p2));
console.log(p1.tru(p2));
console.log(p1.nhan(p2));
console.log(p1.chia(p2));