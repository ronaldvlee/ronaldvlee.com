<script>
    import { goto } from '$app/navigation';
    import MediaQuery from 'svelte-media-queries';

    let innerWidth = 0;
    
    if (innerWidth <= 480){
        goto('./RONALD V LEE RESUME.pdf');
    }
</script>

<svelte:window bind:innerWidth />

<section class='flex'>
    <div class='mx-auto'>
        <h1 class='text-center text-5xl my-5'>resume</h1>

        <MediaQuery query="(min-width: 1281px)" let:matches> <!-- default -->
            {#if matches}
                <embed src="./RONALD V LEE RESUME.pdf" width="1000px" height="700px" />
            {/if}
        </MediaQuery>
        
        <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches> <!-- tablet -->
            {#if matches}
                <embed src="./RONALD V LEE RESUME.pdf" width="1000px" height="700px" />
            {/if}
        </MediaQuery>
    </div>    
</section>
