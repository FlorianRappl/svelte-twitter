<script>
  import TimelineEntry from './TimelineEntry.svelte';

  export let posts = [];
</script>

<style>
  .timeline-centered {
    position: relative;
    margin: 30px 0;
  }

  .timeline-centered:before,
  .timeline-centered:after {
    content: " ";
    display: table;
  }

  .timeline-centered:after {
    clear: both;
  }

  .timeline-centered:before,
  .timeline-centered:after {
    content: " ";
    display: table;
  }

  .timeline-centered:after {
    clear: both;
  }

  .timeline-centered:before {
    content: "";
    position: absolute;
    display: block;
    width: 4px;
    background: #f5f5f6;
    left: 50%;
    top: 20px;
    bottom: 20px;
    margin-left: -4px;
  }
</style>

<div class="timeline-centered">
  {#each posts as post, i}
    <TimelineEntry
      post={{
        date: new Date(Date.now() - 1000 * 60 * 25 * post.id).toJSON(),
        message: post.body,
        typeId: post.postId + post.id,
        user: post.email.split('@').shift(),
      }}
      aligned={i % 2 ? 'left' : 'right'} />
  {/each}

  <TimelineEntry aligned="end" />
</div>
