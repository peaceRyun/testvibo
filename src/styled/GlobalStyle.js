import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* reset */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  fieldset,
  img {
    border: 0 none;
  }

  img,
  video {
    max-width: 100%;
  }

  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after {
    content: '';
    content: none;
  }

  q:before,
  q:after {
    content: '';
    content: none;
  }

  input,
  select,
  textarea {
    font-size: 100%;
    vertical-align: middle;
  }

  button {
    font-size: 100%;
    vertical-align: middle;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all ease 100ms;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color: #333;
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
  }

  input[type='text'],
  input[type='password'],
  input[type='submit'],
  input[type='search'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  input:checked[type='checkbox'] {
    background-color: #e4e4e4;
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
  }

  button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }

  input[type='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='file'] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  hr {
    display: none;
  }

  input[type='password'] {
    font-family: 'Malgun Gothic';
  }

  /* 중요한 이미지 대체텍스트로 이미지off시에도 대체 텍스트를 보여주고자 할때 */
  .blind,
  caption,
  legend {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  /* 공통 클래스 */
  .inner {
    width: 1400px;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    padding: 120px 0;
  }

  .main {
    width: 100%;
  }

  .hide {
    overflow: hidden;
    text-indent: -9999px;
    width: 0;
    height: 0;
    line-height: 0;
  }

  /* Swiper 스타일 */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyle;
