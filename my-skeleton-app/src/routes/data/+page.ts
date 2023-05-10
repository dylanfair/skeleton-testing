export const load = async ({ fetch }) => {
    
    const fetchProducts = async () => {
        const productRes = await fetch('https://dummyjson.com/products?limit=10')
        const productData = await productRes.json()
        const products = productData.products
        return products
    }
    
    const fetchUsers = async () => {
        const usersRes = await fetch('https://dummyjson.com/users?limit=10')
        const usersData = await usersRes.json()
        const users = usersData.users
        return users
    }

    

    return {
        products: fetchProducts(),
        users: fetchUsers()
    }
}