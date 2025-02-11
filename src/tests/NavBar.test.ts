import { render, screen, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar.svelte';

describe('Navbar Component', () => {
    it('renders the navbar with title', () => {
        render(NavBar);
        expect(screen.getByText('Social Feed')).toBeInTheDocument();
    });

    it('renders the menu and profile buttons', () => {
        render(NavBar);
        expect(screen.getByRole('button', { name: '☰' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
    });

    it('menu button is clickable', async () => {
        render(NavBar);
        const menuButton = screen.getByRole('button', { name: '☰' });

        await fireEvent.click(menuButton);
        expect(menuButton).toBeEnabled();
    });
});
