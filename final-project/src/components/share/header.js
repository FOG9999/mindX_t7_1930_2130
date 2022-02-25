import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (<div style={{ width: '100%', color: 'white' }}>
            <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                <img src="../../../assets/logo.png" style={{ width: '160px', height: '40px' }} />
                <div>
                    <input type="search" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" style={{ width: '600px' }} />
                    <button style={{ width: '80px' }}>search</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '8px' }}>
                        <div style={{ fontSize: '32px'}}></div>
                        <div style={{ fontSize: '16px'}}>About us</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontSize: '32px'}}></div>
                        <div style={{ fontSize: '16px'}}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontSize: '32px'}}></div>
                        <div style={{ fontSize: '16px'}}>Cart</div>
                    </div>
                </div>
            </header>
            <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                <div style={{ padding: '4px 12px' }}>ĐIỆN THOẠI</div>
                <div style={{ padding: '4px 12px' }}>LAPTOP</div>
                <div style={{ padding: '4px 12px' }}>LINH KIỆN</div>
            </nav>
        </div>);
    }
}

export default Header;