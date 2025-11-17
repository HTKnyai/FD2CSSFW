# Flat Design 2.0 CSS Framework

軽量でモダンなフラットデザイン2.0フレームワーク。深みのあるフラットデザインを簡単に実現できます。

## 特徴

- 📦 **軽量**: 単一CSSファイル(fd2.css)で完結
- 🎨 **6つのテーマ**: オレンジ、グリーン、ブルー、パープル、レッド、ティール
- 🧩 **豊富なコンポーネント**: ボタン、カード、フォーム、テーブル、モーダルなど
- 📱 **レスポンシブ対応**: モバイルファーストデザイン
- ⚡ **簡単導入**: HTMLに1行追加するだけ
- 🎯 **CSS変数**: テーマの簡単カスタマイズ

---

## クイックスタート

### 1. ファイルの読み込み

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <!-- FD2 CSS -->
  <link rel="stylesheet" href="path/to/fd2.css">
</head>
<body class="fd2-theme-orange">
  <!-- コンテンツ -->
  
  <!-- FD2 JavaScript (オプション) -->
  <script src="path/to/fd2.js"></script>
</body>
</html>
```

### 2. テーマの選択

`<body>`タグにテーマクラスを追加:

```html
<body class="fd2-theme-orange">  <!-- オレンジ -->
<body class="fd2-theme-green">   <!-- グリーン -->
<body class="fd2-theme-blue">    <!-- ブルー -->
<body class="fd2-theme-purple">  <!-- パープル -->
<body class="fd2-theme-red">     <!-- レッド -->
<body class="fd2-theme-teal">    <!-- ティール -->
```

---

## コンポーネント

### ボタン

```html
<!-- 基本ボタン -->
<button class="fd2-btn fd2-btn-primary">プライマリ</button>
<button class="fd2-btn fd2-btn-secondary">セカンダリ</button>
<button class="fd2-btn fd2-btn-danger">削除</button>
<button class="fd2-btn fd2-btn-outline">アウトライン</button>

<!-- サイズバリエーション -->
<button class="fd2-btn fd2-btn-primary fd2-btn-sm">小</button>
<button class="fd2-btn fd2-btn-primary">標準</button>
<button class="fd2-btn fd2-btn-primary fd2-btn-lg">大</button>

<!-- ブロックボタン -->
<button class="fd2-btn fd2-btn-primary fd2-btn-block">全幅ボタン</button>

<!-- 無効化 -->
<button class="fd2-btn fd2-btn-primary" disabled>無効</button>
```

### カード

```html
<!-- 基本カード -->
<div class="fd2-card">
  <div class="fd2-card-header">
    <h3>カードタイトル</h3>
  </div>
  <div class="fd2-card-body">
    カードの内容がここに入ります。
  </div>
  <div class="fd2-card-footer">
    <button class="fd2-btn fd2-btn-primary">アクション</button>
  </div>
</div>

<!-- 検索カード(トグル機能付き) -->
<div class="fd2-card fd2-card-search">
  <div class="fd2-card-header" onclick="toggleCard(this)">
    <span><b>検索条件</b></span>
    <span class="fd2-toggle-mark">−</span>
  </div>
  <div class="fd2-card-body fd2-collapse fd2-collapse-open">
    <form>
      <!-- フォーム内容 -->
    </form>
  </div>
</div>
      <!-- フォーム内容 -->
    </form>
  </div>
</div>

<!-- プライマリカード -->
<div class="fd2-card fd2-card-primary">
  <div class="fd2-card-header">重要な情報</div>
  <div class="fd2-card-body">強調表示されたカード</div>
</div>
```

### フォーム

```html
<!-- 基本フォーム -->
<form>
  <div class="fd2-form-group">
    <label class="fd2-form-label">
      <span class="fd2-label-text">氏名</span>
      <input type="text" class="fd2-form-input" placeholder="山田太郎">
    </label>
  </div>

  <div class="fd2-form-group">
    <label class="fd2-form-label">
      <span class="fd2-label-text">メール</span>
      <input type="email" class="fd2-form-input" placeholder="example@example.com">
    </label>
  </div>

  <div class="fd2-form-group">
    <label class="fd2-form-label">
      <span class="fd2-label-text">メッセージ</span>
      <textarea class="fd2-form-textarea" rows="4"></textarea>
    </label>
  </div>

  <button type="submit" class="fd2-btn fd2-btn-primary">送信</button>
</form>

<!-- 横並びフォーム -->
<form>
  <div class="fd2-form-row">
    <div class="fd2-form-group">
      <label class="fd2-form-label">
        <span class="fd2-label-text">姓</span>
        <input type="text" class="fd2-form-input">
      </label>
    </div>
    <div class="fd2-form-group">
      <label class="fd2-form-label">
        <span class="fd2-label-text">名</span>
        <input type="text" class="fd2-form-input">
      </label>
    </div>
  </div>
</form>

<!-- バリデーションエラー -->
<div class="fd2-form-group">
  <label class="fd2-form-label">
    <span class="fd2-label-text">必須項目</span>
    <input type="text" class="fd2-form-input is-invalid">
  </label>
  <div class="fd2-form-error">この項目は必須です</div>
</div>
```

### テーブル

```html
<!-- 基本テーブル -->
<table class="fd2-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>氏名</th>
      <th>メール</th>
      <th>操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>山田太郎</td>
      <td>yamada@example.com</td>
      <td>
        <button class="fd2-btn fd2-btn-primary fd2-btn-sm">編集</button>
        <button class="fd2-btn fd2-btn-danger fd2-btn-sm">削除</button>
      </td>
    </tr>
    <tr>
      <td>002</td>
      <td>佐藤花子</td>
      <td>sato@example.com</td>
      <td>
        <button class="fd2-btn fd2-btn-primary fd2-btn-sm">編集</button>
        <button class="fd2-btn fd2-btn-danger fd2-btn-sm">削除</button>
      </td>
    </tr>
  </tbody>
</table>

<!-- ストライプテーブル -->
<table class="fd2-table fd2-table-striped">
  <!-- ... -->
</table>

<!-- ボーダーテーブル -->
<table class="fd2-table fd2-table-bordered">
  <!-- ... -->
</table>

<!-- レスポンシブテーブル -->
<div class="fd2-table-responsive">
  <table class="fd2-table">
    <!-- ... -->
  </table>
</div>
```

### モーダル

```html
<!-- モーダルを開くボタン -->
<button class="fd2-btn fd2-btn-primary" onclick="openModal('myModal')">
  モーダルを開く
</button>

<!-- モーダル本体 -->
<div class="fd2-modal" id="myModal">
  <div class="fd2-modal-overlay"></div>
  <div class="fd2-modal-content">
    <div class="fd2-modal-header">
      <h3>確認</h3>
      <button class="fd2-modal-close" onclick="closeModal('myModal')">×</button>
    </div>
    <div class="fd2-modal-body">
      <p>本当に削除してもよろしいですか?</p>
    </div>
    <div class="fd2-modal-footer">
      <button class="fd2-btn fd2-btn-danger" onclick="closeModal('myModal')">削除</button>
      <button class="fd2-btn fd2-btn-secondary" onclick="closeModal('myModal')">キャンセル</button>
    </div>
  </div>
</div>
```

---

## レイアウト

### コンテナ

```html
<!-- 固定幅コンテナ(max-width: 1200px) -->
<div class="fd2-container">
  コンテンツ
</div>

<!-- 全幅コンテナ -->
<div class="fd2-container-fluid">
  コンテンツ
</div>
```

### グリッドシステム

```html
<div class="fd2-row">
  <div class="fd2-col-6">左カラム(50%)</div>
  <div class="fd2-col-6">右カラム(50%)</div>
</div>

<div class="fd2-row">
  <div class="fd2-col-4">1/3</div>
  <div class="fd2-col-4">1/3</div>
  <div class="fd2-col-4">1/3</div>
</div>

<div class="fd2-row">
  <div class="fd2-col-3">1/4</div>
  <div class="fd2-col-9">3/4</div>
</div>

<!-- 自動分割 -->
<div class="fd2-row">
  <div class="fd2-col">Auto</div>
  <div class="fd2-col">Auto</div>
  <div class="fd2-col">Auto</div>
</div>
```

---

## ユーティリティクラス

### スペーシング

```html
<!-- Margin -->
<div class="fd2-m-0">margin: 0</div>
<div class="fd2-m-1">margin: 8px</div>
<div class="fd2-m-2">margin: 16px</div>
<div class="fd2-m-3">margin: 24px</div>
<div class="fd2-m-4">margin: 32px</div>
<div class="fd2-m-5">margin: 40px</div>

<!-- 方向指定 -->
<div class="fd2-mt-2">margin-top: 16px</div>
<div class="fd2-mb-2">margin-bottom: 16px</div>
<div class="fd2-ml-2">margin-left: 16px</div>
<div class="fd2-mr-2">margin-right: 16px</div>

<!-- Padding -->
<div class="fd2-p-2">padding: 16px</div>
<div class="fd2-pt-2">padding-top: 16px</div>
<div class="fd2-pb-2">padding-bottom: 16px</div>
<div class="fd2-pl-2">padding-left: 16px</div>
<div class="fd2-pr-2">padding-right: 16px</div>
```

### 表示制御

```html
<div class="fd2-hidden">非表示</div>
<div class="fd2-block">ブロック表示</div>
<div class="fd2-inline">インライン表示</div>
<div class="fd2-inline-block">インラインブロック表示</div>
<div class="fd2-flex">Flexbox</div>
<div class="fd2-hidden-mobile">モバイルで非表示</div>
```

### Flexbox

```html
<div class="fd2-flex fd2-justify-between fd2-align-center">
  <div>左</div>
  <div>右</div>
</div>

<div class="fd2-flex fd2-flex-column">
  <div>上</div>
  <div>下</div>
</div>

<div class="fd2-flex">
  <div class="fd2-flex-1">伸縮</div>
  <div>固定</div>
</div>
```

### テキスト

```html
<!-- 位置 -->
<div class="fd2-text-left">左寄せ</div>
<div class="fd2-text-center">中央寄せ</div>
<div class="fd2-text-right">右寄せ</div>

<!-- 色 -->
<span class="fd2-text-primary">プライマリカラー</span>
<span class="fd2-text-danger">危険色</span>
<span class="fd2-text-muted">ミュート</span>

<!-- サイズ -->
<div class="fd2-text-sm">小さいテキスト</div>
<div class="fd2-text-base">標準テキスト</div>
<div class="fd2-text-lg">大きいテキスト</div>
<div class="fd2-text-xl">特大テキスト</div>

<!-- 太さ -->
<div class="fd2-font-weight-light">細字</div>
<div class="fd2-font-weight-normal">標準</div>
<div class="fd2-font-weight-bold">太字</div>

<!-- 変換 -->
<div class="fd2-text-uppercase">UPPERCASE</div>
<div class="fd2-text-lowercase">lowercase</div>
<div class="fd2-text-capitalize">Capitalize</div>
```

### 背景

```html
<div class="fd2-bg-primary">プライマリ背景</div>
<div class="fd2-bg-primary-light">プライマリライト背景</div>
<div class="fd2-bg-white">白背景</div>
<div class="fd2-bg-gray-50">グレー背景</div>
```

### ボーダー・影

```html
<!-- ボーダー -->
<div class="fd2-border">ボーダー</div>
<div class="fd2-border-top">上ボーダー</div>
<div class="fd2-border-0">ボーダーなし</div>

<!-- 角丸 -->
<div class="fd2-rounded">角丸</div>
<div class="fd2-rounded-sm">小さい角丸</div>
<div class="fd2-rounded-lg">大きい角丸</div>
<div class="fd2-rounded-circle">円形</div>
<div class="fd2-rounded-0">角丸なし</div>

<!-- 影 -->
<div class="fd2-shadow-sm">小さい影</div>
<div class="fd2-shadow-md">中くらいの影</div>
<div class="fd2-shadow-lg">大きい影</div>
<div class="fd2-shadow-none">影なし</div>
```

---

## JavaScript API

`fd2.js`を読み込むと、以下の関数が使えます:

### モーダル制御

```javascript
// モーダルを開く
FD2.openModal('myModal');
// または
openModal('myModal');

// モーダルを閉じる
FD2.closeModal('myModal');
// または
closeModal('myModal');
```

### カード制御

```html
<div class="fd2-card-header" onclick="toggleCard(this)">
  <span>タイトル</span>
  <span class="fd2-toggle-mark">−</span>
</div>
```

```javascript
// JavaScriptから直接呼び出し
FD2.toggleCard(element);
```

### 表示制御

```javascript
// 要素を表示
FD2.show('elementId');

// 要素を非表示
FD2.hide('elementId');

// 表示/非表示をトグル
FD2.toggle('elementId');
```

### テーマ切り替え

```javascript
// テーマを変更
FD2.setTheme('blue');  // 'orange', 'green', 'blue', 'purple', 'red', 'teal'

// 保存されたテーマを読み込み(自動実行)
FD2.loadTheme();
```

### フォームバリデーション

```html
<form id="myForm" onsubmit="return FD2.validateForm(this)">
  <div class="fd2-form-group">
    <input type="text" class="fd2-form-input" required>
  </div>
  <button type="submit" class="fd2-btn fd2-btn-primary">送信</button>
</form>
```

### その他のユーティリティ

```javascript
// 確認ダイアログ付き削除
<button onclick="FD2.confirmDelete(event, '本当に削除しますか?')">削除</button>

// テーブル行のハイライト
FD2.highlightRow(rowElement);

// スムーズスクロール
FD2.scrollTo('targetElementId');
```

---

## 🎨 マイクロインタラクション

FD2フレームワークには、フラットデザイン2.0の「深み」を表現する多彩なマイクロインタラクションが組み込まれています:

### リップルエフェクト
ボタンをクリックすると波紋が広がります(自動適用)

### ホバーエフェクト
- **ボタン**: 2px持ち上げ + 影の拡大
- **テーブル行**: 左へスライド + スケール拡大 + 左ボーダー出現
- **カード**: 影の拡大
- **フォーム**: 1px持ち上げ + 外側グロー

### アニメーション
- **検索カード**: 滑らかな開閉(max-height transition)
- **モーダル**: スライドアップ + スケール + 背景ブラー
- **トグルマーク**: 回転アニメーション
- **フォーカス**: パルスアニメーション

### ローディング表示

```html
<!-- スピナー -->
<span class="fd2-loading"></span>

<!-- スケルトンローディング -->
<div class="fd2-skeleton" style="width: 200px; height: 20px;"></div>
```

---

## カスタマイズ

CSS変数を上書きすることで、簡単にカスタマイズできます:

```css
:root {
  /* プライマリカラーを変更 */
  --fd2-primary: #ff5722;
  --fd2-primary-hover: #e64a19;
  
  /* スペーシングを変更 */
  --fd2-spacing-1: 10px;
  --fd2-spacing-2: 20px;
  
  /* ボーダー半径を変更 */
  --fd2-border-radius: 12px;
  
  /* フォントを変更 */
  --fd2-font-family: "游ゴシック", YuGothic, sans-serif;
}
```

---

## ブラウザサポート

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

---

## ライセンス

MIT License

---

## 更新履歴

### v1.1.0 (2025-11-17)
- 🎨 **フラットデザイン2.0の深みを強化**
  - 全テーマに環境光グラデーション背景を追加
  - ボタンに微細なグラデーションと持ち上げエフェクト実装
  - テーブル行のホバー時に拡大・左スライド・左ボーダーアニメーション追加
  - カードに繊細な影とホバー効果を追加
- ✨ **リッチなマイクロインタラクション**
  - ボタンクリック時のリップルエフェクト(波紋)を実装
  - 検索カードの開閉に滑らかなアニメーション追加(max-height + opacity)
  - トグルマークの回転アニメーション実装
  - フォーカス時のパルスアニメーション追加
- 🎭 **モーダルの大幅改善**
  - 背景ブラーエフェクト(backdrop-filter)追加
  - スライドアップ + スケールアニメーション実装
  - 閉じるボタンに回転ホバーエフェクト追加
  - グラデーション背景とボーダー強調
- 💫 **フォーム要素の改善**
  - 入力欄に微細なグラデーション背景追加
  - フォーカス時の持ち上げエフェクト実装
  - リッチな影とハイライト効果
- 🔧 **追加機能**
  - ローディングアニメーション(.fd2-loading)
  - スケルトンローディング(.fd2-skeleton)
  - スムーズスクロール対応

### v1.0.0 (2025-11-17)
- 初回リリース
- 6つのテーマ搭載
- 基本コンポーネント実装
- JavaScriptヘルパー関数追加

---

## サポート

問題や質問がある場合は、プロジェクトのIssueトラッカーをご利用ください。

**Enjoy Flat Design 2.0! 🎨**