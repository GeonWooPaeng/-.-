'use client';

const useDebounce = (callback, delay) => {
  let timer;
  return (...args) => {
    // 실행한 함수(setTimeout())를 취소
    clearTimeout(timer);
    // delay가 지나면 callback 함수 실행
    timer = setTimeout(() => callback(...args), delay);
  };
};

export default useDebounce;
