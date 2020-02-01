import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Cards from './Cards'
import { cards } from '../../actions'

const mapStateToProps = (state: any) => {
    console.log('state: ', state)
    return {
      cardState: state.cards
    }
}
const mapDispatchToProps = (dispatch: any) => {
    console.log('dispatch: ', dispatch)
    const { fetchItems, addItem } = cards
    return bindActionCreators({ fetchItems, addItem }, dispatch)
}
const CardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)

export default CardsContainer