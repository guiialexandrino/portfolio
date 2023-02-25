export function animation(ref, animationName, time, callBack) {
  ref.classList.add(animationName);
  setTimeout(() => {
    if (callBack) callBack();
    ref.classList.remove(animationName);
  }, time);
}

export default { animation };
