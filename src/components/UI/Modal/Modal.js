import React from 'react';
import classses from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxilary from '../../../hoc/Auxilary'

const modal = (props) => {

    return (
        <Auxilary>
            <Backdrop show={props.show}  clicked={props.modalClosed}/>
            <div className={classses.Modal}
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }
            >
                {props.children}
            </div>
        </Auxilary>
    )

}

export default modal;