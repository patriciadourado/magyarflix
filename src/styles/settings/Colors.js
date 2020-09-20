import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
  --color-fiery-rose: #f25a70;
  --color-primary-medium: #ee3f3f;
  --color-very-green: #009b14;
  --color-black-dark: #3a4042;
  --color-black: #000000;
  --color-black-medium: rgba(0, 0, 0, 0.6);
  --color-gray-light: #f5f5f5;
  --color-pomp-and-power: #7c5e99;
  --color-blue-baby: #6bd1ff;
  --color-news: #6b5be2;
  --color-yellow: #ffba05;
  --color-cane: #9cd33b;
  --color-orange: #ff8c2a;
  --color-red: #f91c24;
  --color-magyar: #009b14;
  --color-flag: linear-gradient(
    to bottom,
    #fb0404,
    #ff3f66,
    #ff76ac,
    #ffa7df,
    #f7d1fb,
    #e1d8ff,
    #cddeff,
    #c0e3ff,
    #66d6f2,
    #00c8c7,
    #00b47d,
    #009b14
  );
}
`;

export default Colors;
