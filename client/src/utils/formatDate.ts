export function formatDate(createdAt: string) {
  const date = new Date(createdAt);

  return new Intl.DateTimeFormat('pt-br', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
