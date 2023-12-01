import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../components/Product";

describe("Product Component", () => {
  test("renders product details", async () => {

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        title: "FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      }),
    });

    render(<Product />);

    await screen.findByText(
      "FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS"
    );

    expect(
      screen.getByText("FJALLRAVEN - FOLDSACK NO. 1 BACKPACK, FITS 15 LAPTOPS")
    ).toBeInTheDocument();
    expect(screen.getByAltText("producto1")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
      )
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Añadir al carrito"));

  });
});
