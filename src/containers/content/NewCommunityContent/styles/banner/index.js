import styled from 'styled-components'

import { theme, cs } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn('justify-center')};

  position: relative;
  min-height: 170px;
  border-bottom: 1px solid;
  /* background: ${theme('banner.bg')}; */
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 160px;
  }
`
export const SlogenTextWrapper = styled.div`
  margin-left: 3px;
  margin-right: 3px;

  font-weight: ${({ highlight }) => (highlight ? 'bold' : '')};
  color: ${({ highlight }) =>
    highlight ? theme('thread.articleTitle') : theme('thread.articleDigest')};
`
