/* ============================================================
 * main.js — 정다혜 포트폴리오
 * ========================================================== */
(function () {
  "use strict";

  var IMG = "images/main/";

  var CAT_LABEL = {
    react: "REACT",
    a11y: "웹접근성",
    team: "팀 프로젝트",
    intra: "내부망",
    solo: "개인 작업",
  };

  /* 포트폴리오 데이터 : {name, cat, img, url} */
  var WORKS = [
    /* --- REACT --- */
    { name: "이실장플러스", cat: "react", img: "71.png", url: "https://www.aipartner.plus/" },

    /* --- 웹접근성 --- */
    { name: "가천대학교", cat: "a11y", img: "45.png", url: "https://www.gachon.ac.kr/kor/index.do" },
    { name: "가천대학교 장애학생지원센터", cat: "a11y", img: "46.png", url: "https://www.gachon.ac.kr/sites/nanum/index.do" },
    // { name: '강릉원주대학교', cat: 'a11y', img: '52.png', url: 'https://www.gwnu.ac.kr/sites/kr/index.do' },
    { name: "수협 어촌사랑", cat: "a11y", img: "54.png", url: "https://isealove.suhyup.co.kr/isealove/index.do" },
    { name: "수협 수산경제연구원", cat: "a11y", img: "55.png", url: "https://isealove.suhyup.co.kr/isealove/index.do" },
    { name: "나사렛대학교", cat: "a11y", img: "53.png", url: "https://www.kornu.ac.kr/mbs/kornukr/index.jsp" },

    /* --- 팀 프로젝트 (메인 담당) --- */
    { name: "강원도교육청 리뉴얼", cat: "team", img: "70.png", url: "https://www.gwe.go.kr/mbshome/mbs/kr/index.do" },
    { name: "명지대학교 (템플릿)", cat: "team", img: "68.png", url: "https://chem.mju.ac.kr/chem/index.do" },
    { name: "나사렛대학교 (템플릿)", cat: "team", img: "61.png", url: "https://cms.kornu.ac.kr/emt/index.do" },
    { name: "협성대학교 (템플릿)", cat: "team", img: "60.png", url: "https://www.uhs.ac.kr/sites/gra/index.do" },

    /* --- 내부망 --- */
    { name: "농협 기업형 템플릿", cat: "intra", img: "69.jpg", url: "" },
    { name: "육군사관학교 산학협력단", cat: "intra", img: "67.png", url: "https://research.kma.ac.kr:462/sites/research/index.do" },
    { name: "육군사관학교 화랑대연구소", cat: "intra", img: "66.jpg", url: "" },
    { name: "안보지원사령부", cat: "intra", img: "65.jpg", url: "" },
    { name: "스마트국방혁신", cat: "intra", img: "64.jpg", url: "" },
    { name: "군인원지키미", cat: "intra", img: "63.png", url: "https://hrkeeper.mnd.go.kr/mbshome/mbs/mhriis/" },
    { name: "국방헬프콜", cat: "intra", img: "62.jpg", url: "https://medcmd.mil.kr/mbshome/mbs/helpcall2/" },
    { name: "국방통합데이터센터", cat: "intra", img: "59.jpg", url: "" },
    { name: "국방부 가습기살균제 군피해지원센터", cat: "intra", img: "58.jpg", url: "" },
    { name: "과학화전투훈련단", cat: "intra", img: "57.png", url: "https://www.kctc.mil.kr:452/" },
    { name: "대한민국 공군", cat: "intra", img: "56.jpg", url: "" },
    { name: "육군학생군사학교", cat: "intra", img: "51.jpg", url: "" },
    { name: "지상군페스티벌", cat: "intra", img: "50.jpg", url: "" },
    { name: "국방안보대화", cat: "intra", img: "43.jpg", url: "" },
    { name: "양성평등", cat: "intra", img: "44.jpg", url: "" },
    { name: "국군인쇄창", cat: "intra", img: "47.jpg", url: "" },
    { name: "조사본부", cat: "intra", img: "48.jpg", url: "" },
    { name: "군사지형정보", cat: "intra", img: "49.jpg", url: "" },

    /* --- 개인 작업 (100%) --- */
    { name: "듀얼아이", cat: "solo", img: "39.png", url: "http://www.duali.com/" },
    { name: "용추골미궁순대", cat: "solo", img: "40.png", url: "https://www.soondea.com/kr/" },
    // { name: "지유가오카", cat: "solo", img: "16.png", url: "http://jiyugaoka.co.kr/kr/index.php" },
    { name: "큰손컴퍼니", cat: "solo", img: "42.png", url: "http://www.kscompany.co.kr/kr/index.php" },
    { name: "제니스앤컴퍼니", cat: "solo", img: "01.png", url: "http://www.zenithn.com/" },
    { name: "아이닉스", cat: "solo", img: "02.png", url: "http://www.eyenix.com/" },
    // { name: "에스앤티씰링시스템", cat: "solo", img: "03.png", url: "http://www.sntsealing.com/" },
    // { name: "이천영어마을", cat: "solo", img: "04.png", url: "http://gpv.unesco.or.kr" },
    { name: "파란텍", cat: "solo", img: "11.png", url: "https://parantek.com/en/index.php" },
    { name: "운세코리아", cat: "solo", img: "06.png", url: "http://unsek.net/kr/index.php" },
    { name: "나우베스트", cat: "solo", img: "13.png", url: "http://www.nowbest.com/kr/index.php" },
    // { name: "스펠릭스", cat: "solo", img: "34.png", url: "https://spelix.com/kr/index.php" },
    { name: "세인트폴 서울", cat: "solo", img: "35.png", url: "http://www.stpaulseoul.org/en/" },
    { name: "KDX2019", cat: "solo", img: "28.png", url: "http://www.kdxkorea.co.kr/kr/index.php" },
    // { name: "3장인", cat: "solo", img: "38.png", url: "http://3jangin.com/kr/index.php" },
    // { name: "나노워셔", cat: "solo", img: "14.png", url: "http://www.nanowasher.com" },
    // { name: "에코필리아", cat: "solo", img: "20.png", url: "http://www.ecophilia.co.kr/kr/index.php" },
    { name: "그루스터디센터", cat: "solo", img: "19.png", url: "http://groostudy.co.kr/" },
    { name: "한국종이접기협회", cat: "solo", img: "12.png", url: "http://www.origami.or.kr/kr/index.php" },
    // { name: "MH인베스트먼트", cat: "solo", img: "07.png", url: "http://topsstock.co.kr/" },
    // { name: "한송정", cat: "solo", img: "05.png", url: "http://xn--o80b27iutf.kr/kr/index.php" },
    { name: "아신아이", cat: "solo", img: "08.png", url: "http://www.selftrust.co.kr/kr/index.php" },
    // { name: "정광피에스아이", cat: "solo", img: "09.png", url: "http://www.promade21.co.kr" },
    { name: "심리센터 다감", cat: "solo", img: "10.png", url: "http://www.dagam.co/kr/index.php" },
    // { name: "지능정보산업협회", cat: "solo", img: "15.png", url: "http://www.k-ai.or.kr" },
    // { name: "인스쿨연기학원", cat: "solo", img: "17.png", url: "http://www.inschool.kr" },
    { name: "지와이텐트", cat: "solo", img: "18.png", url: "http://www.gytent.co.kr/kr/index.php" },
    { name: "대신입찰연구소", cat: "solo", img: "21.png", url: "https://dsbid.net/kr/index.php" },
    { name: "더플랜", cat: "solo", img: "22.png", url: "http://dreamtheplan.com" },
    // { name: "셀리버리", cat: "solo", img: "24.png", url: "http://www.celliveryreagent.com/kr/index.php" },
    { name: "오팔인터내셔널", cat: "solo", img: "25.png", url: "http://www.garmentopal.com/en/index.php" },
    // { name: "거제둔덕시골", cat: "solo", img: "26.png", url: "http://gddsigol.co.kr/kr/index.php" },
    { name: "비씨티", cat: "solo", img: "27.png", url: "http://www.ibct.co.kr/kr/index.php" },
    // { name: "한국기업산업협회", cat: "solo", img: "29.png", url: "http://www.keisa.co.kr/kr/" },
    // { name: "로이스멤버십", cat: "solo", img: "30.png", url: "https://member.e-royce.co.kr/kr/index.php" },
    { name: "마인드매니지", cat: "solo", img: "31.png", url: "http://www.mindmanage.co.kr/kr/index.php" },
    // { name: "세인티엔엘", cat: "solo", img: "32.png", url: "http://www.seinlogistics.com/kr/index.php" },
    // { name: "두센", cat: "solo", img: "33.png", url: "http://www.shmodular.com/kr/" },
    // { name: "탄천물재생센터", cat: "solo", img: "36.png", url: "http://www.tancheon.com/kr/index.php" },
    // { name: "탄천환경 개방체육시설", cat: "solo", img: "37.png", url: "http://www.tancheonpark.com/kr/index.php" },
  ];

  /* ---------- render portfolio ---------- */
  function renderWorks() {
    var grid = document.getElementById("workGrid");
    if (!grid) return;
    var html = "";
    WORKS.forEach(function (w, i) {
      var hasLink = !!w.url;
      var tag = hasLink ? "a" : "div";
      var attrs = hasLink ? ' href="' + w.url + '" target="_blank" rel="noopener"' : "";
      html +=
        "<" +
        tag +
        ' class="work-card' +
        (hasLink ? "" : " no-link") +
        '" data-cat="' +
        w.cat +
        '"' +
        attrs +
        ">" +
        '<span class="work-thumb ph-' +
        (i % 5) +
        '">' +
        '<img src="' +
        IMG +
        w.img +
        '" alt="' +
        w.name +
        '" loading="lazy" data-name="' +
        w.name +
        '">' +
        "</span>" +
        '<span class="work-overlay">' +
        '<span class="work-cat">' +
        (CAT_LABEL[w.cat] || "") +
        "</span>" +
        '<span class="work-name">' +
        w.name +
        "</span>" +
        "</span>" +
        (hasLink ? '<span class="work-arrow" aria-hidden="true">↗</span>' : "") +
        "</" +
        tag +
        ">";
    });
    grid.innerHTML = html;

    // 썸네일 로드 실패 시 브랜드 플레이스홀더로 대체
    grid.querySelectorAll(".work-thumb img").forEach(function (img) {
      img.addEventListener("error", function () {
        var thumb = img.parentNode;
        if (thumb.querySelector(".work-ph")) return;
        img.style.display = "none";
        var ph = document.createElement("span");
        ph.className = "work-ph";
        ph.textContent = img.getAttribute("data-name") || "";
        thumb.classList.add("failed");
        thumb.appendChild(ph);
      });
    });

    observeReveal(grid.querySelectorAll(".work-card"));
  }

  /* ---------- filter ---------- */
  function initFilter() {
    var filter = document.getElementById("filter");
    var grid = document.getElementById("workGrid");
    if (!filter || !grid) return;
    filter.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filter.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      grid.querySelectorAll(".work-card").forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("hide", !show);
      });
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealObserver = null;
  function observeReveal(nodes) {
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("in");
      });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              revealObserver.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
    }
    nodes.forEach(function (n, i) {
      n.style.transitionDelay = Math.min(i, 8) * 60 + "ms";
      revealObserver.observe(n);
    });
  }

  /* ---------- header scroll state ---------- */
  function initHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- mobile nav ---------- */
  function initNav() {
    var toggle = document.getElementById("navToggle");
    var gnb = document.querySelector(".gnb");
    if (!toggle || !gnb) return;
    toggle.addEventListener("click", function () {
      var open = gnb.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    gnb.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        gnb.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- hero mouse parallax ---------- */
  function initParallax() {
    var bg = document.getElementById("heroBg");
    var hero = document.getElementById("hero");
    if (!bg || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // 컨테이너에만 transform을 적용해 블롭 자체의 float 애니메이션과 겹쳐지도록 함
    hero.addEventListener("mousemove", function (e) {
      if (window.innerWidth < 800) return;
      var ox = 0.5 - e.clientX / window.innerWidth;
      var oy = 0.5 - e.clientY / window.innerHeight;
      bg.style.transform = "translate3d(" + Math.round(ox * 40) + "px," + Math.round(oy * 40) + "px,0)";
    });
  }

  /* ---------- init ---------- */
  function init() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    renderWorks();
    initFilter();
    initHeader();
    initNav();
    initParallax();
    observeReveal(document.querySelectorAll(".reveal"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
