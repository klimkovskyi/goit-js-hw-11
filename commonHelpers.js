import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const o="https://pixabay.com/api/",r=new URLSearchParams({key:"13983728-c7bbdcf2d20cfa49f01a0b8c6",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${o}?${r}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:c})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${o}" alt="${s}">
                <ul class="wrapper">
                    <li>Likes<span>${e}</span></li>
                    <li>Views<span>${t}</span></li>
                    <li>Comments<span>${a}</span></li>
                    <li>Downloads<span>${c}</span></li>
                </ul>
            </a>
        </li>
    `).join("")}const f=document.querySelector(".search-form"),d=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),y=new u(".gallery-list a",{animationSpeed:200,animationSlide:!0,disableScroll:!1,history:!1,captionsData:"alt",captionDelay:250});f.addEventListener("submit",i=>{i.preventDefault();const o=i.target.elements.search.value.trim();if(!o){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.classList.remove("hidden"),n.style.display="block",m(o).then(r=>{if(console.log(r),!r.total)return l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none";const s=p(r.hits);d.innerHTML=s,n.classList.add("hidden"),n.style.display="none"}).catch(r=>console.log(r)).finally(()=>y.refresh())});
//# sourceMappingURL=commonHelpers.js.map
