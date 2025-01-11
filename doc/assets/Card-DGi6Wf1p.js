import{r as c,s as h,j as t,d as g,g as b}from"./index-DkB9s-eS.js";import{Q as x}from"./index-1LUNzXBd.js";import{I as u}from"./logo-baNVkwH2.js";import{A as w,a as v,b as y}from"./animates-BCuKWKzD.js";import{S as j}from"./StyledWordBox-P5BqGnvj.js";import{I}from"./heart-CAqKcttF.js";const N=""+new URL("lover.bg-BAEuZj5V.png",import.meta.url).href,S=""+new URL("birds.bg-DQ36vEkw.png",import.meta.url).href,D=""+new URL("noise.bg-Dc_Xskz3.png",import.meta.url).href,R=g.section`
  z-index: 997;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;

  &.visible .card {
    animation: ${w} 0.5s;
  }
  .card {
    position: relative;
    padding: 1.8rem 2rem;
    background-color: rgba(108, 53, 44, 0.8);
    margin-top: -2rem;
    max-width: 94vw;
    box-shadow: 0 0 1rem #6c352c;
    animation-fill-mode: both;

    .dbg {
      visibility: hidden;
      position: absolute;
      &.qr {
        bottom: 0;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tip {
          font-size: 0.5rem;
          color: #222;
          padding: 0.2rem 0;
        }
      }
      &.lover {
        bottom: 0;
        left: 0;
        width: 4rem;
        opacity: 0.6;
      }
      &.birds {
        top: 0.4rem;
        right: 0;
        width: 5rem;
        opacity: 0.5;
      }
    }

    .heart {
      position: absolute;
      animation-fill-mode: both;
      animation: ${v} 3s ease infinite alternate;
      opacity: 0;
      &.heart1 {
        transform: rotate(20deg);
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
      }
      &.heart2 {
        transform: rotate(-20deg);
        bottom: 1rem;
        left: -1rem;
        width: 1rem;
      }
      &.heart3 {
        transform: rotate(-30deg);
        top: 1rem;
        left: 1rem;
        width: 2rem;
      }
      &.heart4 {
        transform: rotate(40deg);
        top: 2rem;
        right: 1.2rem;
        width: 1.5rem;
      }
      &.heart5 {
        transform: rotate(-10deg);
        bottom: 2rem;
        left: 1.2rem;
        width: 1.8rem;
      }
    }
    &.starting {
      background-image: url(${D});
      background-repeat: repeat;
      box-shadow: none;
      animation: none;
      transform: none;
      .dbg {
        visibility: visible;
        &.qr {
          opacity: 0.8;
        }
      }
      .line .word {
        color: #222;
        text-shadow: none;
      }
      * {
        animation: none;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.8rem;
      border-radius: 50%;
      left: 0;
      bottom: -1rem;
      box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
    }
    .line {
      margin-bottom: 1.4rem;
      display: flex;
      flex-wrap: wrap;
      font-size: 2rem;
    }
  }
`,$=g(j)`
  text-shadow: 0 0 3px rgba(2, 2, 2, 0.5);
  color: #f4b0f3;
  padding: 0.4rem;
  font-weight: 800;
  animation: ${y} 1s ease forwards;
  animation-fill-mode: both;
`,f=b("idx");let m="",s=0;function Q({wordArr:i=[],visible:n=!1}){const[l,p]=c.useState("");return c.useEffect(()=>{if(n&&i.length>0){f&&(m=i[f]);const e=[...i];h(e);let r=m===""?1:e.findIndex(o=>o===m)+1,a=e[(r-1)%e.length];return p(a),s=0,window.CUR_WORDS_IDX=i.findIndex(o=>o===a),()=>{r++}}},[n,i]),t.jsx(R,{className:n?"visible":"hidden",children:t.jsxs("div",{id:"HONEYED_WORDS_CARD",className:"card",children:[l.replaceAll(" ","").split("|").map((e,r)=>{let a=e.split("");return r!==0&&(s=s+l.split("|")[r-1].length),t.jsx("p",{className:"line",children:a.map((o,d)=>o!==""?t.jsx($,{style:{animationDelay:`${.2*(s+d)}s`},className:"word",children:o},`${o}-${d}`):null)},e)}),[1,2,3,4,5].map((e,r)=>t.jsx("img",{style:{animationDelay:`${r*.3}s`},className:`heart heart${e}`,src:I,alt:"heart"},e)),t.jsxs("div",{className:"dbg qr",children:[t.jsx(x,{imageSettings:{width:10,height:10,src:u,excavate:!0},size:50,bgColor:"#f2f2f2",level:"Q",fgColor:"#000",marginSize:0,value:`${window.location.href.split("?")[0]}`}),t.jsx("div",{className:"tip",children:"土味情话"})]}),t.jsx("img",{src:N,alt:"lover",className:"dbg lover"}),t.jsx("img",{src:S,alt:"birds",className:"dbg birds"})]})})}export{Q as default};
