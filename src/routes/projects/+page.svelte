<script lang="ts">
    import type { PageData } from './$types';
    import { GithubBrand, LinkSolid } from 'svelte-awesome-icons';

    export let data: PageData;
</script>

<section class='grid'>
    <div class='mt-5 mb-10 mx-auto'>
        <h1 class='text-center text-5xl'>projects</h1>
        <p class='my-2 px-5'>here are some of the projects i have done. check out my <a class='text-blue-600 hover:underline' href='https://github.com/ronaldvlee/'>github</a>!</p>
    </div>
    <div class='grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-16 mx-16 lg:mx-32 2xl:mx-52'>
        {#each data.projects.data as project }
            <div class='relative pt-10 px-5 rounded-lg bg-brown text-white'>
                <h1 class='text-3xl font-bold text-center mb-4'>{project['Name']}</h1>
                
                <!-- {#if project['Deployed'] || project['Github']} -->
                    <a href={project['Deployed'] ? project['Deployed'] : project['Github']}>
                        <div class='flex max-w-[20rem] h-[20rem] m-auto overflow-hidden rounded-lg bg-brown-light p-5'>
                            <img class='my-auto justify-self-center' src={project['Thumbnail']} alt={project['Name']} draggable="false"/>
                        </div>
                    </a>
                <!-- {:else}
                    <div class='flex max-w-[20rem] h-[20rem] m-auto overflow-hidden border rounded-lg bg-[#D7C4B5] p-5'>
                        <img class='my-auto justify-self-center' src={project['Thumbnail']} alt={project['Name']} draggable="false"/>
                    </div>
                {/if} -->
                
                <p class='p-5'>{project['Description']}</p>

                <!-- Links -->
                <div class='py-5'></div>
                <div class='absolute bottom-5 right-5 flex'>
                    {#if project['Github']}
                        <a class='hover:outline hover:outline-1 hover:outline-offset-2 rounded-lg' href={project['Github']}>
                            <GithubBrand size='30' />
                        </a>
                    {/if}
                    {#if project['Deployed']}
                        <div class='pl-3'/>
                        <a class='hover:outline hover:outline-1 hover:outline-offset-2 rounded-lg' href={project['Deployed']}>
                            <LinkSolid size='30' />
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>
