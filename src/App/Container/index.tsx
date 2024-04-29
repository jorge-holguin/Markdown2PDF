import { Container } from 'nonaction';
import useText from './Hooks/useText';  // Asegúrate de que useText está exportado con TypeScript

// Tipifica lo que devuelve useText para que TypeScript pueda inferir correctamente los tipos
export const TextContainer = Container(useText);
