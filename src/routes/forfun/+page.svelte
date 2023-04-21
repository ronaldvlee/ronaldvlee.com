<script type='ts'>
    let sends = [
        {location: 'the post, pasadena', link: 'https://www.youtube.com/embed/pmDOuDX3gR4', grade:'v7'},
        {location: 'la boulders, los angeles', link: 'https://www.youtube.com/embed/quM-lbustO0', grade:'v7'}
    ]
</script>

<section class='grid'>
    <div class='mt-5 mx-auto'>
        <h1 class='text-center text-5xl'>hobbies</h1>
        <p class='mt-2 text-center'>i basically just boulder.</p>
    </div>
    <div class='flex overflow-x-auto justify-self-center space-x-16
        w-[100%] lg:w-auto 
        mt-5 
        scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300'>
        {#each sends as send}
            <div class='flex-shrink-0'>
                <iframe width="315" height="560" src={send.link + '?&mute=1'} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h1 class='text-center'>{send.grade} - {send.location}.</h1>
            </div>
        {/each}
    </div>
</section>