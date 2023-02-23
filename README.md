# Express（画面なしの）＋TypeScript環境

バックエンドのAPIサーバの環境構築を開発する際の学習リポジトリです。

1. expressをインストールする
    ```bash
    npm install -g  express-generator
    express --git --no-view  
    npm install
    ```
2. 不要なファイルを削除する
3. TypeScriptのパッケージをインストール、tsconfig.jsonを設定する
    ```bash
    npm install --save-dev typescript @types/node @types/express @types/debug
    npx tsc --init
    npm install --save-dev ts-node nodemon
    ```
4. tsファイルを追加する
5. nodemonをインストールしてホットリロードの設定をする
    ```bash
    npm install --save-dev ts-node nodemon
    ```
