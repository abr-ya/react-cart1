import App from '../App';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from '../actions/alertActions';

import {RootState} from '../index';

const mapStateToProps = (state: RootState) => ({
	display: state.alert.display,
});

const mapDispatchToProps = {
	showAlert,
	hideAlert,
};

// связываем компонент с Redux
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
