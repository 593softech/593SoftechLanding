export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function formatDate(fecha: string | undefined): string {
    if (!fecha) return "";
    const date = new Date(fecha);
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('es-ES', opciones);
}

export const sanitizeTitle = (title: string): string => {
    return title
        .replace(/\s+/g, '-') // Reemplaza los espacios con guiones
        .replace(/[¿?¡!]/g, '') // Elimina los signos de interrogación y exclamación
        .replace(/[^a-zA-Z0-9\-]/g, ''); // Elimina caracteres que no sean letras, números o guiones
};
