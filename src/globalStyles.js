import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  @media only screen and (max-width: 68.75em) {
    html {
      font-size: 50%;
    }
  }
  @media only screen and (max-width: 959px){
    html {
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
        -webkit-tap-highlight-color: transparent;
    }
  }


body {
    font-family: 'Work Sans',sans-serif;
    font-weight: 400;
    height: 100%;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}

a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

a.text-link{
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 1rem 0;
  color: black;
  cursor: pointer;
  &:hover {
    color: #e31837;
  }
}

img {
  max-width: 100%;
  height: auto;
}

p {
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
    font-size: 31px;
    text-align: center;
    line-height: 2;
    letter-spacing: 2px;
}

@media only screen and (max-width: 560px) {
  h1 {
    font-size: 20px;
  }
}
@media only screen and (max-width: 1010px) {
  h1 {
    font-size: 25px;
  }
}

footer p {
  line-height: 2
}

footer p.about-text{
  width: 90%
}

footer ul li {
    list-style-type: none;
    display: inline-block;
    margin-left: 40px;
}

.animated{
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeIn{
  animation-name: fadeIn;
}

.vertical-line {
  margin: 50px auto 30px auto;
  width: 60%;
  height: 40px;
  position: relative;
  text-align: center;
}

.vertical-line:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 50%;
  border-left: 2px solid black;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
 }
`;
