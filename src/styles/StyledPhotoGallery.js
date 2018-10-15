import styled from 'styled-components';
import { ICON_NEXT_WHITE, ICON_PREV_WHITE } from '../lib/icons.js'

export const Gallery = styled.div`
	height: 100%;
	overflow: hidden;
	position: relative;
	width: 100%;
`

export const Image = styled.img`
  background: url('${props => props.url}') center;
  background-size: cover;
  display: inline-block;
  height: 100%;
  width: 100%;
`

export const Arrow = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  margin-top: -57px;
  padding: ${props => 
  	(props.previous ? '30px 14px 30px 12px' : '30px 12px 30px 14px')};
  position: absolute;
  right: ${props => (props.previous ? 'auto' : '0')};
  text-indent: -999999px;
  top: 50%;
  z-index: 1;

  & span {
    background-image: url('${props =>
      props.previous ? ICON_PREV_WHITE : ICON_NEXT_WHITE}');
    background-repeat: no-repeat;
    display: block;
    height: 24px;
    text-indent: -9999px;
    width: 14px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

