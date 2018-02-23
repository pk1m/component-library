import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import styled from 'styled-components';

const backgroundColors = {
	positive: { normal: colors.bsBlue, hover: colors.bsBlueLight, active: colors.bsBlueDark },
	danger: { normal: colors.bsRed, hover: colors.bsRedLight, active: colors.bsRedDark },
	purchase: { normal: colors.bsGreenDark, hover: colors.bsGreen, active: colors.bsGreenDarker },
	neutral: { normal: colors.bsGray13, hover: colors.bsGrayButtonHover, active: colors.bsGrayButtonActive },
	stroke: { normal: colors.bsWhite, hover: colors.bsBlue, active: colors.bsBlue5Opacity }
};

const buttonHeights = { lg: '60px', md: '48px', sm: '32px' };

const StyledButton = styled.button`
	background-color: ${({ type }) => backgroundColors[type].normal};
	border-radius: 4px;
	color: ${({ type }) => (type == 'stroke' ? colors.bsBlue : colors.bsWhite )};
	vertical-align: middle;
	padding-right: 30px;
	padding-left: 30px;
	display: inline-block;
	height: ${({ size }) => buttonHeights[size]};
	border: ${({ type }) => (type == 'stroke' ? `1px solid ${colors.bsBlue}` : 0) };
	outline: 0;
	box-shadow: none;
	transition: all ease .85s;
	font-size: ${fonts.sizes.default};

	&:hover {
		background-color: ${({ type }) => backgroundColors[type].hover };
		color: ${colors.bsWhite};
	}

	&:active {
		background-color: ${({ type }) => backgroundColors[type].active };
	}
`;

class Button extends React.PureComponent {
	render() {
		const { children, onClick, size, type, disabled } = this.props;
		return (
			<StyledButton { ...{ type, size, disabled, onClick }}>
				{children}
			</StyledButton>
		);
	}
}

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	type: PropTypes.oneOf(['positive', 'danger', 'purchase', 'neutral', 'stroke']),
	disabled: PropTypes.bool
};

Button.defaultProps = {
	size: 'md',
	type: 'positive',
	disabled: false
};

Button.docProps = {

}

export default Button;