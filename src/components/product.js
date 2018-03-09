import React, { Component, Fragment } from 'react';
import style from './product.css';
import PropTypes from 'prop-types';


class Product extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className={style.product}>

                <h2>{data.name}</h2>
                <p>{data.desc}</p>
                <div>{data.price}</div>
                <div>
                    <button className={ "ctaButton " + style.ctaButton }>Details</button>
                </div>
            </div>

        );
    }
}

Product.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string,
        price: PropTypes.any
    })
};


export default Product;

