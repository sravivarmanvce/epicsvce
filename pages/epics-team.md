---
layout: page
title: EPICS Team
permalink: "/epics-team/"
image: assets/images/epics-team.png
---
<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 50%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 0 10px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: black;
  font-size: 14px;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>

<div class="row">
  <div class="column">
    <div class="card">
      <img src="../team/eee-ravivarman.jpg" alt="Jane" style="width:100%; border-radius: 10%;">
      <div class="container">
        <h5>Jane Doe</h5>
        <p class="title">CEO & Founder</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../team/eee-ravivarman.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h5>Mike Ross</h5>
        <p class="title">Art Director</p>
      </div>
    </div>
  </div>
  
  
  <div class="column">
    <div class="card">
      <img src="../team/eee-ravivarman.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h5>Mike Ross</h5>
        <p class="title">Art Director</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="../team/eee-ravivarman.jpg" alt="John" style="width:100%">
      <div class="container">
        <h5>John Doe</h5>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>
</div>