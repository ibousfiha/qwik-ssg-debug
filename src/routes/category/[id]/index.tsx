import { component$ } from '@builder.io/qwik';
import { useLocation, type StaticGenerateHandler } from '@builder.io/qwik-city';

console.log('Rendering!')
export default component$(() => {
    const { params } = useLocation();

    return <p>Example: {params.id}</p>;
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
    return {
        params:  [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' }
        ]
    };
};
