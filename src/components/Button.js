import React from 'react'
import '../styles/Button.css'

function Button(props) {
    return (
        <div className="btn">
            <a href="https://www.hotmart.com/product/aprenda-como-dominar-o-autocad-em-2h-seja-capaz-de-criar-seus-proprios-modelos-e-nao-perca-mais-oportunidades/B40493819T">    
                {props.text}
            </a>
        </div>
    )
}

export default Button
