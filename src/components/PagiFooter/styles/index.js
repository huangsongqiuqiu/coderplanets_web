import styled from 'styled-components'

import Img from '@Img'
import { cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center', 'justify-between')};
  color: #196780;
  height: 60px;
  width: 100%;
  margin-top: ${({ margin: { top } }) => top};
  margin-bottom: ${({ margin: { bottom } }) => bottom};
  margin-left: ${({ margin: { left } }) => left};
  margin-right: ${({ margin: { right } }) => right};
`
export const CommonCenterArrowIcon = styled(Img)`
  fill: #196780;
  width: 30px;
  height: 30px;
  display: block;
  transition: all 0.25s;
`
export const CommonBottomArrowIcon = styled(Img)`
  fill: #196780;
  width: 18px;
  height: 18px;
  display: block;
  margin-bottom: 5px;
`

export const CommonNavi = styled.div`
  font-size: 18px;
  color: #327faf;

  &:hover {
    font-weight: bold;
  }
`
export const CommonHint = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`
