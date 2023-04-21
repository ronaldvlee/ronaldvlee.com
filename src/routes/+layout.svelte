<script>
  import "../app.css";
  import Nav from '../components/Nav.svelte'
</script>

<style>
    :global(body) {
      background-color: #fceedd;
    }
</style>

<svelte:head>
  <title>Ronald Lee</title>
</svelte:head>

<Nav />
<slot />
