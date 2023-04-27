<script lang='ts'>
    import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
</script>

<section class='flex pt-20 px-5'>
    <div class = 'grid gap-10 lg:flex bg-brown mx-auto rounded-lg p-10'>
        <img class='justify-self-center rounded-full w-56 h-56 mr-10 my-auto' src='picture.png' alt='A drawing of Ronald' draggable="false"/>

        <div class='text-xl text-white mr-auto my-auto pl-5'>
            <div class='mb-2'>
                <p>hello! i am ronald lee.</p>
                <p>i'm currently an undergrad at csu fullerton.</p>
                <p>here's my <a href='./ronaldlee-resume.pdf' class='text-blue-300 hover:underline'>resume</a> :&#x29;</p>
            </div>
            <ul>
                <li>los angeles, ca</li>
                <li>csuf 2023</li>
            </ul>
            <div class='flex mt-2 gap-5'>
                <a class='hover:outline hover:outline-1 hover:outline-offset-4 rounded-lg' href='https://www.linkedin.com/in/ronald-v-lee/'>
                    <LinkedinBrand size='35'/>
                </a>
                <a class='hover:outline hover:outline-1 hover:outline-offset-4 rounded-lg' href='https://github.com/ronaldvlee'>
                    <GithubBrand size='35'/>
                </a>
            </div>
        </div>
    </div>
</section>