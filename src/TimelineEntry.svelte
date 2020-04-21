<script>
  import TimelineEntryContent from './TimelineEntryContent.svelte';
  import { getTime, getDate, getType } from './utils';

  export let aligned = 'right';
  export let post = {};
</script>

<style>
  .timeline-entry {
    position: relative;
    width: 50%;
    float: right;
    margin-bottom: 70px;
    clear: both;
  }

  .timeline-entry:before,
  .timeline-entry:after {
    content: " ";
    display: table;
  }

  .timeline-entry:after {
    clear: both;
  }

  .timeline-entry:before,
  .timeline-entry:after {
    content: " ";
    display: table;
  }

  .timeline-entry:after {
    clear: both;
  }

  .timeline-entry.begin {
    margin-bottom: 0;
  }

  .timeline-entry.left-aligned {
    float: left;
  }
</style>

{#if aligned === 'end'}
<article class="timeline-entry begin">
  <TimelineEntryContent empty={true} />
</article>
{:else}
<article class="timeline-entry {aligned}-aligned">
  <TimelineEntryContent
    time={getTime(post.date)}
    date={getDate(post.date)}
    type={getType(post.typeId)}
    user={post.user}
    message={post.message}
    datetime={post.date} />
</article>
{/if}
