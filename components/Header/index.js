import css from './header.module.css'
import Button from '../Button'
import { useState } from 'react'

export default function Header({ fixed }) {
    //const [headerCss, setHeaderCss] = useState(fixed ? css.header : css.headerFixed);

    return (
        <header className={fixed ? css.headerFixed : css.header}>
            <div className="container">
                <div className="col-lg-12">
                    <div className={css.headerContainer}>
                        <span>DashTrader</span>
                        <Button text="INICIAR AGORA" dark={!fixed} link='http://app.dashtrader.com.br' />
                    </div>
                </div>
            </div>
        </header>
    )
}