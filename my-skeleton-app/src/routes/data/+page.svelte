<script>
    export let data;
    const { products, users } = data
    console.log(data);
</script>

<div class="container mx-auto p-8 space-y-8">
    <h1>Data section</h1>
    <p>Here I make a call for some data and display it on the screen.</p>
    
    <h2 class="underline">Top products</h2>
    {#each products as product}
        <div class="flex flex-col pad-4">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
    {/each}
    <h2 class="underline">Top users</h2>
    {#each users as user}
        <div class="flex flex-col pad-4">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Age {user.age} with {user.eyeColor} eyes.</p>
        </div>
    {/each}
</div>