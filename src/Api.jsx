export const URL = "http://localhost:3000";

export function CADASTRAR(body) {
  return {
    url: URL,
    options: {
      method: "POST",
      headers: {
        "Content=Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
