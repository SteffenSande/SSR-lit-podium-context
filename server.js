// server.js
export default async function server(app) {
  app.setContentState(async (req) => {
    return [
      { name: "Norway" },
      { name: "Sweden" },
      { name: "Finland" },
      { name: "Denmark" },
      { name: "New Zealand??" },
    ];
  });
}
