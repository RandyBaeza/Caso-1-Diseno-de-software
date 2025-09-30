import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

// Mock del useAuth
jest.mock("../contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

import { useAuth } from "../contexts/AuthContext";
const mockedUseAuth = useAuth as jest.Mock;

describe("ProtectedRoute", () => {
  const childrenText = "Contenido protegido";

  test("muestra loading cuando isLoading es true", () => {
    mockedUseAuth.mockReturnValue({
      isAuthenticated: false,
      isLoading: true,
      loginWithRedirect: jest.fn(),
    });

    render(<ProtectedRoute>{childrenText}</ProtectedRoute>);

    // Verificamos que el contenedor de loading esté presente
    expect(document.querySelector(".animate-pulse")).toBeInTheDocument();
  });

  test("muestra login cuando no está autenticado", () => {
    const loginMock = jest.fn();
    mockedUseAuth.mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
      loginWithRedirect: loginMock,
    });

    render(<ProtectedRoute>{childrenText}</ProtectedRoute>);

    // Verifica que el texto de login esté presente
    expect(screen.getByText(/Iniciar Sesión para Continuar/i)).toBeInTheDocument();

    // Simula click en el botón y verifica que se llame la función
    fireEvent.click(screen.getByText(/Iniciar Sesión para Continuar/i));
    expect(loginMock).toHaveBeenCalled();
  });

  test("muestra children cuando está autenticado", () => {
    mockedUseAuth.mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      loginWithRedirect: jest.fn(),
    });

    render(<ProtectedRoute>{childrenText}</ProtectedRoute>);

    // Verifica que el contenido children se muestre
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
