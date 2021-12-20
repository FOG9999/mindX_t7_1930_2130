function gcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

class PhanSo {
    constructor(numerator = Infinity, denominator = Infinity) {
        if (typeof numerator != 'number' || typeof denominator != 'number' || denominator === 0) {
            this.valid = 0;
        } else {
            this.numerator = numerator;
            this.denominator = denominator;
            this.valid = 1;
        }
    }
}

function convertToFraction(str) {
    str = str.split("/", 2);
    f = new PhanSo(parseInt(str[0]), parseInt(str[1]));
    return f;
}

function reduceFraction(a) {
    let commonGcd = gcd(a.numerator, a.denominator);
    a.numerator /= commonGcd;
    a.denominator /= commonGcd;
    return a;
}

function operator(fraction1, fraction2, operation) {
    try {
        if (fraction1.constructor.name != "PhanSo" || fraction2.constructor.name != "PhanSo") {
            throw new Error("Unknown type of number.");
        }
        if (!fraction1.valid || !fraction2.valid) {
            throw new Error("Invalid fraction.")
        }
        if (operation != "+" && operation != "-" && operation != "*" && operation != "/") {
            throw new Error("Unknown operation.");
        }
        let ans = new PhanSo()
        switch (operation) {
            case "+":
                ans.numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
                ans.denominator = fraction1.denominator * fraction2.denominator;
                ans = reduceFraction(ans);
                return ans;
            case "-":
                ans.numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
                ans.denominator = fraction1.denominator * fraction2.denominator;
                ans = reduceFraction(ans);
                return ans;
            case "*":
                ans.numerator = fraction1.numerator * fraction2.numerator;
                ans.denominator = fraction1.denominator * fraction2.denominator;
                ans = reduceFraction(ans);
                return ans;
            case "/":
                ans.numerator = fraction1.numerator * fraction2.denominator;
                ans.denominator = fraction1.denominator * fraction2.numerator;
                ans = reduceFraction(ans);
                return ans;
        }
    } catch (err) {
        answerPanel.innerHTML += err + "<br>";
    }
}

var answerPanel = document.getElementById('answer-panel');
a = new PhanSo(4, 14);
b = new PhanSo(3, 5);
let answer = new PhanSo(0, 1);
answer = operator(a, b, "+");
console.log(answer);
answer = operator(a, b, "-");
console.log(answer);
answer = operator(a, b, "*");
console.log(answer);
answer = operator(a, b, "/");
console.log(answer);