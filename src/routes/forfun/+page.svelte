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
    <div class='flex gap-16 justify-self-center mt-5'>
        {#each sends as send}
            <div class='display'>
                <iframe width="315" height="560" src={send.link} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h1 class='text-center'>{send.grade} - {send.location}.</h1>
            </div>
        {/each}
    </div>
</section>