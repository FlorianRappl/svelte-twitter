<script>
  import Timeline from './Timeline.svelte';
  import { onMount } from 'svelte';

  let posts = undefined;

  onMount(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(retrievedPosts => {
        posts = retrievedPosts;
      })
      .catch(err => {
        posts = err;
      });
  });
</script>

<div class="container">
  <div class="row">
    {#if posts === undefined}
      <b>Loading posts ...</b>
    {:else if posts instanceof Error}
      <span style="color: red">Error while loading.</span>
    {:else}
      <Timeline posts={posts} />
    {/if}
  </div>
</div>
