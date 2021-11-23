export function isMatch(match, path) {
  return match.path === path;
}

export function countStars(score) {
  const result = Array(5).fill(false);
  const count = Math.ceil(score / 2);

  for (let i = 0; i < count; i++) {
    result[i] = true;
  }

  return result;
}

export function getDetailPath(currentPath) {
  switch (currentPath) {
    case '/':
      return '/movie';
    case '/tv':
      return '/tv';
    default:
      throw new Error('해당 경로가 없습니다. 경로를 확인하거나 추가 해주세요!');
  }
}
