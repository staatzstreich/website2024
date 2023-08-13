export default (id: string, targetId?: string) => {
  const el = document.getElementById(id)! as HTMLElement | HTMLImageElement;
  const targetEl = targetId ? document.getElementById(targetId)! : el;
  let imageToLoad;
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof (el as HTMLImageElement).currentSrc === "undefined") {
    imageToLoad = (el as HTMLImageElement).src;
  } else {
    imageToLoad = (el as HTMLImageElement).currentSrc;
  }
  if (imageToLoad) {
    const img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
};
