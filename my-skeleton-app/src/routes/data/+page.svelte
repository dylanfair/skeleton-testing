<script>
    export let data;
    const { products, users } = data
    console.log(data);
</script>

<div class="container mx-auto p-8 space-y-8">
    <h1>Data section</h1>
    <p>Here I make a call for some data (from <a href="https://dummyjson.com/" target="_blank">DummyJSON</a>) and display it on the screen.</p>
    <hr />


    <h2 class="underline" id="products">Top products</h2>
    <div  class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-0.5">
    {#each products as product}
        <div class="logo-item flex flex-col pad-4">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
        </div>
    {/each}
    </div>

    <h2 class="underline" id="users">Top users</h2>
    <div  class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-5 gap-0.5">
    {#each users as user}
        <div class="logo-item flex flex-col pad-4">
            <h4>{user.firstName} {user.lastName}</h4>
            <p>Age {user.age} with {user.eyeColor} eyes.</p>
        </div>
    {/each}
    </div>
</div>