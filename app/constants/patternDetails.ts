// constants/patternDetails.ts
export type PatternDetail = {
  intro: string;
  title: string;
  description: string[];
  strengths: string[];
  weaknesses: string[];
  recommended: string[];
  nextSteps: string[];
};

export const patternDetails: Record<string, PatternDetail> = {
  A: {
    intro: "楽しいのが一番！",
    title: "ゲーム＆映画フリークタイプ",
    description: [
      "好きなゲームはとことんやり込む。",
      "映画やYouTube動画も『知らない英語でも面白そう！』と興味津々。",
    ],
    strengths: ["集中力が高い", "好奇心旺盛"],
    weaknesses: ["基礎知識の定着が弱い"],
    recommended: [
      "スイッチの英語設定でゲームを楽しむ。",
      "英語字幕付きの映画で学ぶ。",
    ],
    nextSteps: [
      "短い英語フレーズの反復練習。",
      "ゲーム内の英語表現をメモする。",
    ],
  },
  B: {
    intro: "どんどん進めていこう！",
    title: "真面目コツコツ！英検一直線タイプ",
    description: [
      "目標があると、毎日コツコツ続けるのが苦にならない。",
      "過去問や問題集でトレーニングする方が安心。",
    ],
    strengths: ["計画的", "粘り強い"],
    weaknesses: ["柔軟性に欠ける"],
    recommended: [
      "英検過去問を徹底的に解く。",
      "単語帳で語彙を強化する。",
    ],
    nextSteps: [
      "毎日の進捗をチェックするツールの利用。",
      "模擬試験で実力を測る。",
    ],
  },
  C: {
    intro: "実践で学んでいく！",
    title: "友だちとワイワイ！コミュ力アップタイプ",
    description: [
      "友だちと一緒にいると楽しく、英語を会話で覚えたい。",
      "ゲーム感覚で学ぶと本領発揮。",
    ],
    strengths: ["コミュニケーション能力", "協調性"],
    weaknesses: ["文法基礎が弱い"],
    recommended: [
      "オンライン英会話やグループレッスンに参加。",
      "友だちと英語チャットを楽しむ。",
    ],
    nextSteps: [
      "定期的なグループ学習の実施。",
      "英語ディスカッションへの参加。",
    ],
  },
  D: {
    intro: "焦らず自分のペースで！",
    title: "おうちまったり＋親子でサポートタイプ",
    description: [
      "落ち着いた環境で、親子一緒に学ぶことが理想。",
      "自分のペースを大切にしながら学習する。",
    ],
    strengths: ["計画的", "丁寧"],
    weaknesses: ["チャレンジ精神不足"],
    recommended: [
      "英語絵本や家庭教材で基礎を固める。",
      "家族と一緒に学習計画を立てる。",
    ],
    nextSteps: [
      "日々の学習成果の記録。",
      "家庭学習のルーティン見直し。",
    ],
  },
};
