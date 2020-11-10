import React from 'react'
import '../styles/Button.css'

function Button(props) {
    return (
        <div className="btn">
            <a href="https://pay.hotmart.com/B40493819T?off=dv65ktmt&sck=HOTMART_PRODUCT_PAGE&bid=1605027137430">    
                {props.text}
            </a>
        </div>
    )
}

export default Button
