<script>
  import "../app.css";
  import Nav from '../components/Nav.svelte'
</script>

<style>
    :global(body) {
      background-color: #D7C4B5;
    }
</style>

<svelte:head>
  <title>Ronald Lee</title>
</svelte:head>

<Nav />
<slot />
