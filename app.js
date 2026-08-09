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
   normal  = 通常スキル（追加可能）
   special = 特殊スキル（所持スキルのみ）
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
     ※追加スキル候補には表示しない
  ========================================================= */


  /* =========================
     特殊：ドリブル
  ========================= */

  { name: "モメンタムドリブル", category: "ドリブル", type: "special" },
  { name: "アクセルバースト", category: "ドリブル", type: "special" },
  { name: "マグネットフィート", category: "ドリブル", type: "special" },
  { name: "アタックサージ", category: "ドリブル", type: "special" },
  { name: "タップトリック", category: "ドリブル", type: "special" },


  /* =========================
     特殊：パス
  ========================= */

  { name: "ゲームチェンジパス", category: "パス", type: "special" },
  { name: "エッジクロス", category: "パス", type: "special" },
  { name: "ビジョナリーパス", category: "パス", type: "special" },
  { name: "フェノミナルパス", category: "パス", type: "special" },


  /* =========================
     特殊：シュート
  ========================= */

  { name: "フェノミナルフィニッシュ", category: "シュート", type: "special" },
  { name: "ブリッツカーブ", category: "シュート", type: "special" },
  { name: "バレットヘッド", category: "シュート", type: "special" },
  { name: "ロースクリーマー", category: "シュート", type: "special" },
  { name: "ウィルパワー", category: "シュート", type: "special" },


  /* =========================
     特殊：ディフェンス
  ========================= */

  { name: "フォートレス", category: "ディフェンス", type: "special" },
  { name: "エアリアルフォート", category: "ディフェンス", type: "special" },
  { name: "ロングリーチタックル", category: "ディフェンス", type: "special" },
  { name: "シャドウハント", category: "ディフェンス", type: "special" },


  /* =========================
     特殊：GK
  ========================= */

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


  /* =========================
     特殊：その他
  ========================= */

  { name: "アタックトリガー", category: "その他", type: "special" }

];


/* =========================================================
   ポジション別おすすめスキル
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


/* =========================================================
   全ポジション共通おすすめ
========================================================= */

const COMMON_RECOMMENDATIONS = [
  "PKキッカー",
  "ロングスロー",
  "キャプテンシー"
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


/* モーダル */

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


/* マッチングタブ */

const targetPlayerMatchingTab =
  document.getElementById("targetPlayerMatchingTab");

const materialPlayerMatchingTab =
  document.getElementById("materialPlayerMatchingTab");

const targetPlayerMatchingPanel =
  document.getElementById("targetPlayerMatchingPanel");

const materialPlayerMatchingPanel =
  document.getElementById("materialPlayerMatchingPanel");


/* 設定 */

const openRecommendationSettingsButton =
  document.getElementById("openRecommendationSettingsButton");

const backToSettingsButton =
  document.getElementById("backToSettingsButton");

const recommendationPositionSelect =
  document.getElementById("recommendationPositionSelect");

const recommendationSettingsList =
  document.getElementById("recommendationSettingsList");


/* =========================================================
   データ
========================================================= */

let players = [];

let editingPlayerId = null;


/*
  編集中の一時データ
  保存ボタンを押すまでplayersには反映しない
*/

let draftOwnedSkills = [];

let draftAdditionalSkills = [];


/*
  skillSelectorMode

  "owned"
  "additional"
*/

let skillSelectorMode = null;


/*
  モーダル内で一時選択しているスキル
*/

let temporarySelectedSkills =
  new Set();


/* =========================================================
   初期化
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadPlayers();

    renderPlayerList();

    setupMatchingTabs();

    setupRecommendationSettings();

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
   新規選手
========================================================= */

addPlayerButton.addEventListener(
  "click",
  () => {

    editingPlayerId = null;

    resetPlayerForm();

    playerEditTitle.textContent =
      "選手追加";

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

          positionButton.classList.remove(
            "selected"
          );

        }
      );


      button.classList.add(
        "selected"
      );


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

    resetPlayerForm();

    editingPlayerId = null;

    showScreen(
      "playerListScreen"
    );

  }
);


/* =========================================================
   新規追加
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
          acquired: Boolean(
            skill.acquired
          )
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
        acquired: Boolean(
          skill.acquired
        )
      })
    );

  player.specialTraining =
    specialTrainingPlayer.checked;

}


/* =========================================================
   一覧
========================================================= */

function renderPlayerList() {

  const searchText =
    playerSearch.value
      .trim()
      .toLowerCase();


  playerList.innerHTML = "";


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
    Array.isArray(
      player.additionalSkills
    )
      ? player.additionalSkills
      : [];


  const acquiredCount =
    additionalSkills.filter(
      (skill) =>
        skill.acquired === true
    ).length;


  const additionalSkillStatus =
    document.createElement("div");


  additionalSkillStatus.textContent =
    "追加スキル " +
    acquiredCount +
    " / " +
    additionalSkills.length;


  info.appendChild(
    additionalSkillStatus
  );


  if (player.specialTraining) {

    const specialLabel =
      document.createElement("div");

    specialLabel.className =
      "special-player-label";

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
        acquired: Boolean(
          skill.acquired
        )
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
   フォーム初期化
========================================================= */

function resetPlayerForm() {

  playerForm.reset();


  selectedPositionInput.value =
    "";


  positionButtons.forEach(
    (button) => {

      button.classList.remove(
        "selected"
      );

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
   所持スキル・追加スキル表示
========================================================= */

function renderSkillSections() {

  renderOwnedSkills();

  renderAdditionalSkills();

}


/* =========================================================
   所持スキル表示
========================================================= */

function renderOwnedSkills() {

  ownedSkillList.innerHTML =
    "";


  ownedSkillCount.textContent =
    draftOwnedSkills.length +
    " / 10";


  if (
    draftOwnedSkills.length === 0
  ) {

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
   追加スキル表示
========================================================= */

function renderAdditionalSkills() {

  additionalSkillList.innerHTML =
    "";


  additionalSkillCount.textContent =
    draftAdditionalSkills.length +
    " / 5";


  if (
    draftAdditionalSkills.length === 0
  ) {

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


      /* -------------------------
         取得状態
      ------------------------- */

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


      /* -------------------------
         削除
      ------------------------- */

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
   所持スキル選択モーダル
========================================================= */

openOwnedSkillSelectorButton.addEventListener(
  "click",
  () => {

    openSkillSelector(
      "owned"
    );

  }
);


/* =========================================================
   追加スキル選択モーダル
========================================================= */

openAdditionalSkillSelectorButton.addEventListener(
  "click",
  () => {

    openSkillSelector(
      "additional"
    );

  }
);


/* =========================================================
   スキルモーダルを開く
========================================================= */

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


/* =========================================================
   モーダルを閉じる
========================================================= */

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


/* =========================================================
   モーダル ×
========================================================= */

closeSkillSelectorButton.addEventListener(
  "click",
  closeSkillSelector
);


/* =========================================================
   背景クリック
========================================================= */

const modalOverlay =
  skillSelectorModal.querySelector(
    ".modal-overlay"
  );


modalOverlay.addEventListener(
  "click",
  closeSkillSelector
);


/* =========================================================
   スキル検索
========================================================= */

skillSearch.addEventListener(
  "input",
  () => {

    renderSkillSelectorList();

  }
);


/* =========================================================
   スキル候補生成
========================================================= */

function getSelectableSkills() {

  if (
    skillSelectorMode === "owned"
  ) {

    /*
      所持スキル
      → 通常＋特殊

      ただし追加予定に登録済みの
      スキルは二重登録防止のため除外
    */

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


  /*
    追加スキル
    → 通常スキルのみ
    → 所持スキルは除外
  */

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


/* =========================================================
   スキル候補表示
========================================================= */

function renderSkillSelectorList() {

  skillSelectorList.innerHTML =
    "";


  const searchText =
    skillSearch.value
      .trim()
      .toLowerCase();


  const selectableSkills =
    getSelectableSkills().filter(
      (skill) => {

        return skill.name
          .toLowerCase()
          .includes(searchText);

      }
    );


  if (
    selectableSkills.length === 0
  ) {

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


      if (
        categorySkills.length === 0
      ) {

        return;

      }


      const heading =
        document.createElement("div");

      heading.className =
        "recommend-group-title";

      heading.textContent =
        "■ " + category;


      skillSelectorList.appendChild(
        heading
      );


      categorySkills.forEach(
        (skill) => {

          const label =
            document.createElement(
              "label"
            );

          label.className =
            "skill-selector-item";


          const checkbox =
            document.createElement(
              "input"
            );

          checkbox.type =
            "checkbox";

          checkbox.checked =
            temporarySelectedSkills.has(
              skill.name
            );


          checkbox.addEventListener(
            "change",
            () => {

              handleTemporarySkillSelection(
                skill,
                checkbox
              );

            }
          );


          const text =
            document.createElement(
              "span"
            );


          if (
            skill.type === "special"
          ) {

            text.textContent =
              skill.name +
              " 【特殊・追加不可】";

          } else {

            text.textContent =
              skill.name;

          }


          label.appendChild(
            checkbox
          );

          label.appendChild(
            text
          );


          skillSelectorList.appendChild(
            label
          );

        }
      );

    }
  );

}


/* =========================================================
   モーダル内選択
========================================================= */

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


/* =========================================================
   スキル選択決定
========================================================= */

confirmSkillSelectionButton.addEventListener(
  "click",
  () => {

    if (
      skillSelectorMode === "owned"
    ) {

      draftOwnedSkills =
        [...temporarySelectedSkills];


    } else {

      /*
        既存スキルの取得状態を維持
      */

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

            name: name,

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
   ポジション→おすすめ分類
========================================================= */

function getRecommendationType(
  position
) {

  if (
    position === "CF" ||
    position === "ST"
  ) {

    return "CF";

  }


  if (
    position === "LWG" ||
    position === "RWG"
  ) {

    return "WG";

  }


  if (
    position === "LMF" ||
    position === "RMF" ||
    position === "OMF" ||
    position === "CMF" ||
    position === "DMF"
  ) {

    return "MF";

  }


  if (
    position === "LSB" ||
    position === "RSB"
  ) {

    return "SB";

  }


  if (
    position === "CB"
  ) {

    return "CB";

  }


  if (
    position === "GK"
  ) {

    return "GK";

  }


  return null;

}


/* =========================================================
   おすすめ表示
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


  recommendPositionLabel.textContent =
    position + " おすすめ";


  const recommendationType =
    getRecommendationType(
      position
    );


  const groups =
    RECOMMENDATIONS[
      recommendationType
    ] || [];


  groups.forEach(
    (group) => {

      createRecommendationGroup(
        group.title,
        group.skills || [],
        false
      );


      if (
        group.lowPriority &&
        group.lowPriority.length > 0
      ) {

        createRecommendationGroup(
          group.title + "（候補）",
          group.lowPriority,
          true
        );

      }

    }
  );


  createRecommendationGroup(
    "その他",
    COMMON_RECOMMENDATIONS,
    true
  );

}


/* =========================================================
   おすすめグループ
========================================================= */

function createRecommendationGroup(
  title,
  skills,
  lowPriority
) {

  const availableSkills =
    skills.filter(
      (skillName) =>
        !draftOwnedSkills.includes(
          skillName
        )
    );


  if (
    availableSkills.length === 0
  ) {

    return;

  }


  const group =
    document.createElement("div");

  group.className =
    "recommend-group";


  const heading =
    document.createElement("div");

  heading.className =
    "recommend-group-title";

  heading.textContent =
    title;


  const list =
    document.createElement("div");

  list.className =
    "recommend-skill-list";


  availableSkills.forEach(
    (skillName) => {

      const row =
        document.createElement("div");

      row.className =
        "recommend-skill-row";


      if (lowPriority) {

        row.classList.add(
          "low-priority"
        );

      }


      const text =
        document.createElement("span");

      text.textContent =
        skillName;


      const button =
        document.createElement("button");

      button.type =
        "button";

      button.className =
        "recommend-add-button";


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
          "✓ 選択済";

      } else {

        button.textContent =
          "＋追加";

      }


      button.addEventListener(
        "click",
        () => {

          toggleRecommendedSkill(
            skillName
          );

        }
      );


      row.appendChild(text);

      row.appendChild(button);

      list.appendChild(row);

    }
  );


  group.appendChild(heading);

  group.appendChild(list);


  recommendedSkillArea.appendChild(
    group
  );

}


/* =========================================================
   おすすめから追加
========================================================= */

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


    /*
      念のため通常スキルかチェック
    */

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
   選手検索
========================================================= */

playerSearch.addEventListener(
  "input",
  () => {

    renderPlayerList();

  }
);


/* =========================================================
   マッチング画面タブ
========================================================= */

function setupMatchingTabs() {

  if (
    !targetPlayerMatchingTab ||
    !materialPlayerMatchingTab
  ) {

    return;

  }


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

    }
  );

}


/* =========================================================
   おすすめ設定画面
========================================================= */

function setupRecommendationSettings() {

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


  if (backToSettingsButton) {

    backToSettingsButton.addEventListener(
      "click",
      () => {

        showScreen(
          "settingsScreen"
        );

      }
    );

  }


  if (
    recommendationPositionSelect
  ) {

    recommendationPositionSelect.addEventListener(
      "change",
      () => {

        renderRecommendationSettings();

      }
    );

  }

}


/* =========================================================
   設定画面おすすめ一覧
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


  const type =
    recommendationPositionSelect.value;


  const groups =
    RECOMMENDATIONS[type] || [];


  groups.forEach(
    (group) => {

      const container =
        document.createElement("div");

      container.className =
        "form-section";


      const title =
        document.createElement("h3");

      title.textContent =
        group.title;


      container.appendChild(
        title
      );


      const allSkills = [

        ...(group.skills || []).map(
          (name) => ({
            name,
            low: false
          })
        ),

        ...(group.lowPriority || []).map(
          (name) => ({
            name,
            low: true
          })
        )

      ];


      allSkills.forEach(
        (skill) => {

          const row =
            document.createElement("div");

          row.className =
            "skill-row";


          if (skill.low) {

            row.style.opacity =
              "0.65";

          }


          row.textContent =
            skill.low
              ? skill.name + "（候補）"
              : skill.name;


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

          /*
            旧データにも対応
          */

          const owned =
            Array.isArray(
              player.ownedSkills
            )
              ? player.ownedSkills
                  .map((skill) => {

                    if (
                      typeof skill ===
                      "string"
                    ) {

                      return skill;

                    }


                    return skill.name;

                  })
                  .filter(Boolean)
              : [];


          const additional =
            Array.isArray(
              player.additionalSkills
            )
              ? player.additionalSkills
                  .map((skill) => {

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


                    return {

                      name:
                        skill.name,

                      acquired:
                        Boolean(
                          skill.acquired
                        )

                    };

                  })
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