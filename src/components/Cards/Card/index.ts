import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from './Card'
import { cards } from '../../../actions'

const mapDispatchToProps = (dispatch: any) => {
    const { editItem, deleteItem } = cards
    return bindActionCreators({ editItem, deleteItem }, dispatch)
}
const CardContainer = connect(
    null,
    mapDispatchToProps
)(Card)

export default CardContainer