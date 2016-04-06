import { connect } from 'react-redux';
import { moveBox } from '../actions';
import Boxes from '../components/Boxes';


const mapStateToProps = (state) => {
    return {
        boxes: state
    }
}

const mapDispatchToProps = (dispatch) => {
    //Change this, need to call move box and then dispatch it
    return {
        onBoxClick: (id) => {
            console.log(`box of id ${id} clicked on`);
        }
    }
}
const VisibleBoxes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Boxes);


export default VisibleBoxes;