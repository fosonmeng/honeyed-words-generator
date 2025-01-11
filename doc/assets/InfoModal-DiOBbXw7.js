import{r as o,R as n,_ as d,j as e,d as l}from"./index-CaryvA-_.js";import{b as c,d as h,S as m}from"./index-C5ax-UWx.js";import{j as p}from"./animates-jN5Jq9tT.js";class a extends o.PureComponent{constructor(t){super(t),this.$=n.createRef(),this._=n.createRef()}render(){return n.createElement("span",{ref:this.$},n.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const t=this.$.current.appendChild(document.createElement("span"));d(async()=>{const{render:i}=await import("./buttons.esm-DK2fWHEW.js");return{render:i}},[]).then(({render:i})=>{this._.current!=null&&i(t.appendChild(this._.current),function(s){try{t.parentNode.replaceChild(s,t)}catch{}})})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}const g="/assets/reward-Z5L4CcqZ.jpg",u=l(m)`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  margin-right: 0.5rem;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 28px;
    height: 28px;
  }
`,f=l.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px black;
  position: fixed;
  right: 0.5rem;
  bottom: 3rem;
  background: rgba(2, 2, 2, 0.6);
  padding: 1rem;
  padding: 1rem;
  &.visible {
    animation: ${p} 1s;
  }
  .reward {
    width: 14rem;
    align-self: center;
    margin-bottom: 1.8rem;
    position: relative;
    img {
      width: 100%;
      border: 1px solid #222;
    }
    &:after {
      content: attr(title);
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: left;
      font-size: 0.8rem;
      bottom: -1rem;
      text-shadow: 0 0 8px #a09090;
    }
  }
  .line {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    &.title {
      font-size: 1.4rem;
      font-weight: 800;
    }
    &.github > span {
      margin-right: 0.4rem;
    }
  }
  .copyright {
    font-size: 0.5rem;
  }
`,x=({visible:r=!1})=>e.jsxs(f,{className:r?"visible":"hidden",children:[e.jsx("div",{className:"line title",children:"土味情话在线生成器"}),e.jsxs("div",{className:"line github",children:[e.jsx(a,{href:"https://github.com/zerosoul/honeyed-words-generator","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star zerosoul/honeyed-words-generator on GitHub",children:"Star"}),e.jsx(a,{href:"https://github.com/zerosoul/honeyed-words-generator/fork","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork zerosoul/honeyed-words-generator on GitHub",children:"Fork"})]}),e.jsx("div",{className:"reward",title:"如果有帮助到您，欢迎打赏~",children:e.jsx("img",{src:g,alt:"reward",title:"如果有帮助到您，欢迎打赏~"})}),e.jsxs("div",{className:"copyright",children:[e.jsxs("span",{children:[" Copyright © ",new Date().getFullYear()," By "]}),e.jsx("a",{rel:"noopener noreferrer",href:"https://yangerxiao.com",target:"_blank",children:"Tristan"})]})]});function _(){const[r,t]=o.useState(!1),i=()=>{t(s=>!s)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{visible:r}),e.jsx(u,{className:`${r?"close":""}`,onClick:i,children:r?e.jsx(c,{}):e.jsx(h,{})})]})}export{_ as default};
