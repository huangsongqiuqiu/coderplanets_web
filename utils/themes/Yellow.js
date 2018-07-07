/*
 * a theme inspired by Muzli && unbuntu
 */
import { lighten, darken } from 'polished'

const primaryColor = '#738990'

const bannerBg = '#EFE8D6'
const contentBg = '#FEF6E4'
const contentBoxBg = '#FEF6E4'
const fontColor = primaryColor
const sidebarBg = '#323c40'
const markdownFont = '#85979c'

const descText = '#9eb7bd'
const primaryMate = '#1e9089'

const Yellow = {
  logoText: primaryColor,
  cover: bannerBg,
  coverIndex: primaryMate,
  htmlBg: contentBoxBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#839496',
  avatarOpacity: 0.8,
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: bannerBg,
    tabActive: primaryColor, // articleTitle
    tabOthers: lighten(0.1, primaryColor),
  },
  banner: {
    title: lighten(0.06, primaryColor),
    bg: bannerBg,
    desc: descText,
    spliter: darken(0.04, bannerBg),
    number: primaryColor,
    active: primaryMate,
    numberDesc: descText,
    numberDivider: '#dcdad6',
    numberHoverBg: darken(0.03, bannerBg),
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: primaryColor,
    articleHover: '#f7eedc',
    articleStrip: contentBoxBg,
    articleDigest: descText,
    articleTag: '#526482',
    articleLink: descText,
    commentsUserBorder: contentBoxBg,
    extraInfo: primaryMate,
  },
  content: {
    bg: contentBoxBg,
    cardBg: bannerBg,
    cardBorder: lighten(0.08, contentBoxBg),
    cardBorderHover: lighten(0.1, contentBoxBg),
  },
  footer: {
    text: lighten(0.1, descText),
    hover: descText,
    label: descText,
  },
  sidebar: {
    bg: sidebarBg,
    menuHover: lighten(0.1, sidebarBg),
    pinActive: '#849804',
    menuLink: '#93A1A1',
    borderColor: lighten(0.05, sidebarBg),
  },
  preview: {
    title: primaryColor,
    desc: lighten(0.05, descText),
    font: fontColor,
    bg: contentBoxBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: contentBg,
    articleBg: '#fffaf0',
    helper: lighten(0.3, contentBg),
    helperHover: primaryColor,
    topLine: '#4EAFA5',
    icon: '#4EAFA5',
    divider: '#eae7de',
  },
  article: {
    link: primaryMate,
    linkHover: lighten(0.05, primaryMate),
    reactionTitle: primaryColor,
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: lighten(0.06, primaryColor),
    didIcon: primaryMate,
    title: lighten(0.06, primaryColor),
    username: lighten(0.06, primaryColor),
    number: primaryMate,
    floor: primaryMate,
    reply: lighten(0.06, primaryColor),
    replyBg: '#fff4da',
    placeholder: descText,
    filter: descText,
    filterActive: lighten(0.06, primaryColor),
    action: lighten(0.06, primaryColor),
    // mention text displayed in article
    mentionText: '#70768B',
    mentionTextBg: '#423a4a',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: lighten(0.06, primaryColor),
    mentionActiveBg: lighten(0.1, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.8)',
  },
  editor: {
    title: primaryColor,
    content: descText,
    placeholder: '#c8d3cf',
    headerBg: '#fffaf0',
    contentBg: '#fffaf0',
    border: '#fffaf0',
    borderActive: primaryColor,
    borderNormal: darken(0.05, bannerBg),
    footer: descText,
  },
  pagination: {
    activeNum: 'white',
    itemBg: bannerBg,
    itemBorderColor: darken(0.05, bannerBg),
    disableText: descText,
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#f1eddd',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  bannerHeatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#f1eddd',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  markdown: {
    title: darken(0.05, '#DBE0E1'),
    fg: markdownFont,
    titleBottom: '1px solid #154452',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: bannerBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.7,
    text: '#72788D',
  },
  tagger: {
    text: '#FFF6E5',
    bg: '#afc1b3',
    border: '#afc1b3',
    closeBtn: '#FFF6E5',
  },
  tabs: {
    headerActive: lighten(0.04, primaryColor),
    header: lighten(0.2, primaryColor),
    contentBg: darken(0.03, contentBoxBg),
    headerBg: darken(0.02, contentBoxBg),
    headerActiveTop: primaryColor,
    border: '#EAE0C9',
  },
  modal: {
    bg: bannerBg,
    border: primaryColor,
    innerSelectBg: '#f7f0e0',
  },
  form: {
    inputBg: lighten(0.03, contentBoxBg),
    text: descText,
    label: primaryColor,
    border: descText,
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Yellow
