export default {
  fetch(request, env) {
    const url = new URL(request.url);

    // /bingo/api/* へのリクエストを Go バックエンドに転送
    if (url.pathname.startsWith("/api/")) {
      return fetch(`https://shirurona.f5.si/bingo/${url.pathname}`);
    }

    // /bingo/* へのリクエストは Cloudflare のアセットを返す
    if (url.pathname.startsWith("/bingo")) {
      url.pathname = url.pathname.replace("/bingo", "");
      return env.ASSETS.fetch(new Request(url, request));
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
