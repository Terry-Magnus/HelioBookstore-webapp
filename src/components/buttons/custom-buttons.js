import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import './custom-buttons.scss'


export function GoogleBtn({ children, ...otherProps }) {
    return <button className={otherProps.className ? `google-btn ${otherProps.className}`
        : 'google-btn'} {...otherProps}>{children}</button>
}

export function SecondaryBtn({ children, ...otherProps }) {
    return <button {...otherProps} className='secondary-btn'>{children}</button>
}

export function ShowPassword({ passwordVisible, ...otherProps }) {
    return <button className='show-pwd' {...otherProps}>
        {passwordVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
    </button>
}
