import styled from 'styled-components';
import { ICON_NEXT_WHITE, ICON_PREV_WHITE } from '../lib/icons.js'

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

export const GalleryWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const SlidesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  position: relative;
  transform: translate(${props => props.offset}%);
  transition: all 500ms ease-in;
  width: 100%;
`


