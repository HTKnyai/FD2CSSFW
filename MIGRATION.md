# 既存プロジェクトへのFD2移行ガイド

このガイドでは、既存のJavaServlet/JSPプロジェクトをFlat Design 2.0フレームワークに移行する手順を説明します。

---

## 移行前の準備

### 1. ファイルのバックアップ
既存のCSSとJavaScriptファイルをバックアップしてください。

### 2. 必要なファイル
以下のファイルをプロジェクトに追加:
```
webapp/
├── css/
│   └── fd2.css       # FD2フレームワーク
└── js/
    └── fd2.js        # FD2ヘルパー関数(オプション)
```

---

## 移行手順

### ステップ1: HTML基本構造の更新

**変更前:**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
```

**変更後:**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/fd2.css">
  <link rel="stylesheet" href="css/custom.css">  <!-- カスタムスタイル用 -->
</head>
<body class="fd2-theme-orange">  <!-- テーマ選択 -->
```

### ステップ2: ボタンクラスの置き換え

**変更前:**
```html
<button class="new-btn">新規登録</button>
<button class="edit-btn">編集</button>
<button class="delete-btn">削除</button>
```

**変更後:**
```html
<button class="fd2-btn fd2-btn-primary">新規登録</button>
<button class="fd2-btn fd2-btn-primary fd2-btn-sm">編集</button>
<button class="fd2-btn fd2-btn-danger fd2-btn-sm">削除</button>
```

### ステップ3: カード構造の更新

**変更前:**
```html
<div class="search-card">
  <div class="search-header" onclick="toggleSearch()">
    <span>検索条件</span>
    <span id="toggleMark">−</span>
  </div>
  <div id="searchBody" class="search-body open">
    <!-- 内容 -->
  </div>
</div>
```

**変更後:**
```html
<div class="fd2-card fd2-card-search">
  <div class="fd2-card-header" onclick="toggleCard(this)">
    <span><b>検索条件</b></span>
    <span class="fd2-toggle-mark">−</span>
  </div>
  <div class="fd2-card-body fd2-collapse-open">
    <!-- 内容 -->
  </div>
</div>
```

### ステップ4: フォームの更新

**変更前:**
```html
<label>
  <span>氏名</span>
  <input type="text" name="nmEmployee">
</label>
```

**変更後:**
```html
<div class="fd2-form-group">
  <label class="fd2-form-label">
    <span class="fd2-label-text">氏名</span>
    <input type="text" name="nmEmployee" class="fd2-form-input">
  </label>
</div>
```

### ステップ5: テーブルの更新

**変更前:**
```html
<table>
  <thead>
    <tr><th>ID</th><th>氏名</th></tr>
  </thead>
  <tbody>
    <!-- データ -->
  </tbody>
</table>
```

**変更後:**
```html
<table class="fd2-table fd2-table-striped">
  <thead>
    <tr><th>ID</th><th>氏名</th></tr>
  </thead>
  <tbody>
    <!-- データ -->
  </tbody>
</table>
```

### ステップ6: モーダルの更新

**変更前 (既存のフォームカード):**
```html
<div id="employeeFormCard" class="form-card hidden">
  <h3 id="employeeFormTitle">従業員 新規</h3>
  <form>
    <!-- フォーム内容 -->
  </form>
</div>
```

**変更後 (FD2モーダル):**
```html
<div class="fd2-modal" id="employeeFormModal">
  <div class="fd2-modal-overlay"></div>
  <div class="fd2-modal-content">
    <div class="fd2-modal-header">
      <h3>従業員 新規</h3>
      <button class="fd2-modal-close" onclick="closeModal('employeeFormModal')">×</button>
    </div>
    <div class="fd2-modal-body">
      <form>
        <!-- フォーム内容 -->
      </form>
    </div>
    <div class="fd2-modal-footer">
      <button class="fd2-btn fd2-btn-primary">登録</button>
      <button class="fd2-btn fd2-btn-secondary" onclick="closeModal('employeeFormModal')">キャンセル</button>
    </div>
  </div>
</div>
```

---

## 具体例: main.jspの移行

### 変更前のコード
```jsp
<body>
  <header>
    <h1>従業員・部署管理システム</h1>
    <div class="mode-buttons">
      <button class="mode-btn employee-btn">従業員モード</button>
    </div>
  </header>

  <main class="employee-mode">
    <button class="new-btn">新規登録</button>
    
    <table>
      <thead>
        <tr><th>ID</th><th>氏名</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>山田太郎</td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
```

### 変更後のコード
```jsp
<body class="fd2-theme-orange">
  <div class="fd2-container">
    <header class="fd2-mb-3">
      <h1 class="fd2-text-center fd2-text-primary">従業員・部署管理システム</h1>
      <div class="fd2-flex fd2-justify-center fd2-mt-2">
        <button class="fd2-btn fd2-btn-primary">従業員モード</button>
        <button class="fd2-btn fd2-btn-secondary fd2-ml-2">部署モード</button>
      </div>
    </header>

    <main>
      <div class="fd2-mb-2 fd2-text-right">
        <button class="fd2-btn fd2-btn-primary" onclick="openModal('employeeFormModal')">
          新規登録
        </button>
      </div>
      
      <table class="fd2-table fd2-table-striped">
        <thead>
          <tr><th>ID</th><th>氏名</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>山田太郎</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</body>
```

---

## JavaScript関数の移行

### 変更前
```javascript
function openForm(mode, button = null) {
  const formCard = document.getElementById("employeeFormCard");
  formCard.classList.remove("hidden");
}

function closeForm() {
  document.querySelectorAll(".form-card").forEach(card => {
    card.classList.add("hidden");
  });
}

function toggleSearch() {
  const body = document.getElementById("searchBody");
  body.classList.toggle("open");
}
```

### 変更後 (FD2を使用)
```javascript
// FD2のヘルパー関数を使用
// openModal('employeeFormModal') - モーダルを開く
// closeModal('employeeFormModal') - モーダルを閉じる
// toggleCard(element) - カードを開閉

// カスタム関数も追加可能
function openEmployeeForm(employeeData) {
  // データをフォームにセット
  document.getElementById('f_nmEmployee').value = employeeData.nm || '';
  // モーダルを開く
  openModal('employeeFormModal');
}
```

---

## テーマ切り替えの実装

### HTML
```html
<select onchange="FD2.setTheme(this.value)">
  <option value="orange">オレンジ</option>
  <option value="green">グリーン</option>
  <option value="blue">ブルー</option>
  <option value="purple">パープル</option>
  <option value="red">レッド</option>
  <option value="teal">ティール</option>
</select>
```

### カスタムテーマボタン
```html
<div class="theme-buttons">
  <button class="fd2-btn fd2-btn-sm" onclick="FD2.setTheme('orange')" 
          style="background: #ff9800;">🟠</button>
  <button class="fd2-btn fd2-btn-sm" onclick="FD2.setTheme('green')" 
          style="background: #4CAF50;">🟢</button>
  <button class="fd2-btn fd2-btn-sm" onclick="FD2.setTheme('blue')" 
          style="background: #2196F3;">🔵</button>
</div>
```

---

## カスタムスタイルの追加

FD2の基本スタイルを上書きしたい場合は、`custom.css`を作成:

```css
/* custom.css */

/* プライマリカラーをカスタマイズ */
:root {
  --fd2-primary: #ff6b35;
  --fd2-primary-hover: #ff5722;
}

/* 既存のクラスを拡張 */
.fd2-btn-primary {
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* プロジェクト固有のスタイル */
.project-specific-header {
  background: linear-gradient(135deg, var(--fd2-primary), var(--fd2-primary-hover));
  color: white;
  padding: 20px;
}
```

---

## 段階的移行アプローチ

すべてを一度に移行するのが難しい場合:

### フェーズ1: 並行運用
```html
<link rel="stylesheet" href="css/style.css">      <!-- 既存 -->
<link rel="stylesheet" href="css/fd2.css">        <!-- 新規 -->
<link rel="stylesheet" href="css/migration.css">  <!-- 調整用 -->
```

### フェーズ2: ページ単位で移行
1. 新規ページ → FD2のみ使用
2. 既存ページ → 徐々にFD2に移行
3. 最終的に`style.css`を削除

### フェーズ3: 完全移行
```html
<link rel="stylesheet" href="css/fd2.css">
<link rel="stylesheet" href="css/custom.css">
```

---

## トラブルシューティング

### 問題1: スタイルが適用されない
**原因:** CSSの読み込み順序
**解決:** FD2を先に読み込む
```html
<link rel="stylesheet" href="css/fd2.css">
<link rel="stylesheet" href="css/custom.css">
```

### 問題2: モバイルでレイアウトが崩れる
**原因:** viewportメタタグがない
**解決:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 問題3: JavaScriptエラー
**原因:** fd2.jsの読み込みタイミング
**解決:** body閉じタグの直前で読み込む
```html
  <script src="js/fd2.js"></script>
</body>
```

### 問題4: テーマが保存されない
**原因:** ローカルストレージが無効
**解決:** ブラウザ設定でCookieを許可

---

## チェックリスト

移行完了時に確認:

- [ ] すべてのページでfd2.cssが読み込まれている
- [ ] bodyタグにテーマクラスが設定されている
- [ ] ボタンがfd2-btnクラスに変更されている
- [ ] カードがfd2-cardクラスに変更されている
- [ ] フォームがfd2-form-*クラスに変更されている
- [ ] テーブルがfd2-tableクラスに変更されている
- [ ] モーダルがFD2方式に変更されている
- [ ] カスタムJavaScriptがFD2関数を使用している
- [ ] モバイルで正しく表示される
- [ ] すべてのブラウザで動作確認済み

---

## サポート

移行で困ったことがあれば、以下を確認してください:
1. README.mdの基本的な使い方
2. demo.htmlの実装例
3. 既存プロジェクトファイルとの比較

**移行を成功させるポイント:**
- 一度にすべて変更せず、段階的に進める
- デモページを参考にする
- テストページで確認してから本番に適用する

---

以上で移行は完了です。FD2フレームワークをお楽しみください! 🎨
