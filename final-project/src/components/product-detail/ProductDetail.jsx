import { CheckCircleFilled } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React, { Component } from 'react';
import Specification from './Specification';
import './ProductDetail.css';
import { toast } from 'react-toastify';
// import * as CONSTANTS from '../../constants'
import { productService } from '../../apis/ProductService';

const PRODUCT = {
    colors: ['yellow', 'white', 'red', 'pink'],
    created_date: '2022-02-24',
    description:
        'Maiores enim architecto nesciunt nobis. Ex soluta temporibus itaque est veritatis. Ullam aut deleniti voluptas consequuntur enim cumque quis consequatur. Cupiditate optio blanditiis eaque necessitatibus natus delectus praesentium temporibus.\n \rTempora dolores molestiae consequatur ut temporibus sit voluptatem. Dolore molestiae sint eum fuga consequatur nulla. Assumenda dolor necessitatibus aut. Et explicabo pariatur voluptates odio.\n \rNostrum sed laborum aspernatur quo eius corporis vel iste corporis. Porro nobis et commodi. Autem in natus sunt est voluptatum. Nam quibusdam vero non eaque iusto sed.',
    id: '6bc12e87-a679-4d09-8f28-4e10ae7e1c16',
    images: [
        'http://placeimg.com/640/480',
        'http://placeimg.com/640/480',
        'http://placeimg.com/640/480',
        'http://placeimg.com/640/480',
    ],
    last_updated: '2022-02-24',
    price: '586.00',
    seller: '4ec2bcef-ddb9-4519-a600-962c52b6cfd1',
    stocks: 30,
    title: 'Handcrafted Steel Mouse',
    type: 'phone',
    listOfSpecs: [
        ['512GB', '2.4GHz Quad Core', '8GB RAM | 512Gb SSD'],
        ['512GB', '2.4GHz Quad Core', '8GB RAM | 512Gb SSD'],
        ['512GB', '2.4GHz Quad Core', '8GB RAM | 512Gb SSD'],
        ['512GB', '2.4GHz Quad Core', '8GB RAM | 512Gb SSD'],
    ],
};

class ProductDetail extends Component {
    state = {
        product: PRODUCT,
        selectedImgIndex: 0,
        selectedColorIndex: 0,
        selectedSpecIndex: 0,
    };

    componentDidMount() {
        // const productId = this.props.params.match.productId;
        // productService.getProductDetail(productId, async (res) => {
        //     if (res.error) {
        //         toast.error(res.errorMessage);
        //         // this.setState({
        //         //   loading: false,
        //         // });
        //     } else {
        //         let data = await res;
        //         console.log(data);
        //         this.setState({
        //             product: data,
        //         });
        //     }
        // });
    }

    renderProductImages = () => {
        return this.state.product.images.map((img, index) => {
            return (
                <div className="single-img-container col" key={index}>
                    <Image width={'100%'} height={'100px'} src={img} />
                </div>
            );
        });
    };

    renderProductSpecs = () => {
        return this.state.product.listOfSpecs.map((spec, index) => {
            return (
                <Specification
                    selectMe={this.onSelectSpec}
                    index={index}
                    spec={spec}
                    selectedSpec={this.state.selectedSpecIndex === index}
                    key={index}
                />
            );
        });
    };

    renderColors = () => {
        return this.state.product.colors.map((color, index) => {
            return (
                <Card
                    hoverable={true}
                    bordered={true}
                    key={index}
                    onClick={() => this.onSelectColor(index)}
                >
                    <div
                        className={
                            this.state.selectedColorIndex === index
                                ? 'row selected'
                                : 'row not-selected'
                        }
                    >
                        <div className="col-2 justify-content-center align-items-center">
                            <div
                                style={{
                                    width: '20px',
                                    height: '100%',
                                    backgroundColor: color,
                                    borderRadius: '50%',
                                }}
                            ></div>
                        </div>
                        <div className="col">{color}</div>
                        {this.state.selectedColorIndex === index ? (
                            <div>
                                <CheckCircleFilled
                                    style={{ color: 'green', fontSize: '20px' }}
                                />
                            </div>
                        ) : null}
                    </div>
                </Card>
            );
        });
    };

    onSelectImage = (imgIndex) => {
        this.setState({
            selectedImgIndex: imgIndex,
        });
    };

    onSelectColor = (colorIndex) => {
        this.setState({
            selectedColorIndex: colorIndex,
        });
    };

    onSelectSpec = (specIndex) => {
        this.setState({
            selectedSpecIndex: specIndex,
        });
    };

    render() {
        return (
            <div
                className="row"
                style={{ maxWidth: '1400px', margin: 'auto', padding: '20px' }}
            >
                <div className="col-md-6">
                    <div className="img-container">
                        <Image
                            src={this.state.product.images[0]}
                            className="w-100"
                        ></Image>
                    </div>
                    <div className="list-img-container row mt-2">
                        <Image.PreviewGroup>
                            {this.renderProductImages()}
                        </Image.PreviewGroup>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-title mb-3">
                        {this.state.product.title}
                    </div>
                    <p>{this.state.product.description}</p>
                    <div className="py-2">
                        <b>Lựa chọn màu: </b>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        {this.renderColors()}
                    </div>
                    <div className="py-2">
                        <b>Lựa chọn cấu hình: </b>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        {this.renderProductSpecs()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
