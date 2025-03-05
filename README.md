プロジェクト概要
このアプリは、自分の性格や好みを知るための「診断テスト」を受けられるアプリです。
たとえば、16個の質問に答えると、「あなたは〇〇タイプです！」と結果が出ます。
また、結果を使ってプロフィールを作ったり、みんなとコミュニケーションできたりします。

主な機能
診断テスト（診断ボタン、グレーアウト、スクロール）
結果表示→詳細結果表示
コミュニティページ（投稿とコメント、いいねボタン）
プロフィール作成: 自分の診断結果や活動をまとめたページを作ります。
OAuthログイン: 詳細結果とコミュニティページはログインがないと見れない
お問い合わせ
SNSへのシェア

使ってるコード


.
├── .env.local →アプリが使う秘密の鍵をまとめてます。MongoDBに接続するための接続文字列と、Google認証情報、Nextjsでの認証ライブラリが書かれています。
├── .gitignore →gitが無視するファイルを指定しています。今回だとデフォルトのまま使ってます。
├── README.md →プロジェクトの説明書です。今回だと、①プロジェクト概要②主な機能③ファイルの意味④使っているコードの説明について書かれています。
├── app →診断テストでのmain部分のコードがまとめられています。
│   ├── api →apiエンドポイントが定義されているファイルがまとまっています。
│   │   ├── auth →認証(ログイン、ログアウト)の全体の入り口
│   │   │   ├── [...nextauth] →NextAuth.jsを使うために、キャッチオールルートである[...nextauth]が利用されています。
│   │   │   │   └── route.ts
│   │   │   └── options.ts →authはOauthについてのこと
│   │   ├── comments
│   │   │   ├── [id]
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── generateFeedback
│   │   │   └── route.ts
│   │   ├── getProfile
│   │   │   └── route.ts
│   │   ├── login
│   │   │   └── route.ts
│   │   ├── logout
│   │   │   └── route.ts
│   │   ├── posts
│   │   │   ├── [id]
│   │   │   │   ├── like
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── saveDiagnosis
│   │   │   └── route.ts
│   │   └── updateProfile
│   │       └── route.ts
│   ├── auth
│   │   └── signin
│   │       └── page.tsx
│   ├── community
│   │   ├── CommentItem.tsx
│   │   ├── CommentsSection.tsx
│   │   ├── CreatePostForm.tsx
│   │   ├── PostItem.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── QuestionItem.tsx
│   │   ├── RadioRating.tsx
│   │   ├── SessionProviderWrapper.tsx
│   │   └── auth
│   │       ├── LoginModal.tsx
│   │       └── SignOutButton.tsx
│   ├── constants
│   │   ├── patternDetails.ts
│   │   ├── questions.ts
│   │   └── ratingOptions.ts
│   ├── contact
│   │   └── page.tsx
│   ├── diagnosis
│   │   └── page.tsx
│   ├── globals.css
│   ├── hooks
│   │   └── useDiagnosis.ts
│   ├── layout.tsx
│   ├── login
│   │   └── page.tsx
│   ├── page.tsx
│   ├── profile
│   │   ├── ProfileForm.tsx
│   │   ├── page.tsx
│   │   └── view
│   │       └── page.tsx
│   ├── result
│   │   ├── detailed
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── utils
│       └── axiosClient.ts
├── components
│   ├── Footer.tsx
│   └── Header.tsx
├── eslint.config.mjs
├── global.d.ts
├── lib
│   ├── db.ts
│   └── mongodb.ts
├── middleware.ts
├── models
│   ├── Comment.ts
│   ├── DiagnosisResult.ts
│   ├── Post.ts
│   └── UserProfile.ts
├── next-auth.d.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── tailwind.config.ts
└── tsconfig.json


