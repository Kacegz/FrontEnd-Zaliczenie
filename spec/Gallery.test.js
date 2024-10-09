import { render, screen, act } from "@testing-library/react";
import Gallery from "../src/Gallery/Gallery";

describe("Gallery", () => {
  it("Renders four images", async () => {
    render(<Gallery />);
    const div = screen.getByTestId("gallery");
    const images = div.querySelectorAll("img");
    expect(images.length).toBe(4);
  });
  it("Renders the first image", async () => {
    render(<Gallery />);
    const div = screen.getByTestId("gallery");
    const images = div.querySelectorAll("img");
    expect(images[0]).toBeInTheDocument();
    expect(images[0].alt).toContain("photo1");
  });
  it("Renders the second image", async () => {
    render(<Gallery />);
    const div = screen.getByTestId("gallery");
    const images = div.querySelectorAll("img");
    expect(images[1]).toBeInTheDocument();
    expect(images[1].src).toContain("european-shorthair");
  });
  it("Renders the third and fourth image, but without a source", async () => {
    render(<Gallery />);
    const div = screen.getByTestId("gallery");
    const images = div.querySelectorAll("img");
    expect(images[2]).toBeInTheDocument();
    expect(images[2].src).toBe("");
    expect(images[3]).toBeInTheDocument();
    expect(images[3].src).toBe("");
  });
});
