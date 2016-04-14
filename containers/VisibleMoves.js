import { connect } from 'react-redux';
import { moveBox, BoxMoves } from '../actions';
import Moves from '../components/Moves';

const mapStateToProps = (state) => {
    let moveState = BoxMoves(state.boxes);
    return Object.assign({}, {state: moveState});
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(moveBox(id))
        }
    }
}

const VisibleMoves = connect(
    mapStateToProps,
    mapDispatchToProps
)(Moves);

export default VisibleMoves;