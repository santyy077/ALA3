export function formatearDificultad(dificultad) {
    const difficult = String(dificultad).toLowerCase().trim();

    switch (difficult) {
        case 'facil':
        case 'easy':
        case '1':
        case 'f':
            return '★☆☆ (Fácil)';
        case 'media':
        case 'medium':
        case '2':
        case 'm':
            return '★★☆ (Media)';
        case 'dificil':
        case 'hard':
            case '3':
        case 'd':
            return '★★★ (Difícil)';
        default:
            return '★☆☆ (Fácil)';
    }
}

export function formatearEstado(texto) {
    const estado = String(texto).toLowerCase().trim();

    switch (estado) {
        case 'completada':
        case 'completed':
        case '1':
        case 'c':
            return 'completada';

        case 'pendiente':
        case 'pending':
        case '2':
        case 'p':
            return 'pendiente';

        case 'en curso':
        case 'in progress':
        case '3':
        case 'e':
            return 'en curso';

        default:
            return 'pendiente';
    }
}