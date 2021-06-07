import { FC, useReducer } from 'react'
import { SelectProps } from './types'
import { colors } from '../../config/colors'
import { SelectWraper, SelectSelected, SelectDecoration, SelectList, SelectListOption } from './styled'

const Select: FC<SelectProps> = (props) => {
    const [on, toggle] = useReducer(v => !v, false)
    const { selected, setSelected } = props

    return (
        <SelectWraper>
            <SelectSelected 
                aria-haspopup="listbox" 	
                aria-expanded={on}
                aria-labelledby="select-menu"
                id="select-button"
                onClick={toggle}
                type="button" 
            >
                <SelectDecoration
                    style={{
                        backgroundColor: selected ? Object.values(colors).find(color => color.code === selected)?.color : ''
                    }}
                ></SelectDecoration>
                <span>{ selected ? Object.values(colors).find(color => color.code === selected)?.name : 'Seleccionar Color' }</span>
            </SelectSelected>

            {
                on && 
                 <SelectList
                    id="select-menu"
                    role="listbox"
                    aria-labelledby="select-button"
                    tabIndex={-1}
                    aria-activedescendant={`${Object.values(colors).findIndex(color => color.code === selected)}`}
                > 
                    {
                        colors && 
                        Object.values(colors).map((color, index, arr) => (
                            <SelectListOption
                                key={color.code}
                                role="option"	
                                aria-selected={selected === color.code}
                                aria-posinset={index}
                                aria-setsize={arr.length}
                                onClick={() => setSelected(color.code)}
                            >
                                <SelectDecoration
                                    style={{
                                        backgroundColor: color.color 
                                    }}
                                ></SelectDecoration>
                                <span>{ color.name }</span>
                            </SelectListOption>
                        ))
                    }
                </SelectList>
            }
        </SelectWraper>
    )
}

export default Select