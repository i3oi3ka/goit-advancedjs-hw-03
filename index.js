import{S as u,i as c}from"./assets/vendor-DpVPnhEv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const a={form:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},m="49310743-65b3f3ce2dd3324f0da11ae2e",f="https://pixabay.com",d="api",l="active",g=new u(".js-gallery a",{captionsData:"alt",captionDelay:250});function h(o){return o.map(e=>`<li class="gallery-item">
              <a href="${e.largeImageURL}"><img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"/></a>
              <ul class="gallery-item-desc">
                <li>
                  <h3>Likes</h3>
                  <p>${e.likes}</p>
                </li>
                <li>
                  <h3>Views</h3>
                  <p>${e.views}</p>
                </li>
                <li>
                  <h3>Comments</h3>
                  <p>${e.comments}</p>
                </li>
                <li>
                  <h3>Downloads</h3>
                  <p>${e.downloads}</p>
                </li>
              </ul>
        </li>`).join("")}const p=o=>{o.preventDefault();const e=o.currentTarget,s=e.elements.request.value.trim();if(s===""){c.show({title:"Error",message:"You entered an empty string",position:"topRight"});return}a.loader.classList.add(l),y(s).then(i=>{if(a.loader.classList.remove(l),i.total===0){c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.gallery.innerHTML="";return}a.gallery.innerHTML=h(i.hits),g.refresh()}).catch(i=>{a.loader.classList.remove(l),console.log(i)}).finally(()=>{e.reset()})};function y(o){const e=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}/${d}/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}a.form.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
