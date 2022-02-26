class Parent {
  #privateProp; // private propperty
  publicProp; // public property

  constructor() {
    this.#privateProp = "private";
    this.publicProp = "public";
  }

  getPrivatePropByNormalFunc() {
    // function ES5
    return this.#privateProp;
  }

  getPrivatePropByArrowFunc = () => {
    // arrow func ES6
    return this.#privateProp;
  };

  // set private propperty
  setPrivateProp(val) {
    this.#privateProp = val;
  }

  // private method
  #callPrivateMethod() {
    console.log("Parent private method");
  }

  abstractFunc; // propperty hoặc method để các class con kế thừa và ghi đè theo cách thể hiện của chúng
}

class Daughter extends Parent {
  constructor() {
    super(); // khi sử dụng từ khóa extends mà có viết constructor thì bắt buộc phải call super() để gọi đến constructor của class bố

    console.log(this);

    // override (ghi đè) method từ class bố
    this.getPrivatePropByArrowFunc = () => {
      return "daughter private: " + this.getPrivatePropByNormalFunc();
      /**
       * khi call super, thuộc tính private được khởi tạo, nhưng không thể bị truy cập từ Daughter hay các class con, mà chỉ được
       * lấy ra bằng cách this.getPrivatePropByNormalFunc();
       */
    };

    this.abstractFunc = () => {
      console.log("Daughter abstract function");
    };
  }
}

class Son extends Parent {
  age;
  #privateFund;

  constructor(age, income, overrideMethod) {
    // constructor với tham số
    super();
    this.age = age;
    this.#privateFund = income;

    // abstractFunc thể hiện khác nhau ở Daughter và Son
    if (overrideMethod) {
      this.abstractFunc = overrideMethod;
    } else {
      this.abstractFunc = (income) => {
        this.#privateFund += income;
        console.log("current asset: " + this.#privateFund);
      };
    }

    console.log(
      "try to access private prop by arrow function: " +
        this.getPrivatePropByArrowFunc()
    );
  }
}

const daughter = new Daughter(); // ---> constructor sẽ được gọi đến khi một instance mới của class được tạo ra
// console.log(daughter.getPrivatePropByArrowFunc());
/**
 * Result: 
 * Daughter {
      publicProp: 'public',
      getPrivatePropByArrowFunc: [Function: getPrivatePropByArrowFunc],
      abstractFunc: undefined
    }
    daughter private: private
 */

/**
 * NOTE: Khi chạy trên console Chrome, toàn bộ các thuộc tính của this sẽ được liệt kê kể cả private.
 */

// console.log(daughter.getPrivatePropByNormalFunc()); // private

let son = new Son(20, 1000);
console.log(son.abstractFunc(200)); // ---> sẽ có 1 dòng là undefined do abstractFunc k return cái j cả
