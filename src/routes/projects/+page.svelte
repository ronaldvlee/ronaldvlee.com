<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<section class='grid'>
    <div class='mt-5 mb-10 mx-auto'>
        <h1 class='text-center text-5xl'>projects</h1>
        <p class='my-2 px-5'>Here are some of the projects I have done. Check out my <a class='text-blue-600 hover:underline' href='https://github.com/ronaldvlee/'>github</a>!</p>
    </div>
    <div class='grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-32 justify-self-center mx-16 lg:mx-52'>
        {#each data.projects.data as project }
            <div class='relative pt-10 px-5 border rounded-lg bg-[#786151] text-white'>
                <h1 class='text-3xl font-bold text-center mb-4'>{project['Name']}</h1>
                
                <a href={project['Github']}>
                    <div class='flex max-w-[20rem] h-[20rem] m-auto overflow-hidden border rounded-lg bg-[#D7C4B5] p-5'>
                        <img class='my-auto justify-self-center' src={project['Thumbnail']} alt={project['Name']} draggable="false"/>
                    </div>
                </a>
                
                <p class='p-5'>{project['Description']}</p>

                <!-- Links -->
                <div class='py-5'></div>
                <div class='absolute bottom-5 right-5 flex'>
                    <a href={project['Github']}>
                        <img class='w-8' src='./github-mark-white.png' alt='github' draggable="false"/>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>
