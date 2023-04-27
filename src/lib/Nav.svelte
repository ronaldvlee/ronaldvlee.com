<script lang="ts">
  import { BarsSolid , XmarkSolid } from 'svelte-awesome-icons';

  let closed: boolean = true;

  const links = [
    {title: 'projects', url: '/projects'},
    {title: 'resume', url: './ronaldlee-resume.pdf'},
    {title: 'hobbies', url: '/forfun'}
  ];
</script>

<nav
  class="flex items-center justify-between flex-wrap py-6 md:mx-24 mx-5 border-b"
>
  <a href="/" class="flex items-center flex-shrink-0 mr-6">
    <img class="w-16 hidden lg:block" src="/logo.png" alt="Logo" />
    <span class="font-semibold text-xl tracking-tight block lg:hidden">ronald lee</span>
  </a>
  <!-- Hamburger menu  -->
  <div class="absolute block lg:hidden right-7 top-8">
    <button class="flex items-center w-3 h-3" on:click={() => (closed = !closed)}>
      <div class:hidden={closed} class="items-center text-sm object-scale-down font-semibold">
        <XmarkSolid size='20'/>
      </div>
      <div class:hidden={!closed}>
        <BarsSolid size='20'/>
      </div>
    </button>
  </div>
  <div
    class:hidden={closed}
    class="w-full flex flex-grow mt-4 lg:mt-0 lg:flex lg:items-center lg:w-auto"
  >
    <!-- Left side elements of Nav -->
    <div class="text-sm lg:flex-grow" ></div>

    <!-- Right side elements of Nav -->
    <div>
      {#each links as link}
        <a href={link.url} class='block lg:inline-block text-lg px-5 py-3 leading-none mt-4 lg:mt-0 hover:underline'>
          {link.title}
        </a>
      {/each}
    </div>
  </div>
</nav>
