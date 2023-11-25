

export const useHello = () => {
    const nuxtApp = useNuxtApp()
    console.log(nuxtApp);
    
    return nuxtApp.$hello
}