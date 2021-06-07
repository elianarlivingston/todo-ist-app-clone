import { FC } from 'react'
import { ButtonGroupProps } from './types'
import { ButtonGroupStyle } from './styles'

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { children, vertical = false, justify, ...htmlProps } = props

    return (
        <ButtonGroupStyle vertical={vertical} justify={justify} {...htmlProps}>
            { children }
        </ButtonGroupStyle>
    )
}

export default ButtonGroup