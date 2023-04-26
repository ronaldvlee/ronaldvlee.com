<script lang='ts'>
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<section class='grid'>
    <div class='mt-5 mx-auto'>
        <h1 class='text-center text-5xl'>hobbies</h1>
        <p class='mt-2 text-center'>i basically just boulder.</p>
    </div>
    <div class='flex overflow-x-auto justify-self-center space-x-16
        w-[100%] lg:w-auto 
        p-5
        scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300'>
        {#each data.videos.data as send}
            <div class='flex-shrink-0'>
                <iframe width="315" height="560" src={send['Link'] + '?&mute=1'} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h1 class='text-center'>{send['Grade']} - {send['Location']}.</h1>
            </div>
        {/each}
    </div>
</section>