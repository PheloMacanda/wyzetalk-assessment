/// <reference types="svelte" />

declare module '*.svelte' {
    import { SvelteComponent } from 'svelte';
    const component: typeof SvelteComponent;
    export default component;
}