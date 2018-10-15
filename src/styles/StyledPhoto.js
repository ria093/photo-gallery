import styled from 'styled-components';
import imageNotFound from'../assets/imageNotFound.svg';

export const PhotoWrapper = styled.div`
  flex: 0 0 auto;
  height: 100%;
  position: relative;
  width: 100%;
`

export const Image = styled.span`
  background: url('${props => props.url}'), url('${imageNotFound}') center;
  background-size: cover;
  display: inline-block;
  height: 100%;
  width: 100%;
`

export const Caption = styled.h3`
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  box-sizing: border-box;
  color: white;
  font: 300 18px/18px roboto;
  left: 0;
  letter-spacing: 1px;
  margin: 0;
  padding: 30px 20px;
  position: absolute;
  width: 100%;
`