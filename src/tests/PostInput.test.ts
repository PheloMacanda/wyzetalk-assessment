import { render, screen, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import PostInput from "./PostInput.svelte";

describe("PostInput Component", () => {
    it("renders user initials (ME)", () => {
        render(PostInput);

        expect(screen.getByText("ME")).toBeInTheDocument();
    });

    it("renders a textarea with a placeholder", () => {
        render(PostInput);

        const textarea = screen.getByPlaceholderText("Share something");
        expect(textarea).toBeInTheDocument();
    });

    it("binds textarea input value correctly", async () => {
        render(PostInput);

        const textarea = screen.getByPlaceholderText("Share something") as HTMLTextAreaElement;

        await fireEvent.input(textarea, { target: { value: "Hello world!" } });

        expect(textarea.value).toBe("Hello world!");
    });

    it("renders image icon", () => {
        render(PostInput);

        const icon = screen.getByRole("img"); // Iconify renders as an <img> element
        expect(icon).toBeInTheDocument();
    });
});
