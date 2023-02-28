// import React from 'react';

function ProductRow(props){

    return(
        <tr>
            <td className={props.products.inStock ? "" : "outOfStock"}>{props.products.name}</td>
            <td>{props.products.price}</td>
            <td>{props.products.category}</td>
        </tr>
    )
}

export default ProductRow;