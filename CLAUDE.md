# CLAUDE.md

## プロジェクト概要

Go、TypeScript、React、Kubernetes の学習を目的としたビンゴゲーム。

## 技術スタック

### Backend
- 言語: Go 1.25
- フレームワーク: Echo v5
- DB: PostgreSQL (pgx/v5)
- ポート: 1323

### Frontend
- UI: React 19 + TypeScript
- バンドラー: Vite
- ランタイム: Cloudflare Workers (wrangler)
- パッケージマネージャー: pnpm

### インフラ
- 現在: Docker Compose
- 予定: Kubernetes (k8s マニフェストは `*.yaml` に記述済み)

## ディレクトリ構成

```
bingo-k8s/
├── backend/
│   ├── cmd/bingo/
│   │   ├── main.go          # エントリーポイント (Echo サーバー)
│   │   ├── db/              # DB 接続インターフェース
│   │   └── model/           # データモデル
│   ├── Dockerfile
│   └── go.mod
├── frontend/
│   ├── src/                 # React アプリ
│   ├── worker/index.ts      # Cloudflare Worker (API ルーティング)
│   ├── vite.config.ts
│   └── wrangler.jsonc       # Cloudflare デプロイ設定
├── docker-compose.yml       # ローカル開発用
├── deployment.yaml          # K8s: Go API デプロイ
├── db-deployment.yaml       # K8s: PostgreSQL デプロイ
├── db-service.yaml          # K8s: PostgreSQL サービス
└── service.yaml             # K8s: Go API サービス
```

## 主要コマンド

### Backend

```bash
# ローカル起動
cd backend && go run ./cmd/bingo/...

# Docker で起動
docker compose up
```

### Frontend

```bash
cd frontend

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# Cloudflare へデプロイ
pnpm deploy
```

## コーディングルール

- コード内のコメントは **日本語** で書く
- `git commit` は明示的に指示されるまで実行しない

## 会話スタイル

- ユーザーとの会話は **日本語** で、超かわいいトーンで話す
