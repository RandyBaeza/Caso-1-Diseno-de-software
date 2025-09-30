// auth.lib.test.ts

describe("Auth Lib - auth0Config", () => {
  beforeEach(() => {
    jest.resetModules(); // fuerza reevaluación del módulo
    localStorage.clear();
    delete (window as any).__AUTH0_DOMAIN__;
    delete (window as any).__AUTH0_CLIENT_ID__;
    delete (window as any).__AUTH0_AUDIENCE__;
  });

  test("usa valores por defecto si no hay nada en window o localStorage", () => {
    const { auth0Config } = require("../lib/auth");

    expect(auth0Config.domain).toBe("dev-dwut2n5nvuu4bl0n.us.auth0.com");
    expect(auth0Config.clientId).toBe("h5wipav5LmusIRE1kBUFUu4VNxbHTlD7");
    expect(auth0Config.audience).toBe("https://twenty-min-connect.lovable.app/users");
    expect(auth0Config.redirectUri).toBe(window.location.origin);
  });

  test("usa valores de window si están definidos", () => {
    (window as any).__AUTH0_DOMAIN__ = "my-domain.com";
    (window as any).__AUTH0_CLIENT_ID__ = "my-client-id";
    (window as any).__AUTH0_AUDIENCE__ = "my-audience";

    const { auth0Config } = require("../lib/auth");

    expect(auth0Config.domain).toBe("my-domain.com");
    expect(auth0Config.clientId).toBe("my-client-id");
    expect(auth0Config.audience).toBe("my-audience");
  });

  test("usa valores de localStorage si window no está definido", () => {
    localStorage.setItem("auth0Domain", "ls-domain.com");
    localStorage.setItem("auth0ClientId", "ls-client-id");
    localStorage.setItem("auth0Audience", "ls-audience");

    const { auth0Config } = require("../lib/auth");

    expect(auth0Config.domain).toBe("ls-domain.com");
    expect(auth0Config.clientId).toBe("ls-client-id");
    expect(auth0Config.audience).toBe("ls-audience");
  });
});

