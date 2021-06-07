import { FC } from 'react'
import { ButtonProps } from './types'
import { ButtonStyle } from './styles'

const Button: FC<ButtonProps> = (props) => {
    const { children, color, onlyIcon, size, type, ...htmlProps } = props
    return (
        <ButtonStyle 
            color={color}
            onlyIcon={onlyIcon}
            size={size}
            type={type}
            {...htmlProps}
        >
            {children}
        </ButtonStyle>)
}

export default Button