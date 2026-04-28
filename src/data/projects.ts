export type AppCategory = 'game' | 'memorize';

export type AppStatus = 'live' | 'beta' | 'coming';

export interface PortfolioApp {
  title: string;
  description: string;
  category: AppCategory;
  status: AppStatus;
  href?: string;
  tag?: string;
  /** `public/` からのパス（例: `/images/foo.png`） */
  image?: string;
  imageAlt?: string;
}

export const categories: { id: AppCategory; label: string; emoji: string }[] = [
  { id: 'game', label: 'ゲーム', emoji: '🎮' },
  { id: 'memorize', label: '暗記', emoji: '📇' },
];

export const apps: PortfolioApp[] = [
  {
    title: '薬理道場',
    description:
      '敵を倒しながら薬理の勉強！\n君はどこまで進める！？',
    category: 'game',
    status: 'live',
    href: 'https://apps.apple.com/jp/app/%E8%96%AC%E7%90%86%E9%81%93%E5%A0%B4/id6760630649',
    image: '/images/yakuridojo.png',
    imageAlt: '薬理道場 アプリのキービジュアル',
  },
  {
    title: 'お薬パトロール',
    description:
      '薬剤師の一包化監査業務を体験。\n素早く、精確に見極めろ！',
    category: 'game',
    status: 'live',
    href: 'https://apps.apple.com/jp/app/%E3%81%8A%E8%96%AC%E3%83%91%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB/id6761160568',
    image: '/images/okusuri-patrol.png',
    imageAlt: 'お薬パトロール アプリのキービジュアル',
  },
  {
    title: '軟膏カード',
    description:
      '軟膏の一般名、成分名をカードで暗記。\nスキマ時間にチャチャっと覚えましょう！',
    category: 'memorize',
    status: 'live',
    href: 'https://apps.apple.com/jp/app/%E8%BB%9F%E8%86%8F%E3%82%AB%E3%83%BC%E3%83%88/id6762047769',
    image: '/images/soft-ointment-card.png',
    imageAlt: '軟膏カード アプリアイコン',
  },
  {
    title: '薬なまえカード',
    description:
      '薬の先発名と一般名をこれで暗記！\nクイズ・辞書機能もあります。',
    category: 'memorize',
    status: 'live',
    href: 'https://apps.apple.com/jp/app/%E8%96%AC%E3%81%AA%E3%81%BE%E3%81%88%E3%82%AB%E3%83%BC%E3%83%89/id6763898619',
    image: '/images/yaku-namae-card.png',
    imageAlt: '薬なまえカード アプリアイコン',
  },
];
