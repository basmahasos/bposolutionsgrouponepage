
export default function Button(props) {
    const {type, link, large, light, dark, className, onClick, text, icon} = props;
    return(
        <button type={type} className={`btn ${link ? 'btn-link' : light ? 'btn-light' : dark ? 'btn-dark' : ''} ${large ? 'btn-lg' : ''} ${className ? className : ''}`} onClick={onClick}>
            {text}
            {icon && <span className="btn-icon">{icon}</span>}
        </button>
    )
}