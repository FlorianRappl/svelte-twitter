<script>
  export let empty = false;
  export let time = '03:55';
  export let date = 'Today';
  export let type = 'success';
  export let user = 'Florian Rappl';
  export let message = 'My message';
  export let datetime = new Date().toJSON();
</script>

<style>
  .timeline-entry-inner {
    margin-left: 0;
    margin-right: -18px;
  }

  .timeline-entry-inner {
    position: relative;
    margin-left: -22px;
  }

  .left-aligned .timeline-entry-inner .timeline-time {
    left: auto;
    right: -100px;
    text-align: left;
  }

  .left-aligned .timeline-entry-inner .timeline-icon {
    float: right;
  }

  .left-aligned .timeline-entry-inner .timeline-label {
    margin-left: 0;
    margin-right: 70px;
  }

  .left-aligned .timeline-entry-inner .timeline-label:after {
    left: auto;
    right: 0;
    margin-left: 0;
    margin-right: -9px;
    transform: rotate(180deg);
  }

  .timeline-entry-inner:before, .timeline-entry-inner:after {
    content: " ";
    display: table;
  }

  .timeline-entry-inner:after {
    clear: both;
  }

  .timeline-entry-inner:before, .timeline-entry-inner:after {
    content: " ";
    display: table;
  }

  .timeline-entry-inner:after {
    clear: both;
  }

  .timeline-time {
    position: absolute;
    left: -100px;
    text-align: right;
    padding: 10px;
    box-sizing: border-box;
  }

  .timeline-time > span {
    display: block;
  }

  .timeline-time > span:first-child {
    font-size: 15px;
    font-weight: bold;
  }

  .timeline-time
    > span:last-child {
    font-size: 12px;
  }

  .timeline-icon {
    background: #fff;
    color: #737881;
    display: block;
    width: 40px;
    height: 40px;
    background-clip: padding-box;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 0 5px #f5f5f6;
    line-height: 40px;
    font-size: 15px;
    float: left;
  }

  .timeline-icon.bg-primary {
    background-color: #303641;
    color: #fff;
  }

  .timeline-icon.bg-secondary {
    background-color: #ee4749;
    color: #fff;
  }

  .timeline-icon.bg-success {
    background-color: #00a651;
    color: #fff;
  }

  .timeline-icon.bg-info {
    background-color: #21a9e1;
    color: #fff;
  }

  .timeline-icon.bg-warning {
    background-color: #fad839;
    color: #fff;
  }

  .timeline-icon.bg-danger {
    background-color: #cc2424;
    color: #fff;
  }

  .timeline-label {
    position: relative;
    background: #f5f5f6;
    padding: 1.7em;
    margin-left: 70px;
    background-clip: padding-box;
    border-radius: 3px;
  }

  .timeline-label:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 9px 9px 0;
    border-color: transparent #f5f5f6 transparent transparent;
    left: 0;
    top: 10px;
    margin-left: -9px;
  }

  .timeline-label h2, .timeline-label p {
    color: #737881;
    font-family: "Noto Sans", sans-serif;
    font-size: 12px;
    margin: 0;
    line-height: 1.428571429;
  }

  .timeline-label p + p {
    margin-top: 15px;
  }

  .timeline-label h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .timeline-label h2 a {
    color: #303641;
  }

  .timeline-label h2 span {
    opacity: 0.6;
    filter: alpha(opacity=60);
  }
</style>

{#if empty}
<div class="timeline-entry-inner">
  <div class="timeline-icon"></div>
</div>
{:else}
<div class="timeline-entry-inner">
  <time class="timeline-time" datetime={datetime}>
    <span>{time}</span> <span>{date}</span>
  </time>

  <div class="timeline-icon bg-{type}"></div>

  <div class="timeline-label">
    <h2>
      <a href="#">{user}</a> <span>posted</span>
    </h2>
    <p>{message}</p>
  </div>
</div>
{/if}
