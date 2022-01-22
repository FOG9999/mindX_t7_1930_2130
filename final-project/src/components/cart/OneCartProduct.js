import React from 'react';

export default function OneCartProduct(props) {
  return (
    <div className="product">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWLAwg4bEAIhAyJ1lgI1F-Xlwx97SThFEsQ&usqp=CAU"
          className="product-image inline"
        />
        <div className="inline">
          <p>
            <b>iPhone X 64GB</b>
          </p>
          <div>Màu</div>
        </div>
      </div>
      <p>29.990.000 đ</p>
      <div className="no-of-products">
        <span style={{ padding: '0px 10px' }}>
          <button>-</button>
        </span>
        <p style={{ paddingTop: '3px' }}>1</p>
        <span style={{ padding: '0px 10px' }}>
          <button>+</button>
        </span>
      </div>
    </div>
  );
}
