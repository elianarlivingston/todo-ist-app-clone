import styled from 'styled-components'
import { ButtonGroupProps } from './types'

const justify = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    between: 'between'
}

export const ButtonGroupStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props: ButtonGroupProps) => props.vertical ? 'column' : 'row'};
    gap: 0.5rem;
    justify-content: ${(props: ButtonGroupProps): string => justify[props.justify || 'center'] }
`