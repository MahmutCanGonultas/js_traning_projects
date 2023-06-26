"use strict";
const agentUrl = "https://valorant-api.com/v1/agents";

const main = document.getElementById("main");
const fetchUrl = async () => {
  const response = await fetch(agentUrl);
  const data = await response.json();
  console.log(data.data);
  for (let i = 0; i < data.data.length; i++) {
    showCharacters(data.data[i]);
  }
};

fetchUrl();

function showCharacters(data) {
  const html = `
  <div class="agent">
        <img src="${data.displayIconSmall}" alt="" />
        <h3>${data.displayName}</h3>
        <p class="description">
          ${data.description}
        </p>
        <div class="ulti">
          <img src="${data.abilities.slice(-1)[0].displayIcon}" alt="" />
          <span class="ulti-name">${
            data.abilities.slice(-1)[0].displayName
          }</span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          recusandae mollitia quos cumque itaque nisi labore repudiandae
          dignissimos facilis unde voluptates obcaecati facere! Consequatur
          officiis laudantium facilis repudiandae aperiam nostrum?
        </div>
      </div>`;
  main.insertAdjacentHTML("beforeend", html);
}
