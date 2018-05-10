import R from 'ramda'
import React from 'react'
import { Button } from 'antd'
import TimeAgo from 'timeago-react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'
/* import { fakeUsers, getRandomInt, Global, prettyNum } from '../../utils' */
import { Global, prettyNum } from '../../utils'

import { AvatarsRow, SpaceGrow, Pagi, CommentLoading } from '../../components'

import * as logic from './logic'
import CommentsFilter from './CommentsFilter'

import {
  ListsContainer,
  ListTitle,
  TotalHeader,
  TotalCountWrapper,
  TotalNum,
  FloorNum,
  CommentBlock,
  CommentWrapper,
  DeleteOverlay,
  DeleteHintText,
  DeleteBtnGroup,
  CommentUserInfo,
  CommentAvatar,
  CommentHeader,
  CommentUserName,
  TimeStamps,
  CommentContent,
  CommentBodyInfo,
  CommentFooter,
  Actions,
  VisiableAction,
  ReplyIcon,
  ReplyAction,
  CommentHeaderFirst,
  ReplyUsers,
  ReplyTitle,
  ActionNumber,
  UpIcon,
  ReplyBar,
  ReplyToBody,
  ReplyToFloor,
} from './styles/comments_list'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!R.isEmpty(selectText)) {
    console.log('getSelection', selectText)
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

const DeleteMask = ({ show }) => (
  <DeleteOverlay show={show}>
    <DeleteHintText>删除后该该评论将不可恢复</DeleteHintText>
    <DeleteBtnGroup>
      <Button size="small" type="red" ghost onClick={logic.cancleDelete}>
        取消
      </Button>
      &nbsp;&nbsp;
      <Button size="small" type="red" onClick={logic.deleteComment}>
        确定删除
      </Button>
    </DeleteBtnGroup>
  </DeleteOverlay>
)

const ActionBottom = ({ data, accountInfo }) => {
  /* console.log('actionBottom data: ', data.author.id) */
  /* console.log('accountInfo --dd -->', accountInfo) */
  if (String(data.author.id) === accountInfo.id) {
    return (
      <div style={{ display: 'flex' }}>
        <ReplyAction>
          <ReplyIcon path={`${ICON_ASSETS}/cmd/edit.svg`} />
          编辑
        </ReplyAction>
        <ReplyAction onClick={logic.onDelete.bind(this, data)}>
          <ReplyIcon path={`${ICON_ASSETS}/cmd/delete.svg`} />
          删除
        </ReplyAction>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex' }}>
      <ReplyAction onClick={logic.openReplyEditor.bind(this, data)}>
        <ReplyIcon path={`${ICON_ASSETS}/cmd/nest_comment.svg`} />
        回复
      </ReplyAction>
    </div>
  )
}

const getAuthors = comment => {
  const replies = R.forEach(reply => {
    return (reply.author.extra_id = reply.id)
  }, R.clone(comment.replies))

  return R.pluck('author', replies)
}

const Comment = ({ data, tobeDeleteId, accountInfo }) => (
  <CommentBlock>
    <DeleteMask show={data.id === tobeDeleteId} />
    <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
      <CommentUserInfo>
        <CommentAvatar src={data.author.avatar} />
      </CommentUserInfo>

      <CommentBodyInfo onMouseUp={getSelection}>
        <CommentHeader>
          <CommentHeaderFirst>
            <CommentUserName>
              {data.author.nickname}
              <FloorNum>#{data.floor}</FloorNum>
            </CommentUserName>
            {data.repliesCount !== 0 ? (
              <ReplyUsers>
                <ReplyTitle>收到回复:</ReplyTitle>
                <AvatarsRow
                  users={getAuthors(data)}
                  onUserSelect={logic.previewReply}
                  total={data.repliesCount}
                />
              </ReplyUsers>
            ) : (
              <div />
            )}
          </CommentHeaderFirst>
          <TimeStamps>
            <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
          </TimeStamps>
        </CommentHeader>
        <CommentContent>
          {data.replyTo ? (
            <ReplyBar>
              回复&nbsp;{data.replyTo.author.nickname}:
              <ReplyToBody>{data.replyTo.body}</ReplyToBody>
              <ReplyToFloor>#{data.replyTo.floor}</ReplyToFloor>
            </ReplyBar>
          ) : (
            <div />
          )}
          {data.body}
        </CommentContent>
        <CommentFooter>
          <Actions>
            <VisiableAction>
              <div onClick={logic.toggleLikeComment.bind(this, data)}>
                <UpIcon
                  path={`${ICON_ASSETS}/cmd/up.svg`}
                  viewerDid={data.viewerHasLiked}
                />
              </div>
              <ActionNumber>{prettyNum(data.likesCount)}</ActionNumber>
            </VisiableAction>
            <VisiableAction>
              <div onClick={logic.toggleDislikeComment.bind(this, data)}>
                <UpIcon
                  path={`${ICON_ASSETS}/cmd/up.svg`}
                  reverse
                  viewerDid={data.viewerHasDisliked}
                />
              </div>
              <ActionNumber>{prettyNum(data.dislikesCount)}</ActionNumber>
            </VisiableAction>
            <SpaceGrow />
            <ActionBottom data={data} accountInfo={accountInfo} />
          </Actions>
        </CommentFooter>
      </CommentBodyInfo>
    </CommentWrapper>
  </CommentBlock>
)

const Lists = ({ entries, tobeDeleteId, accountInfo }) => (
  <div>
    {entries.map(c => (
      <div key={shortid.generate()}>
        <Comment
          data={c}
          tobeDeleteId={tobeDeleteId}
          accountInfo={accountInfo}
        />
      </div>
    ))}
  </div>
)

const TotalCountText = ({ count }) => {
  return (
    <TotalCountWrapper>
      {count > 0 ? (
        <ListTitle id="lists-info">
          收到 <TotalNum>{count}</TotalNum> 条评论:
        </ListTitle>
      ) : (
        <div />
      )}
    </TotalCountWrapper>
  )
}

const CommentsList = ({
  entries,
  accountInfo,
  restProps: {
    totalCount,
    pageSize,
    pageNumber,
    loading,
    loadingFresh,
    tobeDeleteId,
    filterType,
  },
}) => (
  <div>
    <TotalHeader>
      <TotalCountText count={totalCount} />
      <CommentsFilter filterType={filterType} />
    </TotalHeader>

    {loadingFresh ? (
      <CommentBlock>
        <CommentLoading />
      </CommentBlock>
    ) : (
      <div />
    )}
    <ListsContainer>
      {loading ? (
        <CommentBlock>
          <CommentLoading />
        </CommentBlock>
      ) : (
        <Lists
          entries={entries}
          accountInfo={accountInfo}
          pageSize={pageSize}
          pageNumber={pageNumber}
          tobeDeleteId={tobeDeleteId}
        />
      )}
    </ListsContainer>

    <Pagi
      left="-10px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={logic.pageChange}
    />
  </div>
)

export default CommentsList