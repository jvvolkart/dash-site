import css from './header.module.css'
import Button from '../Button'
import { useWindowDimensions } from '../../functions/utils'

export default function Header({ fixed }) {
    const { height, width } = useWindowDimensions();

    return (
        <header className={fixed ? css.headerFixed : css.header}>
            <div className="container">
                <div className="col-lg-12">
                    <div className={css.headerContainer}>
                        <span>DashTrader</span>
                        <Button text={width < 400 ? 'INICIAR' : 'INICIAR AGORA'} small={width < 400} dark={!fixed} link='http://app.dashtrader.com.br' />
                    </div>
                </div>
            </div>
        </header>
    )
}