export default {
  fetch(request, env) {
    const url = new URL(request.url);

    // /api/* へのリクエストを Go バックエンドに転送
    if (url.pathname.startsWith("/api/")) {
      const backendPath = url.pathname.replace("/api", "");
      return fetch(`http://localhost:1323${backendPath}`);
    }

    // /bingo/* へのリクエストは Cloudflare のアセットを返す
    if (url.pathname.startsWith("/bingo")) {
      url.pathname = url.pathname.replace("/bingo", "");
      return env.ASSETS.fetch(new Request(url, request));
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
