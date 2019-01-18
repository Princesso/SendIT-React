import React from 'react'
import ViewParcelModal from './ViewParcel'
import CreateNewDeliveryOrder from './NewParcel'
import NewParcel from './NewParcel';

const ModalFilter = (props) => {
  switch(props.currentModal) {
    case VIEWPARCELMODAL:
      return <ViewParcelModal {...props} />
    case NEWPARCELMODAL:
      return <NewParcel {...props} />
    default: 
      return null;
  }
}

export default ModalFilter