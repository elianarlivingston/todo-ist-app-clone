import { FC, useReducer } from 'react'
import { AccordionProps } from './types'
import { Button } from '../index'
import { AccordionHeader } from './styles'

const Accordion: FC<AccordionProps> = (props) => {
    const { children, title, handlerClick } = props
    const [on, toggle] = useReducer(v => !v, false)

    return (
        <article
        >
            <AccordionHeader>
                <Button 
                    onClick={toggle} 
                    onlyIcon={true} 
                    color="secondary" 
                    aria-expanded={on}
                    aria-controls="sect1" 
                    id="accordion1id"
                >
                    <span 
                        className="fas fa-chevron-down"
                        // style={{ transform: on ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .4s ease-in-out' }}
                    ></span>
                </Button>

                <h3>{ title }</h3>

                <Button onClick={handlerClick} onlyIcon={true} color="secondary">
                    <span className="fas fa-plus"></span>
                </Button>
            </AccordionHeader>

            <div 
                role="region"
                aria-labelledby="accordion1id"
                style={{
                    transition: 'height .308s ease-in-out',
                    overflowY: 'hidden',
                    height: on ? 'auto' : '0',
                }}
            >
                { children }
            </div>
        </article>
    )
}

export default Accordion