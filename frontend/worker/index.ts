export default {
  fetch(request) {
    const url = new URL(request.url);

    // /api/* へのリクエストを Go バックエンドに転送
    if (url.pathname.startsWith("/api/")) {
      const backendPath = url.pathname.replace("/api", "");
      return fetch(`http://localhost:1323${backendPath}`);
    }
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
