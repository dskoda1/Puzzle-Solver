import { connect } from 'react-redux';
import { moveBox } from '../actions';
import Boxes from '../components/Boxes';


const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        onBoxClick: (id) => {
            dispatch(moveBox(id))
        }
    }
}
const VisibleBoxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Boxes);


export default VisibleBoxes;