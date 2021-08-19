import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greetings";

describe("Greeting Component", () => {
    test("renders Hello word as text", () => {
        //Arrange
        render(<Greeting />);
    
        //Act
    
        //Assert
        const helloWordElement = screen.getByText("Hello World", { exact: false })
        expect(helloWordElement).toBeInTheDocument();
    });
    test("renders not good as button is not hit", () => {
        render(<Greeting />);

        const notGoodElement = screen.getByText("not good", { exact: false });
        expect(notGoodElement).toBeInTheDocument();
    });
    test("renders my please as button is hit", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        
        const goodElement = screen.getByText("It's my pleasure");
        expect(goodElement).toBeInTheDocument();
    });
});
