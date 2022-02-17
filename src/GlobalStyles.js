import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0 auto;
        box-sizing: border-box;
        @font-face {
            font-family: 'GowunBatang-Regular';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    }


    /* 공통 부분 */

* { margin: 0; padding:0;}

.box_inner { width: 1050px; margin: 0 auto; }

ul, ol, li { list-style: none; }

a { text-decoration: none; cursor:pointer;}
a:link { color: #000; }
a:visited { color: #000; }
a:hover { color: #000; }
a:focus { color: #000; }

.clear::after { content: ""; display: block; clear: both; }

img, a, fieldset { border: none; }

.hdd, legend {
    font-size: 0; width: 0; height: 0; line-height: 0; text-indent: -9999px; overflow: hidden; visibility: hidden; position: absolute; top: 0; left: 0;
}
.box_inner { width: 1050px; margin: 0 auto; }
`;

export default GlobalStyle;