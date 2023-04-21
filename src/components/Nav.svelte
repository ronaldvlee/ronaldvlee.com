<script lang="ts">
    let closed = true;
  </script>
  
  <nav
    class="flex items-center justify-between flex-wrap py-6 md:mx-24 mx-5 border-b"
  >
    <a href="/" class="flex items-center flex-shrink-0 mr-6">
      <img
        class="w-16 hidden lg:block"
        src="/logo.png"
        alt="Logo"
      />
      <span class="font-semibold text-xl tracking-tight block lg:hidden"
        >Ronald Lee</span
      >
    </a>
    <!-- Hamburger menu  -->
    <div class="block lg:hidden">
      <button
        class="flex items-center w-3 h-3 p-3 pr-3"
        on:click={() => (closed = !closed)}
      >
        <div
          class:hidden={closed}
          class="items-center text-sm object-scale-down font-semibold"
        >
          <!-- X (heroicons) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class:hidden={!closed} class="space-y-1 object-scale-down">
          <!-- Hamburger (heroicons) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
    <div
      class:hidden={closed}
      class="w-full flex flex-grow mt-4 lg:mt-0 lg:flex lg:items-center lg:w-auto"
    >
      <!-- Left side elements of Nav -->
      <div class="text-sm lg:flex-grow" />
  
      <!-- Right side elements of Nav -->
      <div>
        <a
          href="/contact"
          class="block lg:inline-block text-lg px-5 py-3 leading-none mt-4 rounded lg:mt-0 lg:bg-blue-300 lg:text-white"
          >contact</a
        >
        <a
          href="/projects"
          class="block lg:inline-block text-lg px-5 py-3 leading-none mt-4 lg:mt-0"
          >projects</a
        >
        <a
          href="./RONALD V LEE RESUME.pdf"
          class="block lg:inline-block text-lg px-5 py-3 leading-none mt-4 lg:mt-0"
          >resume</a
        >
      </div>
    </div>
  </nav>
  