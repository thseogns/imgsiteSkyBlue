window.addEventListener("load", () => {
  //로딩후에 실행하라
  const elem = document.querySelector("section");
  const iso = new Isotope(elem, {
    // options
    itemSelector: "article",
  });
  const filterBtn = document.querySelectorAll(".btn>li");
  for (let aa of filterBtn) {
    aa.addEventListener("click", function (e) {
      e.preventDefault();
      for (let ee of filterBtn) {
        //클릭할때 각 아이템(버튼)에 반복되게 일어난다.
        ee.classList.remove("on");
      }
      //클릭한곳에 클라스 넣어줌
      this.classList.add("on");
      //클릭한 버튼에 있는 a태그 안의 href의 value값을 가져온다
      const filtering = this.querySelector("a").getAttribute("href");
      console.log(filtering);

      //   e.currentTarget.classList.add("on");  위것 아래것 전부가능??

      iso.arrange({ filter: filtering });
    });
  }
  //각 article을 클릭하면 팝업창이 뜨게
  const items = document.querySelectorAll("article");
  const pop = document.querySelector("#popup");
  for (const aa of items) {
    aa.addEventListener("click", function (e) {
      const winW = document.body.clientWidth;
      console.log(winW);
      if (winW > 767) {
        //클릭한 이미지의 src값 , h2값 , p값 를 받아옴
        const img = e.currentTarget.querySelector("img").getAttribute("src");
        const title = e.currentTarget.querySelector("h2").innertext;
        const desc = e.currentTarget.querySelector("p").innertext;

        //pop에 위의 변수를 적용
        pop.querySelector("img").setAttribute("src", img);
        pop.querySelector("h2").innerText - title;
        pop.querySelector("p").innerText - desc;

        pop.classList.add("on");
      }
    });
  }
  window.addEventListener("resize", function () {
    const winW = document.body.clientWidth;
    if (winW < 767) {
      pop.classList.remove("on");
    }
  });
  //popup창을 클릭하면 pop이 사라짐
  pop.addEventListener("click", () => {
    pop.classList.remove("on");
  });
});
