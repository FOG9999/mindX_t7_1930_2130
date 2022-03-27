import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {
        loggedIn: false,
        userImg: "",
        displayMenu: false,
        isOnHomePage: false
        // searchKey: null
    }

    componentDidMount() {
        let object = JSON.parse(localStorage.getItem('userLoggedin'));
        // check nếu trên trang home thì gọi hàm onClick còn nếu k thì chuyển trang sang home-page
        let isOnHomePage = window.location.href.includes('home-page');
        this.setState({
            isOnHomePage
        })
        if (!object?.id) {
            this.setState({ loggedIn: false });
        } else {
            this.setState({ loggedIn: true, userImg: object.avatar });
        }
    }

    toggleMenu = () => {
        this.setState({ displayMenu: !this.state.displayMenu });
    }


    render() {
        return (
            <div className="container">
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <h4 className="alert-heading">
                        Sale 50%! <span className="badge badge-primary">All New Products</span>{" "}
                    </h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind
                        of content
                    </p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <nav className="navbar navbar-expand-xl navbar navbar-dark bg-dark text-white w-100 p-3">
                    <Link className="navbar-brand" to="/home-page">
                        NCT-JSI01
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className="nav-link" id="phone" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.props.onClick}>
                                    {this.state.isOnHomePage ? 'Điện thoại' : <Link to="/home-page?category=phone">
                                        Điện thoại
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="ipad" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                {this.state.isOnHomePage ? 'IPad' : <Link to="/home-page?category=ipad">
                                        Máy tính bảng
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="accessory" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                {this.state.isOnHomePage ? 'Phụ Kiện' : <Link to="/home-page?category=accessory">
                                        Phụ kiện
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="charger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                {this.state.isOnHomePage ? 'Sạc' : <Link to="/home-page?category=charger">
                                        Sạc
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="headphone" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                    {this.state.isOnHomePage ? 'Tai nghe' : <Link to="/home-page?category=headphone">
                                        Tai nghe
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="micro" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                    {this.state.isOnHomePage ? 'Microphone' : <Link to="/home-page?category=micro">
                                        Micro
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" id="bluetooth" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                    {this.state.isOnHomePage ? 'Bluetooth' : <Link to="/home-page?category=bluetooth">
                                        Bluetooth
                                    </Link>}
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className="nav-link" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onClick={this.props.onClick}>
                                {this.state.isOnHomePage ? 'Tất cả' : <Link to="/home-page">
                                        Tất cả
                                    </Link>}
                            </div>
                        </li>
                        </ul>                        
                        <input className="form-control-sm mr-sm-2" style={{color: "black"}} value={this.props.searchKey} onChange={this.props.handleChange} onKeyDown={this.props.onEnter} placeholder="Search" aria-label="Search" />
                        <Link className="nav-link mx-1 text-light h5 my-auto" to="/my-cart"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                    {
                        this.state.loggedIn ?
                            <div style={{ position: "relative" }}>
                                <img className="imgIcon" src={this.state.userImg} onClick={() => this.toggleMenu()} />
                                <div style={{ display: this.state.displayMenu ? 'block' : 'none', position: "absolute", display: "block", zIndex: "1000", backgroundColor: "white", width: "200px", color: "black", cursor: "pointer" }}>
                                    <li className="toggle-btn" style={{ display: this.state.displayMenu ? 'block' : 'none', border: "2px black solid", padding: "10px 25px", borderRadius: "5px" }}><Link to="/profile">Profile</Link></li>
                                    <li className="toggle-btn" style={{ display: this.state.displayMenu ? 'block' : 'none', borderRight: "2px black solid", borderBottom: "2px black solid", borderLeft: "2px black solid", borderImage: "initial", padding: "10px 25px", borderRadius: "5px" }}>Log Out</li>
                                </div>
                            </div> : <div className="text-end">
                                <button type="button" className="btn btn-outline-light mr-2">
                                    Đăng nhập
                                </button>
                                <button type="button" className="btn btn-warning">
                                    Đăng kí
                                </button>
                            </div>
                    }

                </nav>
            </div>
        );
    }
}

export default Header;