import { CheckCircleFilled } from '@ant-design/icons';
import { Card, Image, Spin } from 'antd';
import React, { Component } from 'react';
import Specification from './Specification';
import './ProductDetail.css';
import { toast } from 'react-toastify';
// import * as CONSTANTS from '../../constants'
import { productService } from '../../apis/ProductService';
import Header from '../header/Header';

class ProductDetail extends Component {
    state = {
        product: null,
        selectedImgIndex: 0,
        selectedColorIndex: 0,
        selectedSpecIndex: 0,
        productId: null,
        loading: false
    };

    componentDidMount() {
        this.setState({
            loading: true
        })
        let productId = new URLSearchParams(window.location.search).get('id');
        productService.getProductDetail(productId, async (res) => {
            if (res.error) {
                toast.error(res.errorMessage);
                // this.setState({
                //   loading: false,
                // });
            } else {
                let data = await res;
                console.log(data);
                this.setState({
                    productId,
                    loading: false,
                    product: this.transformProductData(data),
                });
            }
        });
    }

    transformProductData = (dataBackend) => {
        dataBackend.images = JSON.parse(dataBackend.images);
        dataBackend.listSpecs = JSON.parse(dataBackend.listSpecs);
        return dataBackend;
    }

    renderProductImages = () => {
        return this.state.product.images.map((img, index) => {
            return (
                <div className="single-img-container col" key={index} style={{ minWidth: '150px' }}>
                    <Image width={'100%'} height={'100px'} src={img} />
                </div>
            );
        });
    };

    renderProductSpecs = () => {
        return this.state.product.listSpecs.map((spec, index) => {
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
                    className="my-1"
                >
                    <div
                        className={
                            this.state.selectedColorIndex === index
                                ? 'row selected'
                                : 'row not-selected'
                        } style={{ width: '150px' }}
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
                        <div className="col row">
                            <div className="col">
                                {color}
                            </div>
                            {this.state.selectedColorIndex === index ? (
                                <div className='col'>
                                    <CheckCircleFilled
                                        style={{ color: 'green', fontSize: '20px' }}
                                    />
                                </div>
                            ) : null}
                        </div>
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
            <Spin spinning={this.state.loading} size="default">
                <Header />
                {
                    this.state.product ? <div
                        className="row container"
                        style={{ margin: 'auto', padding: '20px' }}
                    >
                        <div className="col-md-6">
                            <div className="img-container">
                                <Image
                                    src={this.state.product.images[0]}
                                    className="w-100"
                                ></Image>
                            </div>
                            <div className="list-img-container d-flex mt-2" style={{ overflowX: 'scroll' }}>
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
                    </div> : null
                }

            </Spin>
        );
    }
}

export default ProductDetail;
