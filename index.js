import{i as c}from"./assets/vendor-Bk_fp7ln.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const l={form:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")},u="49310743-65b3f3ce2dd3324f0da11ae2e",m="https://pixabay.com",f="api",a="active";function d(s){return console.log(s),s.map(e=>`<li class="gallery-item">
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
        </li>`).join("")}const g=s=>{s.preventDefault();const e=s.currentTarget,o=e.elements.request.value.trim();if(console.log(o),o===""){c.show({title:"Error",message:"You entered an empty string",position:"topRight"});return}l.loader.classList.add(a),h(o).then(i=>{if(l.loader.classList.remove(a),i.total===0){c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.gallery.innerHTML="";return}l.gallery.innerHTML=d(i.hits)}).catch(i=>{l.loader.classList.remove(a),console.log(i)}).finally(()=>{e.reset()})};function h(s){const e=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/${f}/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}console.log(l.form);l.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
