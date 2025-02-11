import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import Post from "./Post.svelte";
import type { User } from "../interfaces/types";

describe("Post Component", () => {
    const mockUser: User = {
        fullName: "Phelo Macanda",
        time: 8,
        content: "This is a test post.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww"
    };

    it("renders user full name", () => {
        render(Post, { user: mockUser });

        expect(screen.getByText("John Smith")).toBeInTheDocument();
    });

    it("renders time correctly", () => {
        render(Post, { user: mockUser });

        expect(screen.getByText("8 hours ago")).toBeInTheDocument();
    });

    it("displays user initials", () => {
        render(Post, { user: mockUser });

        expect(screen.getByText("JS")).toBeInTheDocument();
    });

    it("renders user content", () => {
        render(Post, { user: mockUser });

        expect(screen.getByText("This is a test post.")).toBeInTheDocument();
    });

    it("renders post image", () => {
        render(Post, { user: mockUser });

        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", mockUser.image);
    });
});
