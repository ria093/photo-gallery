import React from 'react';
import PropTypes from 'prop-types';
import { ExceptionWrapper } from '../styles/StyledException';

const Exception = (props) => {
	return (
		<ExceptionWrapper>
			<div>{props.msg}</div>
		</ExceptionWrapper>
	)
}

Exception.propTypes = {
	msg: PropTypes.string.isRequired,
}

export default Exception;