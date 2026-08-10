/*
 * eFootball Skill Manager
 * Copyright (c) 2026 numa. All Rights Reserved.
 *
 * Unauthorized copying, redistribution, or republication
 * of this source code is not permitted.
 *
 * This is an unofficial personal tool.
 * This project is not affiliated with or endorsed by KONAMI.
 */


/* =========================================================
   eFootball Skill Manager
========================================================= */


/* =========================================================
   スキルマスター

   normal
   → 通常スキル
   → 追加スキルとして選択可能

   special
   → 特殊スキル
   → 所持スキルとしてのみ選択可能
========================================================= */

const SKILLS = [

  /* =========================
     通常：ドリブル
  ========================= */

  { name: "シザーズ", category: "ドリブル", type: "normal" },
  { name: "ダブルタッチ", category: "ドリブル", type: "normal" },
  { name: "エラシコ", category: "ドリブル", type: "normal" },
  { name: "ルーレット", category: "ドリブル", type: "normal" },
  { name: "シャペウ", category: "ドリブル", type: "normal" },
  { name: "エッジターン", category: "ドリブル", type: "normal" },
  { name: "軸裏ターン", category: "ドリブル", type: "normal" },
  { name: "軸足当て", category: "ドリブル", type: "normal" },
  { name: "足裏コントロール", category: "ドリブル", type: "normal" },
  { name: "マリーシア", category: "ドリブル", type: "normal" },


  /* =========================
     通常：パス
  ========================= */

  { name: "ヒールトリック", category: "パス", type: "normal" },
  { name: "ワンタッチパス", category: "パス", type: "normal" },
  { name: "スルーパス", category: "パス", type: "normal" },
  { name: "バックスピンロブ", category: "パス", type: "normal" },
  { name: "ピンポイントクロス", category: "パス", type: "normal" },
  { name: "アウトスピンキック", category: "パス", type: "normal" },
  { name: "ラボーナ", category: "パス", type: "normal" },
  { name: "ノールックパス", category: "パス", type: "normal" },
  { name: "低弾道ロブ", category: "パス", type: "normal" },
  { name: "ロングスロー", category: "パス", type: "normal" },


  /* =========================
     通常：シュート
  ========================= */

  { name: "ヘッダー", category: "シュート", type: "normal" },
  { name: "コントロールカーブ", category: "シュート", type: "normal" },
  { name: "コントロールループ", category: "シュート", type: "normal" },
  { name: "ミドルシュート", category: "シュート", type: "normal" },
  { name: "無回転シュート", category: "シュート", type: "normal" },
  { name: "ドロップシュート", category: "シュート", type: "normal" },
  { name: "ライジングシュート", category: "シュート", type: "normal" },
  { name: "アクロバティックシュート", category: "シュート", type: "normal" },
  { name: "ワンタッチシュート", category: "シュート", type: "normal" },
  { name: "PKキッカー", category: "シュート", type: "normal" },


  /* =========================
     通常：ディフェンス
  ========================= */

  { name: "マンマーク", category: "ディフェンス", type: "normal" },
  { name: "チェイシング", category: "ディフェンス", type: "normal" },
  { name: "インターセプト", category: "ディフェンス", type: "normal" },
  { name: "ブロッカー", category: "ディフェンス", type: "normal" },
  { name: "エアバトル", category: "ディフェンス", type: "normal" },
  { name: "スライディングタックル", category: "ディフェンス", type: "normal" },
  { name: "アクロバティッククリア", category: "ディフェンス", type: "normal" },


  /* =========================
     通常：GK
  ========================= */

  { name: "低弾道パントキック", category: "GK", type: "normal" },
  { name: "高弾道パントキック", category: "GK", type: "normal" },
  { name: "GKロングスロー", category: "GK", type: "normal" },
  { name: "PKストッパー", category: "GK", type: "normal" },


  /* =========================
     通常：その他
  ========================= */

  { name: "キャプテンシー", category: "その他", type: "normal" },
  { name: "スーパーサブ", category: "その他", type: "normal" },
  { name: "闘争心", category: "その他", type: "normal" },


  /* =========================================================
     特殊スキル
  ========================================================= */

  { name: "モメンタムドリブル", category: "ドリブル", type: "special" },
  { name: "アクセルバースト", category: "ドリブル", type: "special" },
  { name: "マグネットフィート", category: "ドリブル", type: "special" },
  { name: "アタックサージ", category: "ドリブル", type: "special" },
  { name: "タップトリック", category: "ドリブル", type: "special" },

  { name: "ゲームチェンジパス", category: "パス", type: "special" },
  { name: "エッジクロス", category: "パス", type: "special" },
  { name: "ビジョナリーパス", category: "パス", type: "special" },
  { name: "フェノミナルパス", category: "パス", type: "special" },

  { name: "フェノミナルフィニッシュ", category: "シュート", type: "special" },
  { name: "ブリッツカーブ", category: "シュート", type: "special" },
  { name: "バレットヘッド", category: "シュート", type: "special" },
  { name: "ロースクリーマー", category: "シュート", type: "special" },
  { name: "ウィルパワー", category: "シュート", type: "special" },

  { name: "フォートレス", category: "ディフェンス", type: "special" },
  { name: "エアリアルフォート", category: "ディフェンス", type: "special" },
  { name: "ロングリーチタックル", category: "ディフェンス", type: "special" },
  { name: "シャドウハント", category: "ディフェンス", type: "special" },

  {
    name: "GKディレクティングディフェンス",
    category: "GK",
    type: "special"
  },

  {
    name: "GKスピリットロア",
    category: "GK",
    type: "special"
  },

  { name: "アタックトリガー", category: "その他", type: "special" }

];


/* =========================================================
   ポジション別おすすめ
========================================================= */

const RECOMMENDATIONS = {

  CF: [

    {
      title: "シュート系",
      skills: [
        "無回転シュート",
        "ミドルシュート",
        "ドロップシュート",
        "ワンタッチシュート",
        "ライジングシュート",
        "アクロバティックシュート",
        "コントロールカーブ",
        "コントロールループ",
        "アウトスピンキック"
      ]
    },

    {
      title: "パス系",
      skills: [
        "ワンタッチパス",
        "スルーパス",
        "ヒールトリック"
      ]
    },

    {
      title: "空中戦系",
      skills: [
        "ヘッダー",
        "エアバトル"
      ]
    },

    {
      title: "ドリブル系",
      skills: [
        "ダブルタッチ",
        "エラシコ",
        "足裏コントロール"
      ]
    },

    {
      title: "DF系",
      skills: [
        "チェイシング"
      ]
    },

    {
      title: "能力向上系",
      skills: [
        "スーパーサブ",
        "闘争心"
      ]
    }

  ],


  WG: [

    {
      title: "ドリブル系",
      skills: [
        "エラシコ",
        "ルーレット",
        "ダブルタッチ",
        "足裏コントロール"
      ],
      lowPriority: [
        "シザーズ",
        "シャペウ",
        "軸足当て",
        "軸裏ターン",
        "マリーシア",
        "エッジターン"
      ]
    },

    {
      title: "シュート系",
      skills: [
        "ワンタッチシュート",
        "コントロールカーブ",
        "アウトスピンキック"
      ],
      lowPriority: [
        "コントロールループ"
      ]
    },

    {
      title: "パス系",
      skills: [
        "スルーパス",
        "ワンタッチパス",
        "ピンポイントクロス"
      ],
      lowPriority: [
        "ノールックパス",
        "ラボーナ"
      ]
    },

    {
      title: "DF系",
      skills: [
        "チェイシング"
      ]
    },

    {
      title: "能力向上系",
      skills: [
        "スーパーサブ",
        "闘争心"
      ]
    }

  ],


  MF: [

    {
      title: "パス系",
      skills: [
        "スルーパス",
        "ワンタッチパス"
      ],
      lowPriority: [
        "ノールックパス",
        "ヒールトリック",
        "バックスピンロブ",
        "低弾道ロブ"
      ]
    },

    {
      title: "ドリブル系",
      skills: [
        "エラシコ",
        "ダブルタッチ",
        "足裏コントロール"
      ]
    },

    {
      title: "シュート系",
      skills: [
        "ミドルシュート",
        "ワンタッチシュート",
        "アウトスピンキック"
      ]
    },

    {
      title: "DF系",
      skills: [
        "ブロッカー",
        "マンマーク",
        "インターセプト"
      ],
      lowPriority: [
        "アクロバティッククリア",
        "スライディングタックル"
      ]
    },

    {
      title: "空中戦系",
      skills: [
        "ヘッダー",
        "エアバトル"
      ]
    },

    {
      title: "能力向上系",
      skills: [
        "スーパーサブ",
        "闘争心"
      ]
    }

  ],


  SB: [

    {
      title: "DF系",
      skills: [
        "ブロッカー",
        "マンマーク",
        "インターセプト",
        "スライディングタックル"
      ],
      lowPriority: [
        "アクロバティッククリア"
      ]
    },

    {
      title: "パス系",
      skills: [
        "スルーパス",
        "ワンタッチパス",
        "ピンポイントクロス"
      ],
      lowPriority: [
        "アウトスピンキック",
        "低弾道ロブ"
      ]
    },

    {
      title: "ドリブル系",
      skills: [
        "ダブルタッチ"
      ]
    },

    {
      title: "空中戦系",
      skills: [],
      lowPriority: [
        "エアバトル",
        "ヘッダー"
      ]
    },

    {
      title: "能力向上系",
      skills: [
        "闘争心"
      ]
    }

  ],


  CB: [

    {
      title: "DF系",
      skills: [
        "ブロッカー",
        "マンマーク",
        "インターセプト",
        "スライディングタックル",
        "アクロバティッククリア"
      ]
    },

    {
      title: "空中戦系",
      skills: [],
      lowPriority: [
        "エアバトル",
        "ヘッダー"
      ]
    },

    {
      title: "パス系",
      skills: [],
      lowPriority: [
        "バックスピンロブ"
      ]
    },

    {
      title: "能力向上系",
      skills: [
        "闘争心"
      ]
    }

  ],


  GK: [

    {
      title: "GK系",
      skills: [
        "GKロングスロー",
        "高弾道パントキック",
        "低弾道パントキック"
      ]
    },

    {
      title: "空中戦系",
      skills: [],
      lowPriority: [
        "ヘッダー",
        "エアバトル"
      ]
    },

    {
      title: "パス系",
      skills: [],
      lowPriority: [
        "ワンタッチパス",
        "スルーパス",
        "バックスピンロブ",
        "低弾道ロブ"
      ]
    },

    {
      title: "その他",
      skills: [],
      lowPriority: [
        "キャプテンシー"
      ]
    }

  ]

};


const COMMON_RECOMMENDATIONS = [
  "PKキッカー",
  "ロングスロー",
  "キャプテンシー"
];

/* =========================================================
   おすすめスキル設定 初期値

   best
   → ◎ 最有力候補

   candidate
   → ○ 候補

   どちらにも含まれない
   → 対象外
========================================================= */

const DEFAULT_RECOMMENDATION_SETTINGS = {

  CF: {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",

      "ヘッダー",
      "コントロールカーブ",
      "ミドルシュート",
      "アクロバティックシュート",
      "ワンタッチシュート",

      "エアバトル"
    ],

    candidate: [
      "軸裏ターン",

      "アウトスピンキック",

      "コントロールループ",
      "無回転シュート",
      "ドロップシュート",
      "ライジングシュート",

      "チェイシング",

      "スーパーサブ",
      "闘争心"
    ]

  },


  ST: {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "ルーレット",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",

      "コントロールカーブ",
      "ミドルシュート",
      "ワンタッチシュート"
    ],

    candidate: [
      "軸裏ターン",

      "アウトスピンキック",

      "コントロールループ",
      "アクロバティックシュート",

      "チェイシング",

      "スーパーサブ",
      "闘争心"
    ]

  },


  "LWG/RWG": {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "ルーレット",
      "軸裏ターン",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",
      "ピンポイントクロス",
      "アウトスピンキック",

      "コントロールカーブ",
      "ミドルシュート",
      "ワンタッチシュート"
    ],

    candidate: [
      "チェイシング",

      "スーパーサブ",
      "闘争心"
    ]

  },


  "LMF/RMF": {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "ルーレット",
      "軸裏ターン",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",
      "ピンポイントクロス",
      "アウトスピンキック",

      "コントロールカーブ",
      "ミドルシュート",
      "ワンタッチシュート"
    ],

    candidate: [
      "バックスピンロブ",
      "低弾道ロブ",

      "マンマーク",
      "チェイシング",
      "インターセプト",
      "ブロッカー",

      "スーパーサブ",
      "闘争心"
    ]

  },


  OMF: {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "ルーレット",
      "軸裏ターン",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",
      "ピンポイントクロス",
      "アウトスピンキック",

      "コントロールカーブ",
      "ミドルシュート",
      "ワンタッチシュート"
    ],

    candidate: [
      "バックスピンロブ",
      "低弾道ロブ",

      "ヘッダー",

      "マンマーク",
      "インターセプト",
      "ブロッカー",
      "エアバトル",

      "スーパーサブ",
      "闘争心"
    ]

  },


  CMF: {

    best: [
      "ダブルタッチ",
      "エラシコ",
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",
      "アウトスピンキック"
    ],

    candidate: [
      "バックスピンロブ",
      "低弾道ロブ",

      "ヘッダー",
      "ミドルシュート",

      "マンマーク",
      "チェイシング",
      "インターセプト",
      "ブロッカー",
      "エアバトル",

      "スーパーサブ",
      "闘争心"
    ]

  },


  DMF: {

    best: [
      "足裏コントロール",

      "ヒールトリック",
      "ワンタッチパス",
      "スルーパス",
      "アウトスピンキック",

      "マンマーク",
      "インターセプト",
      "ブロッカー",
      "エアバトル"
    ],

    candidate: [
      "ダブルタッチ",
      "エラシコ",

      "バックスピンロブ",
      "低弾道ロブ",

      "ヘッダー",

      "スライディングタックル",
      "アクロバティッククリア",

      "闘争心"
    ]

  },


  "LSB/RSB": {

    best: [
      "ワンタッチパス",
      "スルーパス",
      "ピンポイントクロス",

      "マンマーク",
      "インターセプト",
      "ブロッカー",
      "スライディングタックル",
      "アクロバティッククリア"
    ],

    candidate: [
      "ダブルタッチ",
      "エラシコ",
      "足裏コントロール",

      "ヒールトリック",
      "バックスピンロブ",
      "アウトスピンキック",
      "低弾道ロブ",

      "闘争心"
    ]

  },


  CB: {

    best: [
      "ワンタッチパス",
      "スルーパス",

      "マンマーク",
      "インターセプト",
      "ブロッカー",
      "エアバトル",
      "スライディングタックル",
      "アクロバティッククリア"
    ],

    candidate: [
      "足裏コントロール",

      "バックスピンロブ",
      "アウトスピンキック",
      "低弾道ロブ",

      "闘争心"
    ]

  },


  GK: {

    best: [
      "低弾道パントキック",
      "高弾道パントキック",
      "GKロングスロー",
      "PKストッパー"
    ],

    candidate: [
      "ワンタッチパス",
      "スルーパス",
      "バックスピンロブ",
      "低弾道ロブ",

      "インターセプト",
      "エアバトル",
      "スライディングタックル",
      "アクロバティッククリア",

      "キャプテンシー"
    ]

  }

};


/* =========================================================
   おすすめ設定 ポジション分類
========================================================= */

const RECOMMENDATION_POSITION_TYPES = [
  "CF",
  "ST",
  "LWG/RWG",
  "LMF/RMF",
  "OMF",
  "CMF",
  "DMF",
  "LSB/RSB",
  "CB",
  "GK"
];


/* =========================================================
   DOM
========================================================= */

const screens =
  document.querySelectorAll(".screen");

const navButtons =
  document.querySelectorAll(".nav-button");


const addPlayerButton =
  document.getElementById("addPlayerButton");

const backToPlayerListButton =
  document.getElementById("backToPlayerListButton");

const savePlayerButton =
  document.getElementById("savePlayerButton");

const deletePlayerButton =
  document.getElementById("deletePlayerButton");

const playerForm =
  document.getElementById("playerForm");

const playerNameInput =
  document.getElementById("playerName");

const selectedPositionInput =
  document.getElementById("selectedPosition");

const positionButtons =
  document.querySelectorAll("#positionSelector button");

const playerList =
  document.getElementById("playerList");

const playerEditTitle =
  document.getElementById("playerEditTitle");

const specialTrainingPlayer =
  document.getElementById("specialTrainingPlayer");

const playerSearch =
  document.getElementById("playerSearch");


/* 所持スキル */

const ownedSkillList =
  document.getElementById("ownedSkillList");

const ownedSkillCount =
  document.getElementById("ownedSkillCount");

const openOwnedSkillSelectorButton =
  document.getElementById("openOwnedSkillSelectorButton");


/* 追加スキル */

const additionalSkillList =
  document.getElementById("additionalSkillList");

const additionalSkillCount =
  document.getElementById("additionalSkillCount");

const openAdditionalSkillSelectorButton =
  document.getElementById("openAdditionalSkillSelectorButton");


/* おすすめ */

const recommendedSkillArea =
  document.getElementById("recommendedSkillArea");

const recommendPositionLabel =
  document.getElementById("recommendPositionLabel");


/* スキル選択モーダル */

const skillSelectorModal =
  document.getElementById("skillSelectorModal");

const skillSelectorTitle =
  document.getElementById("skillSelectorTitle");

const skillSelectorList =
  document.getElementById("skillSelectorList");

const skillSearch =
  document.getElementById("skillSearch");

const closeSkillSelectorButton =
  document.getElementById("closeSkillSelectorButton");

const confirmSkillSelectionButton =
  document.getElementById("confirmSkillSelectionButton");

const modalOverlay =
  skillSelectorModal.querySelector(".modal-overlay");


/* マッチング */

const targetPlayerMatchingTab =
  document.getElementById("targetPlayerMatchingTab");

const materialPlayerMatchingTab =
  document.getElementById("materialPlayerMatchingTab");

const targetPlayerMatchingPanel =
  document.getElementById("targetPlayerMatchingPanel");

const materialPlayerMatchingPanel =
  document.getElementById("materialPlayerMatchingPanel");

const matchingTargetPlayer =
  document.getElementById("matchingTargetPlayer");

const matchingMaterialPlayer =
  document.getElementById("matchingMaterialPlayer");

const targetWantedSkillList =
  document.getElementById("targetWantedSkillList");

const targetMatchingResult =
  document.getElementById("targetMatchingResult");

const materialOwnedSkillList =
  document.getElementById("materialOwnedSkillList");

const materialMatchingResult =
  document.getElementById("materialMatchingResult");


/* 設定 */

const openRecommendationSettingsButton =
  document.getElementById("openRecommendationSettingsButton");

const backToSettingsButton =
  document.getElementById("backToSettingsButton");

const recommendationPositionSelect =
  document.getElementById("recommendationPositionSelect");

const recommendationSettingsList =
  document.getElementById("recommendationSettingsList");


/* データ管理 */

const exportDataButton =
  document.getElementById("exportDataButton");

const importDataInput =
  document.getElementById("importDataInput");

const resetDataButton =
  document.getElementById("resetDataButton");


/* =========================================================
   データ
========================================================= */

let players = [];


/*
  ポジション別おすすめ設定

  初回は初期値。
  保存済み設定がある場合は
  localStorageから読み込む。
*/

let recommendationSettings =
  createDefaultRecommendationSettings();


let editingPlayerId = null;

let draftOwnedSkills = [];

let draftAdditionalSkills = [];

let skillSelectorMode = null;

let temporarySelectedSkills =
  new Set();


/* =========================================================
   初期化
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadPlayers();

    loadRecommendationSettings();

    renderPlayerList();

    setupMatchingTabs();

    setupRecommendationSettings();

    renderMatchingPlayerOptions();

  }
);


/* =========================================================
   画面切り替え
========================================================= */

function showScreen(screenId) {

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });


  const targetScreen =
    document.getElementById(screenId);


  if (targetScreen) {
    targetScreen.classList.add("active");
  }


  updateBottomNavigation(screenId);


  if (screenId === "matchingScreen") {
    renderMatchingPlayerOptions();
    renderTargetMatching();
    renderMaterialMatching();
  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   下部ナビ
========================================================= */

function updateBottomNavigation(screenId) {

  navButtons.forEach((button) => {

    button.classList.remove("active");


    if (button.dataset.screen === screenId) {
      button.classList.add("active");
    }

  });

}


navButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const screenId =
        button.dataset.screen;


      if (!screenId) {
        return;
      }


      showScreen(screenId);

    }
  );

});


/* =========================================================
   選手追加
========================================================= */

addPlayerButton.addEventListener(
  "click",
  () => {

    editingPlayerId = null;

    resetPlayerForm();

    playerEditTitle.textContent =
      "選手追加";

    savePlayerButton.textContent =
      "登録";

    deletePlayerButton.hidden =
      true;

    showScreen(
      "playerEditScreen"
    );

  }
);


/* =========================================================
   戻る
========================================================= */

backToPlayerListButton.addEventListener(
  "click",
  () => {

    resetPlayerForm();

    editingPlayerId = null;

    showScreen(
      "playerListScreen"
    );

  }
);


/* =========================================================
   ポジション選択
========================================================= */

positionButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      positionButtons.forEach(
        (positionButton) => {
          positionButton.classList.remove("selected");
        }
      );


      button.classList.add("selected");

      selectedPositionInput.value =
        button.dataset.position;


      renderRecommendations();

    }
  );

});


/* =========================================================
   選手保存
========================================================= */

playerForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const playerName =
      playerNameInput.value.trim();

    const position =
      selectedPositionInput.value;


    if (!playerName) {

      alert(
        "選手名を入力してください。"
      );

      playerNameInput.focus();

      return;

    }


    if (!position) {

      alert(
        "登録ポジションを選択してください。"
      );

      return;

    }


    if (draftOwnedSkills.length > 10) {

      alert(
        "所持スキルは最大10個です。"
      );

      return;

    }


    if (draftAdditionalSkills.length > 5) {

      alert(
        "追加したいスキルは最大5個です。"
      );

      return;

    }


    if (editingPlayerId === null) {

      addPlayer(
        playerName,
        position
      );

    } else {

      updatePlayer(
        playerName,
        position
      );

    }


    savePlayers();

    renderPlayerList();

    renderMatchingPlayerOptions();

    resetPlayerForm();

    editingPlayerId = null;

    showScreen(
      "playerListScreen"
    );

  }
);


/* =========================================================
   新規選手追加
========================================================= */

function addPlayer(
  playerName,
  position
) {

  const player = {

    id:
      createPlayerId(),

    name:
      playerName,

    position:
      position,

    ownedSkills:
      [...draftOwnedSkills],

    additionalSkills:
      draftAdditionalSkills.map(
        (skill) => ({
          name: skill.name,
          acquired: Boolean(skill.acquired)
        })
      ),

    specialTraining:
      specialTrainingPlayer.checked,

    createdAt:
      new Date().toISOString()

  };


  players.push(player);

}


/* =========================================================
   選手更新
========================================================= */

function updatePlayer(
  playerName,
  position
) {

  const player =
    players.find(
      (player) =>
        player.id === editingPlayerId
    );


  if (!player) {
    return;
  }


  player.name =
    playerName;

  player.position =
    position;

  player.ownedSkills =
    [...draftOwnedSkills];

  player.additionalSkills =
    draftAdditionalSkills.map(
      (skill) => ({
        name: skill.name,
        acquired: Boolean(skill.acquired)
      })
    );

  player.specialTraining =
    specialTrainingPlayer.checked;

}


/* =========================================================
   選手一覧
========================================================= */

function renderPlayerList() {

  const searchText =
    playerSearch.value
      .trim()
      .toLowerCase();


  playerList.innerHTML =
    "";


  const filteredPlayers =
    players.filter((player) => {

      return player.name
        .toLowerCase()
        .includes(searchText);

    });


  if (filteredPlayers.length === 0) {

    const emptyMessage =
      document.createElement("p");


    emptyMessage.className =
      "empty-message";


    emptyMessage.textContent =
      players.length === 0
        ? "登録されている選手はいません。"
        : "条件に一致する選手はいません。";


    playerList.appendChild(
      emptyMessage
    );


    return;

  }


  filteredPlayers.forEach(
    (player) => {

      playerList.appendChild(
        createPlayerCard(player)
      );

    }
  );

}


/* =========================================================
   選手カード
========================================================= */

function createPlayerCard(player) {

  const card =
    document.createElement("button");

  card.type =
    "button";

  card.className =
    "player-card";


  const header =
    document.createElement("div");

  header.className =
    "player-card-header";


  const name =
    document.createElement("span");

  name.className =
    "player-card-name";

  name.textContent =
    player.name;


  const position =
    document.createElement("span");

  position.className =
    "player-card-position";

  position.textContent =
    player.position;


  header.appendChild(name);

  header.appendChild(position);


  const info =
    document.createElement("div");

  info.className =
    "player-card-info";


  const additionalSkills =
    Array.isArray(player.additionalSkills)
      ? player.additionalSkills
      : [];


  const acquiredSkills =
    additionalSkills.filter(
      (skill) =>
        skill.acquired === true
    );


  const unacquiredSkills =
    additionalSkills.filter(
      (skill) =>
        skill.acquired !== true
    );


  const additionalSkillStatus =
    document.createElement("div");


  additionalSkillStatus.textContent =
    "追加スキル " +
    acquiredSkills.length +
    " / " +
    additionalSkills.length;


  info.appendChild(
    additionalSkillStatus
  );


  /* =========================
     未取得スキル表示
  ========================= */

  if (additionalSkills.length > 0) {

    if (unacquiredSkills.length > 0) {

      const pendingTitle =
        document.createElement("div");

      pendingTitle.style.marginTop =
        "6px";

      pendingTitle.style.fontWeight =
        "700";

      pendingTitle.style.fontSize =
        "13px";

      pendingTitle.style.color =
        "#6b7280";

      pendingTitle.textContent =
        "未取得";


      info.appendChild(
        pendingTitle
      );


      unacquiredSkills.forEach(
        (skill) => {

          const skillText =
            document.createElement("div");

          skillText.style.fontSize =
            "13px";

          skillText.style.color =
            "#374151";

          skillText.textContent =
            "・" + skill.name;


          info.appendChild(
            skillText
          );

        }
      );

    } else {

      const completed =
        document.createElement("div");

      completed.style.marginTop =
        "6px";

      completed.style.fontSize =
        "13px";

      completed.style.fontWeight =
        "700";

      completed.style.color =
        "#166534";

      completed.textContent =
        "✓ 追加スキル取得完了";


      info.appendChild(
        completed
      );

    }

  }


  if (player.specialTraining) {

    const specialLabel =
      document.createElement("div");

    specialLabel.className =
      "special-player-label";

    specialLabel.style.marginTop =
      "6px";

    specialLabel.textContent =
      "⭐ 特別強化用";

    info.appendChild(
      specialLabel
    );

  }


  card.appendChild(header);

  card.appendChild(info);

  card.addEventListener(
    "click",
    () => {

      openPlayerEdit(
        player.id
      );

    }
  );


  return card;

}


/* =========================================================
   選手編集
========================================================= */

function openPlayerEdit(playerId) {

  const player =
    players.find(
      (player) =>
        player.id === playerId
    );


  if (!player) {
    return;
  }


  editingPlayerId =
    playerId;


  playerEditTitle.textContent =
    "選手編集";

  savePlayerButton.textContent =
    "保存";

  deletePlayerButton.hidden =
    false;


  playerNameInput.value =
    player.name;


  selectedPositionInput.value =
    player.position;


  draftOwnedSkills =
    [...player.ownedSkills];


  draftAdditionalSkills =
    player.additionalSkills.map(
      (skill) => ({
        name: skill.name,
        acquired: Boolean(skill.acquired)
      })
    );


  specialTrainingPlayer.checked =
    Boolean(
      player.specialTraining
    );


  positionButtons.forEach(
    (button) => {

      button.classList.remove(
        "selected"
      );


      if (
        button.dataset.position ===
        player.position
      ) {

        button.classList.add(
          "selected"
        );

      }

    }
  );


  renderSkillSections();

  renderRecommendations();


  showScreen(
    "playerEditScreen"
  );

}

/* =========================================================
   選手削除
========================================================= */

deletePlayerButton.addEventListener(
  "click",
  () => {

    if (
      editingPlayerId === null
    ) {
      return;
    }


    const player =
      players.find(
        (player) =>
          player.id === editingPlayerId
      );


    if (!player) {
      return;
    }


    const confirmed =
      confirm(
        player.name +
        " を削除しますか？\n\nこの操作は元に戻せません。"
      );


    if (!confirmed) {
      return;
    }


    players =
      players.filter(
        (player) =>
          player.id !== editingPlayerId
      );


    savePlayers();

    renderPlayerList();

    renderMatchingPlayerOptions();


    editingPlayerId =
      null;


    resetPlayerForm();


    deletePlayerButton.hidden =
      true;


    showScreen(
      "playerListScreen"
    );

  }
);

/* =========================================================
   フォーム初期化
========================================================= */

function resetPlayerForm() {

  playerForm.reset();


  selectedPositionInput.value =
    "";


  positionButtons.forEach(
    (button) => {
      button.classList.remove("selected");
    }
  );


  specialTrainingPlayer.checked =
    false;


  draftOwnedSkills =
    [];


  draftAdditionalSkills =
    [];


  renderSkillSections();

  renderRecommendations();

}


/* =========================================================
   スキル表示
========================================================= */

function renderSkillSections() {

  renderOwnedSkills();

  renderAdditionalSkills();

}


/* =========================================================
   所持スキル
========================================================= */

function renderOwnedSkills() {

  ownedSkillList.innerHTML =
    "";


  ownedSkillCount.textContent =
    draftOwnedSkills.length +
    " / 10";


  if (draftOwnedSkills.length === 0) {

    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "所持スキルは選択されていません。";


    ownedSkillList.appendChild(
      message
    );

    return;

  }


  draftOwnedSkills.forEach(
    (skillName) => {

      const row =
        document.createElement("div");

      row.className =
        "skill-row";


      const name =
        document.createElement("span");

      name.className =
        "skill-row-name";


      const skillData =
        SKILLS.find(
          (skill) =>
            skill.name === skillName
        );


      if (
        skillData &&
        skillData.type === "special"
      ) {

        name.textContent =
          "【特殊】 " +
          skillName;

      } else {

        name.textContent =
          skillName;

      }


      const removeButton =
        document.createElement("button");

      removeButton.type =
        "button";

      removeButton.className =
        "skill-remove-button";

      removeButton.textContent =
        "×";


      removeButton.addEventListener(
        "click",
        () => {

          draftOwnedSkills =
            draftOwnedSkills.filter(
              (name) =>
                name !== skillName
            );


          renderSkillSections();

          renderRecommendations();

        }
      );


      row.appendChild(name);

      row.appendChild(
        removeButton
      );


      ownedSkillList.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   追加スキル
========================================================= */

function renderAdditionalSkills() {

  additionalSkillList.innerHTML =
    "";


  additionalSkillCount.textContent =
    draftAdditionalSkills.length +
    " / 5";


  if (draftAdditionalSkills.length === 0) {

    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "追加したいスキルは選択されていません。";


    additionalSkillList.appendChild(
      message
    );

    return;

  }


  draftAdditionalSkills.forEach(
    (skill) => {

      const row =
        document.createElement("div");

      row.className =
        "skill-row";


      const name =
        document.createElement("span");

      name.className =
        "skill-row-name";

      name.textContent =
        skill.name;


      const actions =
        document.createElement("div");

      actions.className =
        "skill-row-actions";


      const statusButton =
        document.createElement("button");

      statusButton.type =
        "button";

      statusButton.className =
        "skill-status-button";


      if (skill.acquired) {

        statusButton.classList.add(
          "acquired"
        );

        statusButton.textContent =
          "✓ 取得済み";

      } else {

        statusButton.textContent =
          "未取得";

      }


      statusButton.addEventListener(
        "click",
        () => {

          skill.acquired =
            !skill.acquired;


          renderAdditionalSkills();

        }
      );


      const removeButton =
        document.createElement("button");

      removeButton.type =
        "button";

      removeButton.className =
        "skill-remove-button";

      removeButton.textContent =
        "×";


      removeButton.addEventListener(
        "click",
        () => {

          draftAdditionalSkills =
            draftAdditionalSkills.filter(
              (item) =>
                item.name !== skill.name
            );


          renderAdditionalSkills();

          renderRecommendations();

        }
      );


      actions.appendChild(
        statusButton
      );

      actions.appendChild(
        removeButton
      );


      row.appendChild(name);

      row.appendChild(actions);


      additionalSkillList.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   スキル選択
========================================================= */

openOwnedSkillSelectorButton.addEventListener(
  "click",
  () => {
    openSkillSelector("owned");
  }
);


openAdditionalSkillSelectorButton.addEventListener(
  "click",
  () => {
    openSkillSelector("additional");
  }
);


function openSkillSelector(mode) {

  skillSelectorMode =
    mode;


  skillSearch.value =
    "";


  if (mode === "owned") {

    skillSelectorTitle.textContent =
      "所持スキルを選択";

    temporarySelectedSkills =
      new Set(
        draftOwnedSkills
      );

  } else {

    skillSelectorTitle.textContent =
      "追加したいスキルを選択";

    temporarySelectedSkills =
      new Set(
        draftAdditionalSkills.map(
          (skill) =>
            skill.name
        )
      );

  }


  renderSkillSelectorList();


  skillSelectorModal.classList.add(
    "open"
  );


  skillSelectorModal.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeSkillSelector() {

  skillSelectorModal.classList.remove(
    "open"
  );


  skillSelectorModal.setAttribute(
    "aria-hidden",
    "true"
  );


  skillSelectorMode =
    null;


  temporarySelectedSkills =
    new Set();

}


closeSkillSelectorButton.addEventListener(
  "click",
  closeSkillSelector
);


modalOverlay.addEventListener(
  "click",
  closeSkillSelector
);


skillSearch.addEventListener(
  "input",
  renderSkillSelectorList
);


function getSelectableSkills() {

  if (
    skillSelectorMode === "owned"
  ) {

    const additionalNames =
      draftAdditionalSkills.map(
        (skill) =>
          skill.name
      );


    return SKILLS.filter(
      (skill) =>
        !additionalNames.includes(
          skill.name
        )
    );

  }


  return SKILLS.filter(
    (skill) => {

      return (
        skill.type === "normal" &&
        !draftOwnedSkills.includes(
          skill.name
        )
      );

    }
  );

}


function renderSkillSelectorList() {

  skillSelectorList.innerHTML = "";


  const searchText =
    skillSearch.value
      .trim()
      .toLowerCase();


  const selectableSkills =
    getSelectableSkills().filter(
      (skill) =>
        skill.name
          .toLowerCase()
          .includes(searchText)
    );


  if (selectableSkills.length === 0) {

    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "該当するスキルがありません。";


    skillSelectorList.appendChild(
      message
    );

    return;

  }


  const categories = [
    "ドリブル",
    "パス",
    "シュート",
    "ディフェンス",
    "GK",
    "その他"
  ];


  categories.forEach(
    (category) => {

      const categorySkills =
        selectableSkills.filter(
          (skill) =>
            skill.category === category
        );


      if (categorySkills.length === 0) {
        return;
      }


      /* =========================
         カテゴリ単位
      ========================= */

      const categoryBlock =
        document.createElement("div");

      categoryBlock.className =
        "skill-category-block";


      const heading =
        document.createElement("div");

      heading.className =
        "skill-category-title";

      heading.textContent =
        "■ " + category;


      categoryBlock.appendChild(
        heading
      );


      /* =========================
         スキルボタン配置
      ========================= */

      const grid =
        document.createElement("div");

      grid.className =
        "skill-selector-grid";


      categorySkills.forEach(
        (skill) => {

          const button =
            document.createElement("button");

          button.type =
            "button";

          button.className =
            "skill-select-button";


          const selected =
            temporarySelectedSkills.has(
              skill.name
            );


          if (selected) {

            button.classList.add(
              "selected"
            );

          }


          /* スキル名 */

          const name =
            document.createElement("span");

          name.className =
            "skill-select-name";

          name.textContent =
            skill.name;


          button.appendChild(
            name
          );


          /* 特殊スキル */

          if (
            skill.type === "special"
          ) {

            const specialLabel =
              document.createElement("span");

            specialLabel.className =
              "skill-special-label";

            specialLabel.textContent =
              "特殊スキル";


            button.appendChild(
              specialLabel
            );

          }


          /* =========================
             選択 / 解除
          ========================= */

          button.addEventListener(
            "click",
            () => {

              const currentlySelected =
                temporarySelectedSkills.has(
                  skill.name
                );


              /* すでに選択済みなら解除 */

              if (currentlySelected) {

                temporarySelectedSkills.delete(
                  skill.name
                );

                button.classList.remove(
                  "selected"
                );

                return;

              }


              /* 最大数 */

              const maxCount =
                skillSelectorMode === "owned"
                  ? 10
                  : 5;


              if (
                temporarySelectedSkills.size >=
                maxCount
              ) {

                alert(
                  skillSelectorMode === "owned"
                    ? "所持スキルは最大10個までです。"
                    : "追加したいスキルは最大5個までです。"
                );

                return;

              }


              temporarySelectedSkills.add(
                skill.name
              );

              button.classList.add(
                "selected"
              );

            }
          );


          grid.appendChild(
            button
          );

        }
      );


      categoryBlock.appendChild(
        grid
      );


      skillSelectorList.appendChild(
        categoryBlock
      );

    }
  );

}


function handleTemporarySkillSelection(
  skill,
  checkbox
) {

  const maxCount =
    skillSelectorMode === "owned"
      ? 10
      : 5;


  if (checkbox.checked) {

    if (
      temporarySelectedSkills.size >=
      maxCount
    ) {

      checkbox.checked =
        false;


      alert(
        skillSelectorMode === "owned"
          ? "所持スキルは最大10個までです。"
          : "追加したいスキルは最大5個までです。"
      );


      return;

    }


    temporarySelectedSkills.add(
      skill.name
    );

  } else {

    temporarySelectedSkills.delete(
      skill.name
    );

  }

}


confirmSkillSelectionButton.addEventListener(
  "click",
  () => {

    if (
      skillSelectorMode === "owned"
    ) {

      draftOwnedSkills =
        [...temporarySelectedSkills];

    } else {

      const oldStatusMap =
        new Map(
          draftAdditionalSkills.map(
            (skill) => [
              skill.name,
              skill.acquired
            ]
          )
        );


      draftAdditionalSkills =
        [...temporarySelectedSkills].map(
          (name) => ({

            name,

            acquired:
              oldStatusMap.get(name) ||
              false

          })
        );

    }


    renderSkillSections();

    renderRecommendations();

    closeSkillSelector();

  }
);


/* =========================================================
   おすすめ
========================================================= */

/* =========================================================
   おすすめ
========================================================= */


/* =========================================================
   登録ポジション
   ↓
   おすすめ設定の10分類へ変換
========================================================= */

function getRecommendationType(
  position
) {

  if (position === "CF") {
    return "CF";
  }


  if (position === "ST") {
    return "ST";
  }


  if (
    position === "LWG" ||
    position === "RWG"
  ) {
    return "LWG/RWG";
  }


  if (
    position === "LMF" ||
    position === "RMF"
  ) {
    return "LMF/RMF";
  }


  if (position === "OMF") {
    return "OMF";
  }


  if (position === "CMF") {
    return "CMF";
  }


  if (position === "DMF") {
    return "DMF";
  }


  if (
    position === "LSB" ||
    position === "RSB"
  ) {
    return "LSB/RSB";
  }


  if (position === "CB") {
    return "CB";
  }


  if (position === "GK") {
    return "GK";
  }


  return null;

}


/* =========================================================
   おすすめスキル表示
========================================================= */

function renderRecommendations() {

  recommendedSkillArea.innerHTML =
    "";


  const position =
    selectedPositionInput.value;


  if (!position) {

    recommendPositionLabel.textContent =
      "ポジション未選択";


    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "ポジションを選択してください。";


    recommendedSkillArea.appendChild(
      message
    );


    return;

  }


  const recommendationType =
    getRecommendationType(
      position
    );


  recommendPositionLabel.textContent =
    position + " おすすめ";


  if (
    !recommendationType ||
    !recommendationSettings[
    recommendationType
    ]
  ) {

    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "おすすめ設定がありません。";


    recommendedSkillArea.appendChild(
      message
    );


    return;

  }


  const setting =
    recommendationSettings[
    recommendationType
    ];


  /*
    ◎ 最有力候補
  */

  const bestSkills =
    Array.isArray(
      setting.best
    )
      ? setting.best
      : [];


  /*
    ○ 候補
  */

  const candidateSkills =
    Array.isArray(
      setting.candidate
    )
      ? setting.candidate
      : [];


  /*
    すでに所持しているスキルは
    おすすめ欄から除外
  */

  const availableBestSkills =
    bestSkills.filter(
      (skillName) =>
        !draftOwnedSkills.includes(
          skillName
        )
    );


  const availableCandidateSkills =
    candidateSkills.filter(
      (skillName) =>
        !draftOwnedSkills.includes(
          skillName
        )
    );


  /*
    ◎
  */

  if (
    availableBestSkills.length > 0
  ) {

    createRecommendationPriorityGroup(
      "◎ 最有力候補",
      availableBestSkills,
      "best"
    );

  }


  /*
    ○
  */

  if (
    availableCandidateSkills.length > 0
  ) {

    createRecommendationPriorityGroup(
      "○ 候補",
      availableCandidateSkills,
      "candidate"
    );

  }


  /*
    所持済みを除いた結果、
    何も残らなかった場合
  */

  if (
    availableBestSkills.length === 0 &&
    availableCandidateSkills.length === 0
  ) {

    const message =
      document.createElement("p");

    message.className =
      "empty-message";

    message.textContent =
      "現在追加できるおすすめスキルはありません。";


    recommendedSkillArea.appendChild(
      message
    );

  }

}


/* =========================================================
   ◎ / ○ グループ作成
========================================================= */

function createRecommendationPriorityGroup(
  title,
  skills,
  priority
) {

  const group =
    document.createElement("div");

  group.className =
    "recommend-priority-group";


  group.classList.add(
    priority === "best"
      ? "best"
      : "candidate"
  );


  /* =========================
     タイトル
  ========================= */

  const heading =
    document.createElement("div");

  heading.className =
    "recommend-priority-title";

  heading.textContent =
    title;


  group.appendChild(
    heading
  );


  /* =========================
     可変幅ボタン
  ========================= */

  const list =
    document.createElement("div");

  list.className =
    "recommend-priority-list";


  skills.forEach(
    (skillName) => {

      const button =
        document.createElement("button");

      button.type =
        "button";

      button.className =
        "recommend-skill-button";


      button.classList.add(
        priority === "best"
          ? "best"
          : "candidate"
      );


      const alreadySelected =
        draftAdditionalSkills.some(
          (skill) =>
            skill.name === skillName
        );


      if (alreadySelected) {

        button.classList.add(
          "selected"
        );

        button.textContent =
          "✓ " + skillName;

      } else {

        button.textContent =
          skillName;

      }


      button.addEventListener(
        "click",
        () => {

          toggleRecommendedSkill(
            skillName
          );

        }
      );


      list.appendChild(
        button
      );

    }
  );


  group.appendChild(
    list
  );


  recommendedSkillArea.appendChild(
    group
  );

}


function toggleRecommendedSkill(
  skillName
) {

  const index =
    draftAdditionalSkills.findIndex(
      (skill) =>
        skill.name === skillName
    );


  if (index >= 0) {

    draftAdditionalSkills.splice(
      index,
      1
    );

  } else {

    if (
      draftAdditionalSkills.length >= 5
    ) {

      alert(
        "追加したいスキルは最大5個までです。"
      );

      return;

    }


    const skillData =
      SKILLS.find(
        (skill) =>
          skill.name === skillName
      );


    if (
      !skillData ||
      skillData.type !== "normal"
    ) {

      alert(
        "このスキルは追加スキルとして登録できません。"
      );

      return;

    }


    draftAdditionalSkills.push({

      name:
        skillName,

      acquired:
        false

    });

  }


  renderAdditionalSkills();

  renderRecommendations();

}


/* =========================================================
   検索
========================================================= */

playerSearch.addEventListener(
  "input",
  renderPlayerList
);


/* =========================================================
   マッチングタブ
========================================================= */

function setupMatchingTabs() {

  targetPlayerMatchingTab.addEventListener(
    "click",
    () => {

      targetPlayerMatchingTab.classList.add(
        "active"
      );

      materialPlayerMatchingTab.classList.remove(
        "active"
      );

      targetPlayerMatchingPanel.classList.add(
        "active"
      );

      materialPlayerMatchingPanel.classList.remove(
        "active"
      );


      renderTargetMatching();

    }
  );


  materialPlayerMatchingTab.addEventListener(
    "click",
    () => {

      materialPlayerMatchingTab.classList.add(
        "active"
      );

      targetPlayerMatchingTab.classList.remove(
        "active"
      );

      materialPlayerMatchingPanel.classList.add(
        "active"
      );

      targetPlayerMatchingPanel.classList.remove(
        "active"
      );


      renderMaterialMatching();

    }
  );

}


/* =========================================================
   マッチング用選手一覧
========================================================= */

function renderMatchingPlayerOptions() {

  const currentTargetValue =
    matchingTargetPlayer.value;

  const currentMaterialValue =
    matchingMaterialPlayer.value;


  matchingTargetPlayer.innerHTML =
    '<option value="">選手を選択</option>';


  matchingMaterialPlayer.innerHTML =
    '<option value="">選手を選択</option>';


  players
    .slice()
    .sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "ja"
        )
    )
    .forEach(
      (player) => {

        const option =
          document.createElement("option");

        option.value =
          player.id;

        option.textContent =
          player.name +
          " (" +
          player.position +
          ")";


        matchingTargetPlayer.appendChild(
          option
        );

      }
    );


  players
    .filter(
      (player) =>
        player.specialTraining
    )
    .slice()
    .sort(
      (a, b) =>
        a.name.localeCompare(
          b.name,
          "ja"
        )
    )
    .forEach(
      (player) => {

        const option =
          document.createElement("option");

        option.value =
          player.id;

        option.textContent =
          player.name +
          " (" +
          player.position +
          ")";


        matchingMaterialPlayer.appendChild(
          option
        );

      }
    );


  if (
    players.some(
      (player) =>
        player.id === currentTargetValue
    )
  ) {

    matchingTargetPlayer.value =
      currentTargetValue;

  }


  if (
    players.some(
      (player) =>
        player.id === currentMaterialValue &&
        player.specialTraining
    )
  ) {

    matchingMaterialPlayer.value =
      currentMaterialValue;

  }

}


/* =========================================================
   選手が現在持っているスキル

   所持スキル
   ＋
   取得済み追加スキル
========================================================= */

function getCurrentSkills(player) {

  const owned =
    Array.isArray(
      player.ownedSkills
    )
      ? player.ownedSkills
      : [];


  const acquiredAdditional =
    Array.isArray(
      player.additionalSkills
    )
      ? player.additionalSkills
        .filter(
          (skill) =>
            skill.acquired === true
        )
        .map(
          (skill) =>
            skill.name
        )
      : [];


  return [
    ...new Set([
      ...owned,
      ...acquiredAdditional
    ])
  ];

}


/* =========================================================
   選手が欲しい未取得スキル
========================================================= */

function getWantedSkills(player) {

  if (
    !Array.isArray(
      player.additionalSkills
    )
  ) {
    return [];
  }


  return player.additionalSkills
    .filter(
      (skill) =>
        skill.acquired !== true
    )
    .map(
      (skill) =>
        skill.name
    );

}


/* =========================================================
   強化したい選手から探す
========================================================= */

matchingTargetPlayer.addEventListener(
  "change",
  renderTargetMatching
);


function renderTargetMatching() {

  targetWantedSkillList.innerHTML =
    "";

  targetMatchingResult.innerHTML =
    "";


  const targetId =
    matchingTargetPlayer.value;


  if (!targetId) {

    targetWantedSkillList.innerHTML =
      '<p class="empty-message">選手を選択してください。</p>';

    targetMatchingResult.innerHTML =
      '<p class="empty-message">マッチング結果はありません。</p>';

    return;

  }


  const targetPlayer =
    players.find(
      (player) =>
        player.id === targetId
    );


  if (!targetPlayer) {
    return;
  }


  const wantedSkills =
    getWantedSkills(
      targetPlayer
    );


  /* =========================
     欲しいスキル
  ========================= */

  if (wantedSkills.length === 0) {

    targetWantedSkillList.innerHTML =
      '<p class="empty-message">未取得の追加スキルはありません。</p>';

  } else {

    wantedSkills.forEach(
      (skillName) => {

        const row =
          document.createElement("div");

        row.className =
          "skill-row";

        row.textContent =
          "・" + skillName;


        targetWantedSkillList.appendChild(
          row
        );

      }
    );

  }


  if (wantedSkills.length === 0) {

    targetMatchingResult.innerHTML =
      '<p class="empty-message">この選手は追加スキルをすべて取得済みです。</p>';

    return;

  }


  /* =========================
     特別強化用選手との比較
  ========================= */

  const materials =
    players.filter(
      (player) =>
        player.specialTraining &&
        player.id !== targetPlayer.id
    );


  if (materials.length === 0) {

    targetMatchingResult.innerHTML =
      '<p class="empty-message">特別強化用選手が登録されていません。</p>';

    return;

  }


  const results =
    materials.map(
      (material) => {

        const currentSkills =
          getCurrentSkills(
            material
          );


        const matchedSkills =
          wantedSkills.filter(
            (skill) =>
              currentSkills.includes(
                skill
              )
          );


        const missingSkills =
          wantedSkills.filter(
            (skill) =>
              !currentSkills.includes(
                skill
              )
          );


        return {

          player:
            material,

          matchedSkills,

          missingSkills,

          score:
            matchedSkills.length

        };

      }
    );


  results.sort(
    (a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }


      return a.player.name.localeCompare(
        b.player.name,
        "ja"
      );

    }
  );


  results.forEach(
    (result, index) => {

      const card =
        createTargetMatchCard(
          result,
          wantedSkills.length,
          index
        );


      targetMatchingResult.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   強化対象側マッチカード
========================================================= */

function createTargetMatchCard(
  result,
  totalWanted,
  index
) {

  const card =
    document.createElement("div");

  card.className =
    "match-card";


  const header =
    document.createElement("div");

  header.className =
    "match-card-header";


  const name =
    document.createElement("div");

  name.className =
    "match-card-name";


  const rankText =
    index === 0
      ? "🥇 "
      : index === 1
        ? "🥈 "
        : index === 2
          ? "🥉 "
          : (index + 1) + ". ";


  name.textContent =
    rankText +
    result.player.name;


  const score =
    document.createElement("div");

  score.className =
    "match-score";

  score.textContent =
    result.score +
    " / " +
    totalWanted;


  header.appendChild(name);

  header.appendChild(score);


  card.appendChild(header);


  if (
    result.matchedSkills.length > 0
  ) {

    const title =
      document.createElement("div");

    title.style.fontWeight =
      "700";

    title.style.fontSize =
      "13px";

    title.style.marginBottom =
      "4px";

    title.textContent =
      "一致";


    card.appendChild(title);


    result.matchedSkills.forEach(
      (skill) => {

        const row =
          document.createElement("div");

        row.className =
          "match-skill hit";

        row.textContent =
          "✓ " + skill;


        card.appendChild(row);

      }
    );

  }


  if (
    result.missingSkills.length > 0
  ) {

    const title =
      document.createElement("div");

    title.style.fontWeight =
      "700";

    title.style.fontSize =
      "13px";

    title.style.marginTop =
      "8px";

    title.style.marginBottom =
      "4px";

    title.textContent =
      "不足";


    card.appendChild(title);


    result.missingSkills.forEach(
      (skill) => {

        const row =
          document.createElement("div");

        row.className =
          "match-skill miss";

        row.textContent =
          "× " + skill;


        card.appendChild(row);

      }
    );

  }


  return card;

}


/* =========================================================
   素材から探す
========================================================= */

matchingMaterialPlayer.addEventListener(
  "change",
  renderMaterialMatching
);


function renderMaterialMatching() {

  materialOwnedSkillList.innerHTML =
    "";

  materialMatchingResult.innerHTML =
    "";


  const materialId =
    matchingMaterialPlayer.value;


  if (!materialId) {

    materialOwnedSkillList.innerHTML =
      '<p class="empty-message">選手を選択してください。</p>';

    materialMatchingResult.innerHTML =
      '<p class="empty-message">マッチング結果はありません。</p>';

    return;

  }


  const materialPlayer =
    players.find(
      (player) =>
        player.id === materialId &&
        player.specialTraining
    );


  if (!materialPlayer) {
    return;
  }


  const materialSkills =
    getCurrentSkills(
      materialPlayer
    );


  /* =========================
     素材が持っているスキル
  ========================= */

  if (materialSkills.length === 0) {

    materialOwnedSkillList.innerHTML =
      '<p class="empty-message">この選手には登録済みスキルがありません。</p>';

  } else {

    materialSkills.forEach(
      (skillName) => {

        const row =
          document.createElement("div");

        row.className =
          "skill-row";

        row.textContent =
          "・" + skillName;


        materialOwnedSkillList.appendChild(
          row
        );

      }
    );

  }


  /* =========================
     他選手との比較
  ========================= */

  const targets =
    players.filter(
      (player) =>
        player.id !== materialPlayer.id
    );


  if (targets.length === 0) {

    materialMatchingResult.innerHTML =
      '<p class="empty-message">比較対象の選手がいません。</p>';

    return;

  }


  const results =
    targets.map(
      (target) => {

        const wantedSkills =
          getWantedSkills(
            target
          );


        const matchedSkills =
          wantedSkills.filter(
            (skill) =>
              materialSkills.includes(
                skill
              )
          );


        return {

          player:
            target,

          wantedSkills,

          matchedSkills,

          score:
            matchedSkills.length

        };

      }
    )
      .filter(
        (result) =>
          result.wantedSkills.length > 0
      );


  if (results.length === 0) {

    materialMatchingResult.innerHTML =
      '<p class="empty-message">未取得の追加スキルを持つ選手がいません。</p>';

    return;

  }


  results.sort(
    (a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }


      return a.player.name.localeCompare(
        b.player.name,
        "ja"
      );

    }
  );


  results.forEach(
    (result, index) => {

      const card =
        createMaterialMatchCard(
          result,
          index
        );


      materialMatchingResult.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   素材側マッチカード
========================================================= */

function createMaterialMatchCard(
  result,
  index
) {

  const card =
    document.createElement("div");

  card.className =
    "match-card";


  const header =
    document.createElement("div");

  header.className =
    "match-card-header";


  const name =
    document.createElement("div");

  name.className =
    "match-card-name";


  const rankText =
    index === 0
      ? "🥇 "
      : index === 1
        ? "🥈 "
        : index === 2
          ? "🥉 "
          : (index + 1) + ". ";


  name.textContent =
    rankText +
    result.player.name;


  const score =
    document.createElement("div");

  score.className =
    "match-score";

  score.textContent =
    result.score +
    "一致";


  header.appendChild(name);

  header.appendChild(score);


  card.appendChild(header);


  if (
    result.matchedSkills.length === 0
  ) {

    const none =
      document.createElement("div");

    none.className =
      "match-skill miss";

    none.textContent =
      "一致スキルなし";


    card.appendChild(none);


    return card;

  }


  result.matchedSkills.forEach(
    (skill) => {

      const row =
        document.createElement("div");

      row.className =
        "match-skill hit";

      row.textContent =
        "✓ " + skill;


      card.appendChild(row);

    }
  );


  return card;

}


/* =========================================================
   おすすめ設定画面
========================================================= */

function setupRecommendationSettings() {

  if (
    recommendationPositionSelect
  ) {

    /*
      HTML側に古い
      CF / WG / MF / SB...
      が残っていても
      JS側で10分類に作り直す
    */

    recommendationPositionSelect.innerHTML =
      "";


    RECOMMENDATION_POSITION_TYPES.forEach(
      (positionType) => {

        const option =
          document.createElement("option");

        option.value =
          positionType;

        option.textContent =
          positionType;


        recommendationPositionSelect.appendChild(
          option
        );

      }
    );


    recommendationPositionSelect.value =
      "CF";


    recommendationPositionSelect.addEventListener(
      "change",
      renderRecommendationSettings
    );

  }


  if (
    openRecommendationSettingsButton
  ) {

    openRecommendationSettingsButton.addEventListener(
      "click",
      () => {

        showScreen(
          "recommendationSettingsScreen"
        );


        renderRecommendationSettings();

      }
    );

  }


  if (
    backToSettingsButton
  ) {

    backToSettingsButton.addEventListener(
      "click",
      () => {

        showScreen(
          "settingsScreen"
        );

      }
    );

  }

}


/* =========================================================
   おすすめ設定表示
========================================================= */

function renderRecommendationSettings() {

  if (
    !recommendationSettingsList ||
    !recommendationPositionSelect
  ) {

    return;

  }


  recommendationSettingsList.innerHTML =
    "";


  const positionType =
    recommendationPositionSelect.value;


  const categories = [
    "ドリブル",
    "パス",
    "シュート",
    "ディフェンス",
    "GK",
    "その他"
  ];


  categories.forEach(
    (category) => {

      /*
        特殊スキルはおすすめ追加候補には
        使用できないので除外
      */

      const categorySkills =
        SKILLS.filter(
          (skill) => {

            return (
              skill.type === "normal" &&
              skill.category === category
            );

          }
        );


      if (
        categorySkills.length === 0
      ) {

        return;

      }


      const container =
        document.createElement("div");

      container.className =
        "recommend-setting-category";


      const title =
        document.createElement("h3");

      title.className =
        "recommend-setting-category-title";

      title.textContent =
        "■ " + category;


      container.appendChild(
        title
      );


      categorySkills.forEach(
        (skill) => {

          const row =
            createRecommendationSettingRow(
              positionType,
              skill.name
            );


          container.appendChild(
            row
          );

        }
      );


      recommendationSettingsList.appendChild(
        container
      );

    }
  );

}


/* =========================================================
   おすすめ設定 1スキル
   ドロップダウン形式
========================================================= */

function createRecommendationSettingRow(
  positionType,
  skillName
) {

  const row =
    document.createElement("div");

  row.className =
    "recommend-setting-row";


  /* =========================
     スキル名
  ========================= */

  const skillNameElement =
    document.createElement("div");

  skillNameElement.className =
    "recommend-setting-skill-name";

  skillNameElement.textContent =
    skillName;


  /* =========================
     設定ドロップダウン
  ========================= */

  const select =
    document.createElement("select");

  select.className =
    "recommend-setting-select";


  const statusOptions = [

    {
      value: "none",
      label: "対象外"
    },

    {
      value: "candidate",
      label: "○ 候補"
    },

    {
      value: "best",
      label: "◎ 最有力"
    }

  ];


  const currentStatus =
    getRecommendationStatus(
      positionType,
      skillName
    );


  statusOptions.forEach(
    (statusOption) => {

      const option =
        document.createElement("option");

      option.value =
        statusOption.value;

      option.textContent =
        statusOption.label;


      if (
        currentStatus ===
        statusOption.value
      ) {

        option.selected =
          true;

      }


      select.appendChild(
        option
      );

    }
  );


  /* =========================
     変更時に即保存
  ========================= */

  select.addEventListener(
    "change",
    () => {

      setRecommendationStatus(
        positionType,
        skillName,
        select.value
      );


      saveRecommendationSettings();

    }
  );


  row.appendChild(
    skillNameElement
  );

  row.appendChild(
    select
  );


  return row;

}


/* =========================================================
   おすすめ状態取得
========================================================= */

function getRecommendationStatus(
  positionType,
  skillName
) {

  const setting =
    recommendationSettings[
    positionType
    ];


  if (!setting) {

    return "none";

  }


  if (
    Array.isArray(
      setting.best
    ) &&
    setting.best.includes(
      skillName
    )
  ) {

    return "best";

  }


  if (
    Array.isArray(
      setting.candidate
    ) &&
    setting.candidate.includes(
      skillName
    )
  ) {

    return "candidate";

  }


  return "none";

}


/* =========================================================
   おすすめ状態変更
========================================================= */

function setRecommendationStatus(
  positionType,
  skillName,
  status
) {

  if (
    !recommendationSettings[
    positionType
    ]
  ) {

    recommendationSettings[
      positionType
    ] = {

      best:
        [],

      candidate:
        []

    };

  }


  const setting =
    recommendationSettings[
    positionType
    ];


  /*
    一旦どちらからも削除
  */

  setting.best =
    setting.best.filter(
      (name) =>
        name !== skillName
    );


  setting.candidate =
    setting.candidate.filter(
      (name) =>
        name !== skillName
    );


  /*
    選択状態に応じて追加
  */

  if (
    status === "best"
  ) {

    setting.best.push(
      skillName
    );

  }


  if (
    status === "candidate"
  ) {

    setting.candidate.push(
      skillName
    );

  }

}


/* =========================================================
   初期おすすめ設定作成
========================================================= */

function createDefaultRecommendationSettings() {

  return JSON.parse(
    JSON.stringify(
      DEFAULT_RECOMMENDATION_SETTINGS
    )
  );

}


/* =========================================================
   おすすめ設定保存
========================================================= */

function saveRecommendationSettings() {

  try {

    localStorage.setItem(
      "efootballSkillManagerRecommendationSettings",
      JSON.stringify(
        recommendationSettings
      )
    );

  } catch (error) {

    console.error(
      "おすすめスキル設定の保存に失敗しました。",
      error
    );

  }

}


/* =========================================================
   おすすめ設定読込
========================================================= */

function loadRecommendationSettings() {

  const savedSettings =
    localStorage.getItem(
      "efootballSkillManagerRecommendationSettings"
    );


  /*
    保存済み設定なし
    ↓
    初期値を使用
  */

  if (!savedSettings) {

    recommendationSettings =
      createDefaultRecommendationSettings();

    return;

  }


  try {

    const parsed =
      JSON.parse(
        savedSettings
      );


    if (
      !parsed ||
      typeof parsed !== "object"
    ) {

      throw new Error(
        "おすすめ設定の形式が不正です。"
      );

    }


    /*
      新しいポジションが追加された場合でも
      初期値をベースに保存値を上書きする
    */

    const defaults =
      createDefaultRecommendationSettings();


    RECOMMENDATION_POSITION_TYPES.forEach(
      (positionType) => {

        if (
          parsed[positionType]
        ) {

          defaults[
            positionType
          ] = {

            best:
              Array.isArray(
                parsed[positionType].best
              )
                ? parsed[positionType].best
                : [],

            candidate:
              Array.isArray(
                parsed[positionType].candidate
              )
                ? parsed[positionType].candidate
                : []

          };

        }

      }
    );


    recommendationSettings =
      defaults;


  } catch (error) {

    console.error(
      "おすすめスキル設定の読み込みに失敗しました。",
      error
    );


    recommendationSettings =
      createDefaultRecommendationSettings();

  }

}


/* =========================================================
   ID
========================================================= */

function createPlayerId() {

  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, 8)
  );

}


/* =========================================================
   保存
========================================================= */

function savePlayers() {

  try {

    localStorage.setItem(
      "efootballSkillManagerPlayers",
      JSON.stringify(players)
    );

  } catch (error) {

    console.error(
      "選手データの保存に失敗しました。",
      error
    );

  }

}


/* =========================================================
   読み込み
========================================================= */

function loadPlayers() {

  const savedPlayers =
    localStorage.getItem(
      "efootballSkillManagerPlayers"
    );


  if (!savedPlayers) {

    players = [];

    return;

  }


  try {

    const parsed =
      JSON.parse(
        savedPlayers
      );


    if (!Array.isArray(parsed)) {

      players = [];

      return;

    }


    players =
      parsed.map(
        (player) => {

          const owned =
            Array.isArray(
              player.ownedSkills
            )
              ? player.ownedSkills
                .map(
                  (skill) => {

                    if (
                      typeof skill ===
                      "string"
                    ) {
                      return skill;
                    }


                    return skill.name;

                  }
                )
                .filter(Boolean)
              : [];


          const additional =
            Array.isArray(
              player.additionalSkills
            )
              ? player.additionalSkills
                .map(
                  (skill) => {

                    if (
                      typeof skill ===
                      "string"
                    ) {

                      return {
                        name: skill,
                        acquired: false
                      };

                    }


                    return {

                      name:
                        skill.name,

                      acquired:
                        Boolean(
                          skill.acquired
                        )

                    };

                  }
                )
                .filter(
                  (skill) =>
                    Boolean(
                      skill.name
                    )
                )
              : [];


          return {

            id:
              player.id ||
              createPlayerId(),

            name:
              player.name || "",

            position:
              player.position || "",

            ownedSkills:
              owned.slice(0, 10),

            additionalSkills:
              additional.slice(0, 5),

            specialTraining:
              Boolean(
                player.specialTraining
              ),

            createdAt:
              player.createdAt ||
              new Date().toISOString()

          };

        }
      );


  } catch (error) {

    console.error(
      "選手データの読み込みに失敗しました。",
      error
    );


    players = [];

  }

}
/* =========================================================
   データ書き出し
========================================================= */

if (exportDataButton) {

  exportDataButton.addEventListener(
    "click",
    () => {

      const backupData = {

        version: 1,

        app:
          "eFootball Skill Manager",

        exportedAt:
          new Date().toISOString(),

        players:
          players

      };


      const json =
        JSON.stringify(
          backupData,
          null,
          2
        );


      const blob =
        new Blob(
          [json],
          {
            type:
              "application/json;charset=utf-8"
          }
        );


      const url =
        URL.createObjectURL(
          blob
        );


      const link =
        document.createElement(
          "a"
        );


      const now =
        new Date();


      const year =
        now.getFullYear();


      const month =
        String(
          now.getMonth() + 1
        ).padStart(
          2,
          "0"
        );


      const day =
        String(
          now.getDate()
        ).padStart(
          2,
          "0"
        );


      const hours =
        String(
          now.getHours()
        ).padStart(
          2,
          "0"
        );


      const minutes =
        String(
          now.getMinutes()
        ).padStart(
          2,
          "0"
        );


      link.href =
        url;


      link.download =
        "efootball-skill-manager-backup-" +
        year +
        month +
        day +
        "-" +
        hours +
        minutes +
        ".json";


      document.body.appendChild(
        link
      );


      link.click();


      document.body.removeChild(
        link
      );


      /*
        URLをすぐ破棄すると
        一部ブラウザでダウンロードが
        失敗する可能性があるため少し待つ
      */

      setTimeout(
        () => {

          URL.revokeObjectURL(
            url
          );

        },
        1000
      );

    }
  );

}


/* =========================================================
   データ読み込み
========================================================= */

if (importDataInput) {

  importDataInput.addEventListener(
    "change",
    (event) => {

      const file =
        event.target.files &&
        event.target.files[0];


      if (!file) {

        return;

      }


      const reader =
        new FileReader();


      reader.onload =
        () => {

          try {

            const data =
              JSON.parse(
                reader.result
              );


            let importedPlayers =
              [];


            /*
              現在のバックアップ形式

              {
                version: 1,
                players: [...]
              }
            */

            if (
              data &&
              Array.isArray(
                data.players
              )
            ) {

              importedPlayers =
                data.players;

            }

            /*
              古い形式

              [
                {...},
                {...}
              ]

              にも対応
            */

            else if (
              Array.isArray(
                data
              )
            ) {

              importedPlayers =
                data;

            }

            else {

              throw new Error(
                "対応していないバックアップ形式です。"
              );

            }


            const confirmed =
              confirm(
                "現在登録されている選手データを、読み込んだバックアップデータで置き換えます。\n\nよろしいですか？"
              );


            if (
              !confirmed
            ) {

              importDataInput.value =
                "";

              return;

            }


            players =
              importedPlayers.map(
                normalizeImportedPlayer
              );


            savePlayers();


            /*
              表示を最新状態に更新
            */

            renderPlayerList();

            renderMatchingPlayerOptions();

            renderTargetMatching();

            renderMaterialMatching();


            alert(
              players.length +
              "人の選手データを復元しました。"
            );


          } catch (error) {

            console.error(
              "バックアップの読み込みに失敗しました。",
              error
            );


            alert(
              "バックアップファイルを読み込めませんでした。\n正しいJSONファイルか確認してください。"
            );

          }


          /*
            同じファイルを続けて
            選択できるようにリセット
          */

          importDataInput.value =
            "";

        };


      reader.onerror =
        () => {

          alert(
            "ファイルの読み込みに失敗しました。"
          );


          importDataInput.value =
            "";

        };


      reader.readAsText(
        file
      );

    }
  );

}


/* =========================================================
   インポートした選手データを現在形式へ変換
========================================================= */

function normalizeImportedPlayer(
  player
) {

  /*
    所持スキル
  */

  const ownedSkills =
    Array.isArray(
      player &&
      player.ownedSkills
    )
      ? player.ownedSkills
        .map(
          (skill) => {

            if (
              typeof skill ===
              "string"
            ) {

              return skill;

            }


            if (
              skill &&
              typeof skill.name ===
              "string"
            ) {

              return skill.name;

            }


            return null;

          }
        )
        .filter(Boolean)
        .slice(
          0,
          10
        )

      : [];


  /*
    追加スキル
  */

  const additionalSkills =
    Array.isArray(
      player &&
      player.additionalSkills
    )
      ? player.additionalSkills
        .map(
          (skill) => {

            /*
              古い形式

              "ワンタッチパス"
            */

            if (
              typeof skill ===
              "string"
            ) {

              return {

                name:
                  skill,

                acquired:
                  false

              };

            }


            /*
              現在形式
            */

            if (
              skill &&
              typeof skill.name ===
              "string"
            ) {

              return {

                name:
                  skill.name,

                acquired:
                  Boolean(
                    skill.acquired
                  )

              };

            }


            return null;

          }
        )
        .filter(Boolean)
        .slice(
          0,
          5
        )

      : [];


  return {

    id:
      player &&
        player.id
        ? player.id
        : createPlayerId(),

    name:
      player &&
        typeof player.name ===
        "string"
        ? player.name
        : "",

    position:
      player &&
        typeof player.position ===
        "string"
        ? player.position
        : "",

    ownedSkills:
      ownedSkills,

    additionalSkills:
      additionalSkills,

    specialTraining:
      Boolean(
        player &&
        player.specialTraining
      ),

    createdAt:
      player &&
        player.createdAt
        ? player.createdAt
        : new Date().toISOString()

  };

}


/* =========================================================
   全データ初期化
========================================================= */

if (resetDataButton) {

  resetDataButton.addEventListener(
    "click",
    () => {

      if (
        players.length === 0
      ) {

        alert(
          "削除する選手データがありません。"
        );

        return;

      }


      const firstConfirm =
        confirm(
          "登録している選手データをすべて削除します。\n\nこの操作は元に戻せません。\n\n削除前に「データを書き出す」でバックアップすることをおすすめします。\n\n続けますか？"
        );


      if (
        !firstConfirm
      ) {

        return;

      }


      /*
        誤操作防止のため
        もう一度確認
      */

      const secondConfirm =
        confirm(
          "本当に全選手データを削除しますか？"
        );


      if (
        !secondConfirm
      ) {

        return;

      }


      players =
        [];


      savePlayers();


      /*
        選択状態もリセット
      */

      editingPlayerId =
        null;

      draftOwnedSkills =
        [];

      draftAdditionalSkills =
        [];


      if (
        matchingTargetPlayer
      ) {

        matchingTargetPlayer.value =
          "";

      }


      if (
        matchingMaterialPlayer
      ) {

        matchingMaterialPlayer.value =
          "";

      }


      /*
        画面更新
      */

      renderPlayerList();

      renderMatchingPlayerOptions();

      renderTargetMatching();

      renderMaterialMatching();


      alert(
        "全選手データを削除しました。"
      );

    }
  );

}