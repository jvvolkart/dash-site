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
                        <img style={width < 425 ? { width: '180px' } : { width: '255px' }} src="/images/logo.png" />
                        <Button text={width < 520 ? 'INICIAR' : 'INICIAR AGORA'} small={width < 520} dark={!fixed} link='http://app.dashtrader.com.br/register' />
                    </div>
                </div>
            </div>
        </header>
    )
}