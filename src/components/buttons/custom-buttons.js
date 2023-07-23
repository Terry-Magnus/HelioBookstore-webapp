import './custom-buttons.scss'


export function GoogleBtn({ children, className, onClick }) {
    return <button
        className={className ? `google-btn ${className}`
            : 'google-btn'}
        onClick={onClick}
    >{children}</button>
}

export function SecondaryBtn({ children }) {
    return <button className='secondary-btn'>{children}</button>
}
