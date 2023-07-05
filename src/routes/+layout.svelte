<script>
  import "../app.css";
  import Nav from './Nav.svelte'
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

<div class='my-32'></div>

<!-- Bottom Right Text -->
<div class='hidden lg:block lg:fixed right-0 bottom-0 m-2 text-slate-400 text-xs text-right'>
  <p>
    find this project on <a href='https://github.com/ronaldvlee/CPSC-349-Spring-2023-Final' class='underline'>github</a>
  </p>
  <p>
    link to the <a href='https://docs.google.com/spreadsheets/d/1Xn058JYBuDPN9ZsGI4kV1ZT79OkVnSrVAUXdyT2-SMc' class='underline'>spreadsheet</a>
  </p>
</div>