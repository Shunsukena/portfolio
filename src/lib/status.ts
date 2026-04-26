import type { AppStatus } from '../data/projects';

const labels: Record<AppStatus, string> = {
  live: '公開中',
  beta: 'β テスト',
  coming: 'Coming soon',
};

export function statusLabel(status: AppStatus): string {
  return labels[status];
}

export function statusStyle(status: AppStatus): string {
  switch (status) {
    case 'live':
      return 'border-emerald-200 bg-emerald-50 text-emerald-800';
    case 'beta':
      return 'border-amber-200 bg-amber-50 text-amber-900';
    case 'coming':
    default:
      return 'border-slate-200 bg-slate-100 text-slate-600';
  }
}
