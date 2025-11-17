/*!
 * Flat Design 2.0 JavaScript Helper Functions
 * Version: 1.0.0
 * Provides interactive functionality for FD2 components
 */

const FD2 = {
  /**
   * モーダルを開く
   * @param {string} id - モーダルのID
   */
  openModal: function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('fd2-modal-open');
      document.body.style.overflow = 'hidden'; // 背景のスクロールを防止
    }
  },

  /**
   * モーダルを閉じる
   * @param {string} id - モーダルのID
   */
  closeModal: function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('fd2-modal-open');
      document.body.style.overflow = ''; // スクロールを復元
    }
  },

  /**
   * カード本体の開閉をトグル
   * @param {HTMLElement} element - カードヘッダー要素
   */
  toggleCard: function(element) {
    const body = element.nextElementSibling;
    const mark = element.querySelector('.fd2-toggle-mark');
    
    if (!body) return;
    
    // fd2-collapseクラスがない場合は追加
    if (!body.classList.contains('fd2-collapse') && !body.classList.contains('fd2-card-body')) {
      return;
    }
    
    // 開閉処理
    const isOpen = body.classList.toggle('fd2-collapse-open');
    
    // トグルマークの更新
    if (mark) {
      mark.textContent = isOpen ? '−' : '＋';
      mark.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  },

  /**
   * 指定要素を表示
   * @param {string} id - 要素のID
   */
  show: function(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove('fd2-hidden');
    }
  },

  /**
   * 指定要素を非表示
   * @param {string} id - 要素のID
   */
  hide: function(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('fd2-hidden');
    }
  },

  /**
   * 表示/非表示をトグル
   * @param {string} id - 要素のID
   */
  toggle: function(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('fd2-hidden');
    }
  },

  /**
   * テーマを切り替え
   * @param {string} theme - テーマ名 ('orange', 'green', 'blue', 'purple', 'red', 'teal')
   */
  setTheme: function(theme) {
    const body = document.body;
    // 既存のテーマクラスを削除
    body.classList.remove(
      'fd2-theme-orange',
      'fd2-theme-green',
      'fd2-theme-blue',
      'fd2-theme-purple',
      'fd2-theme-red',
      'fd2-theme-teal'
    );
    // 新しいテーマクラスを追加
    body.classList.add('fd2-theme-' + theme);
    
    // ローカルストレージに保存(オプション)
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('fd2-theme', theme);
    }
  },

  /**
   * 保存されたテーマを読み込み
   */
  loadTheme: function() {
    if (typeof(Storage) !== "undefined") {
      const savedTheme = localStorage.getItem('fd2-theme');
      if (savedTheme) {
        this.setTheme(savedTheme);
      }
    }
  },

  /**
   * フォームバリデーション
   * @param {HTMLFormElement} form - フォーム要素
   * @returns {boolean} バリデーション結果
   */
  validateForm: function(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.fd2-form-input[required], .fd2-form-select[required], .fd2-form-textarea[required]');
    
    inputs.forEach(input => {
      // エラー表示をクリア
      input.classList.remove('is-invalid');
      const errorMsg = input.parentElement.querySelector('.fd2-form-error');
      if (errorMsg) {
        errorMsg.remove();
      }

      // バリデーション
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid');
        
        // エラーメッセージを表示
        const error = document.createElement('div');
        error.className = 'fd2-form-error';
        error.textContent = 'この項目は必須です';
        input.parentElement.appendChild(error);
      }
    });

    return isValid;
  },

  /**
   * 確認ダイアログ付き削除
   * @param {Event} event - イベントオブジェクト
   * @param {string} message - 確認メッセージ
   * @returns {boolean} 確認結果
   */
  confirmDelete: function(event, message) {
    message = message || '本当に削除しますか?';
    if (!confirm(message)) {
      event.preventDefault();
      return false;
    }
    return true;
  },

  /**
   * テーブル行のハイライト
   * @param {HTMLElement} row - テーブル行要素
   */
  highlightRow: function(row) {
    // 既存のハイライトを削除
    const table = row.closest('table');
    if (table) {
      table.querySelectorAll('tr.fd2-highlight').forEach(r => {
        r.classList.remove('fd2-highlight');
      });
    }
    // 新しい行をハイライト
    row.classList.add('fd2-highlight');
  },

  /**
   * スムーズスクロール
   * @param {string} targetId - スクロール先の要素ID
   */
  scrollTo: function(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },

  /**
   * 初期化処理
   */
  init: function() {
    // 保存されたテーマを読み込み
    this.loadTheme();

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.fd2-modal-open');
        openModals.forEach(modal => {
          this.closeModal(modal.id);
        });
      }
    });

    // モーダルのオーバーレイクリックで閉じる
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('fd2-modal-overlay')) {
        const modal = e.target.closest('.fd2-modal');
        if (modal) {
          this.closeModal(modal.id);
        }
      }
    });

    // リップルエフェクトの初期化
    this.initRippleEffect();

    console.log('FD2 Framework initialized');
  },

  /**
   * リップルエフェクト(波紋効果)を初期化
   */
  initRippleEffect: function() {
    document.addEventListener('click', function(e) {
      const button = e.target.closest('.fd2-btn');
      if (!button || button.disabled) return;

      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('fd2-ripple');

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
};

// DOMContentLoaded時に自動初期化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => FD2.init());
} else {
  FD2.init();
}

// グローバルスコープに便利な短縮関数を追加(オプション)
window.openModal = (id) => FD2.openModal(id);
window.closeModal = (id) => FD2.closeModal(id);
window.toggleCard = (element) => FD2.toggleCard(element);