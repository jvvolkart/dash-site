import css from './button.module.css'

export default function Header({ text, dark, link, small }) {
    let classes = []

    if (small) {
        classes = css.buttonSmall
    } else {
        classes = css.button
    }

    return (
        <a href={link} target="_blank" className={classes} style={dark ? { background: '#1E2141', color: '#fff' } : {}}>{text}</a>
    )
}