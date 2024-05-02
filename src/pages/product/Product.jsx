import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../constants/chartData';

const Product = () => {
    const title = 'Sales Performance';

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>

                <Link to='/newproduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title={title} data={productData} xDataKey='name' dataKey='Sales'/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/images/hp_laptop.jpg" alt="" className="productInfoImage" />
                        <span className="productName">HP Laptops</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom"></div>
        </div>
    )
}

export default Product