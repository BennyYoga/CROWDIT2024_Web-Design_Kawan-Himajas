let bg;
(function ($) {
  $(document).ready(function () {
    slidePage();
    bg = createDotted(bg);

    var volume = true;

    $(".btn-sound").click(function () {
      if (volume) {
        volume = false;
        $(".btn-sound").html(
          '<i class="ph ph-speaker-slash text-white"></i>'
        );
      } else {
        volume = true;
        $(".btn-sound").html(
          '<i class="ph ph-speaker-high text-white"></i>'
        );
      }
    });
  });
})(jQuery);

slidePage = () => {
  $(".screen").page();
  $(".screen .page .navigate").click(function (ev) {
    var page = $(ev.target).attr("data-page-name");
    var trans = $(ev.target).attr("data-page-trans");

    setTimeout(function () {
      if ($(".screen").page().fetch(page) === null)
        $(".screen").page().shake();
      else $(".screen").page().transition(page, trans);
    }, 10);
  });

  $(".screen").page().transition("1", "none");
  $(".remove-button").click(function () {
    var id = $(".remove-input").val();
    $(".screen").page().remove(id);
  });
  $(".shake-button").click(function () {
    $(".screen").page().shake();
  });
};

// From Page 1 Main
$(".button-next-1").click(function () {
  gsap.to(["#main-title", "#main-text"], {
    x: 300,
    duration: 0.5,
  });

  gsap.from(".saham-trans", {
    x: -100,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-blue");
  $(".btn-sound").addClass("bg-main-dark");

  $(".btn-about").removeClass("bg-main-blue");
  $(".btn-about").addClass("bg-main-dark");

  $(".saham-image").append(
    `<img src="./assets/icon/SahamSVG.svg#${new Date().getTime()}" alt="" class="icon-saham-main" />`
  );
});

// From Page 2 Saham
$(".button-next-2").click(function () {
  gsap.to(".saham-trans", {
    x: 100,
    duration: 1,
  });

  gsap.from(".obligasi-trans", {
    x: -100,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-dark");
  $(".btn-sound").addClass("bg-main-purple");

  $(".btn-about").removeClass("bg-main-dark");
  $(".btn-about").addClass("bg-main-purple");

  setTimeout(() => {
    $(".icon-saham-main").remove();
  }, 500);

  $(".obligasi-image").append(
    `<img src="./assets/icon/ObligasiSVG.svg#${new Date().getTime()}" alt="" class="icon-obligasi-main" />`
  );
});

$(".button-previous-2").click(function () {
  gsap.to(["#main-title", "#main-text"], {
    x: 0,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-dark");
  $(".btn-sound").addClass("bg-main-blue");

  $(".btn-about").removeClass("bg-main-dark");
  $(".btn-about").addClass("bg-main-blue");

  setTimeout(() => {
    $(".icon-saham-main").remove();
  }, 500);
});

// From Page 3 Obligasi
$(".button-previous-3").click(function () {
  gsap.to(".saham-trans", {
    x: 0,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-purple");
  $(".btn-sound").addClass("bg-main-dark");

  $(".btn-about").removeClass("bg-main-purple");
  $(".btn-about").addClass("bg-main-dark");

  $(".saham-image").append(
    `<img src="./assets/icon/SahamSVG.svg#${new Date().getTime()}" alt="" class="icon-saham-main" />`
  );
  setTimeout(() => {
    $(".icon-obligasi-main").remove();
  }, 500);
});

$(".button-next-3").click(function () {
  gsap.to(".obligasi-trans", {
    x: 100,
    duration: 1,
  });

  gsap.from(".sukuk-trans", {
    x: -100,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-purple");
  $(".btn-sound").addClass("bg-main-red");

  $(".btn-about").removeClass("bg-main-purple");
  $(".btn-about").addClass("bg-main-red");

  setTimeout(() => {
    $(".icon-obligasi-main").remove();
  }, 500);

  $(".sukuk-image").append(
    `<img src="./assets/icon/SukukSVG.svg#${new Date().getTime()}" alt="" class="icon-sukuk-main" />`
  );
});

// From Page 4 Sukuk
$(".button-previous-4").click(function () {
  gsap.to(".obligasi-trans", {
    x: 0,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-red");
  $(".btn-sound").addClass("bg-main-purple");

  $(".btn-about").removeClass("bg-main-red");
  $(".btn-about").addClass("bg-main-purple");

  $(".obligasi-image").append(
    `<img src="./assets/icon/ObligasiSVG.svg#${new Date().getTime()}" alt="" class="icon-obligasi-main" />`
  );
  setTimeout(() => {
    $(".icon-sukuk-main").remove();
  }, 500);
});

$(".button-next-4").click(function () {
  gsap.to(".sukuk-trans", {
    x: 100,
    duration: 1,
  });

  gsap.from(".reksadana-trans", {
    x: -100,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-red");
  $(".btn-sound").addClass("bg-main-green");

  $(".btn-about").removeClass("bg-main-red");
  $(".btn-about").addClass("bg-main-green");

  setTimeout(() => {
    $(".icon-sukuk-main").remove();
  }, 500);

  $(".reksadana-image").append(
    `<img src="./assets/icon/ReksadanaSVG.svg#${new Date().getTime()}" alt="" class="icon-reksadana-main" />`
  );
});

// From Page 5 Reksadana
$(".button-previous-5").click(function () {
  gsap.to(".sukuk-trans", {
    x: 0,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-green");
  $(".btn-sound").addClass("bg-main-red");

  $(".btn-about").removeClass("bg-main-green");
  $(".btn-about").addClass("bg-main-red");

  $(".sukuk-image").append(
    `<img src="./assets/icon/SukukSVG.svg#${new Date().getTime()}" alt="" class="icon-sukuk-main" />`
  );
  setTimeout(() => {
    $(".icon-reksadana-main").remove();
  }, 500);
});

$(".button-next-5").click(function () {
  gsap.to(".reksadana-trans", {
    x: 100,
    duration: 1,
  });

  gsap.from(".ETF-trans", {
    x: -100,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-green");
  $(".btn-sound").addClass("bg-main-yellow");

  $(".btn-about").removeClass("bg-main-green");
  $(".btn-about").addClass("bg-main-yellow");

  setTimeout(() => {
    $(".icon-reksadana-main").remove();
  }, 500);

  $(".ETF-image").append(
    `<img src="./assets/icon/ETFSVG.svg#${new Date().getTime()}" alt="" class="icon-ETF-main" />`
  );
});

// From Page 6 ETF
$(".button-previous-6").click(function () {
  gsap.to(".reksadana-trans", {
    x: 0,
    duration: 1,
  });

  $(".btn-sound").removeClass("bg-main-yellow");
  $(".btn-sound").addClass("bg-main-green");

  $(".btn-about").removeClass("bg-main-yellow");
  $(".btn-about").addClass("bg-main-green");

  $(".reksadana-image").append(
    `<img src="./assets/icon/ReksadanaSVG.svg#${new Date().getTime()}" alt="" class="icon-reksadana-main" />`
  );
  setTimeout(() => {
    $(".icon-ETF-main").remove();
  }, 500);
});

function createDotted(dotted) {
  dotted = new FinisherHeader({
    count: 100,
    size: {
      min: 2,
      max: 14,
      pulse: 0,
    },
    speed: {
      x: {
        min: 0,
        max: 0.4,
      },
      y: {
        min: 0,
        max: 0.6,
      },
    },
    colors: {
      background: "#ffffff",
      particles: ["#3598db"],
    },
    blending: "screen",
    opacity: {
      center: 0.55,
      edge: 0.55,
    },
    skew: 0,
    shapes: ["c"],
  });
  return dotted;
}