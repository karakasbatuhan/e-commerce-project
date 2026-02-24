export const slugify = (text) => {
    if (!text) return "";
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           
        .replace(/ğ/g, 'g')             
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^\w\-]+/g, '')      
        .replace(/\-\-+/g, '-')       
        .replace(/^-+/, '')           
        .replace(/-+$/, '');           
};