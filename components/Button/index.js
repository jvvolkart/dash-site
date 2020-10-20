import css from './button.module.css'

export default function Header({ text, dark, link }) {
    return (
        <a href={link} target="_blank" className={css.button} style={dark ? { background: '#1E2141', color: '#fff' } : {}}>{text}</a>
    )
}