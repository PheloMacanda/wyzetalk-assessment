import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import BottomNav from "./BottomNav.svelte";

describe("BottomNav Component", () => {
    it("renders bottom navigation bar", () => {
        render(BottomNav);
        
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    });

    it("renders all navigation buttons", () => {
        render(BottomNav);

        // Ensure all 5 buttons are present
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(5);
    });

    it("buttons contain icons", () => {
        render(BottomNav);

        // Check if the icons are present inside the buttons
        expect(screen.getByTestId("icon-home")).toBeInTheDocument();
        expect(screen.getByTestId("icon-chat")).toBeInTheDocument();
        expect(screen.getByTestId("icon-people")).toBeInTheDocument();
        expect(screen.getByTestId("icon-bubble")).toBeInTheDocument();
        expect(screen.getByTestId("icon-bell")).toBeInTheDocument();
    });
});
