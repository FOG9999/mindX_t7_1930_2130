import { CheckCircleFilled } from "@ant-design/icons";
import { Card } from "antd";
import React, { Component } from "react";

class Specification extends Component {
    renderSpec = () => {
        return this.props.spec.map((sp, ind) => {
            return (
                <div className="m-2" key={ind} style={{ opacity: this.props.selectedSpec ? 1 : 0.5, fontWeight: 700 }}>
                    {sp}
                </div>
            );
        });
    };

    render() {
        return (
            <Card style={{ width: "250px", marginTop: "10px", marginBottom: "10px" }} hoverable={true} bordered={true} onClick={() => this.props.selectMe(this.props.index)}>
                <div className="row">
                    <div className="col-10">{this.renderSpec()}</div>
                    <div className="col-2 p-2">{this.props.selectedSpec ? <CheckCircleFilled style={{ color: "green", fontSize: "20px" }} /> : null}</div>
                </div>
            </Card>
        );
    }
}

export default Specification;
