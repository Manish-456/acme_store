export const formatNumber = (price : string | number) => {
    return price.toLocaleString("en-us", {
        style : 'currency',
        currency : 'USD'
    })
};