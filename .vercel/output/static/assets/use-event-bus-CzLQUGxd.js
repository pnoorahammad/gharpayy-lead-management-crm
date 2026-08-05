import{r,aD as t}from"./index-DJqtPqBU.js";function a(e,s=50){const[u,n]=r.useState([]);return r.useEffect(()=>(n(t.recent(e,s)),t.subscribe(()=>{n(t.recent(e,s))})),[e,s]),u}export{a as u};
