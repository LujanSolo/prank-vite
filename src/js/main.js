// import './style.css'

document.querySelector('#app').innerHTML = `
<!--* NAVBAR -->
<nav class="container navbar navbar-dark fixed-top d-flex justify-content-end p-3">
  <div class="row d-flex align-items-center">
    <div class="col dropdown share-dropdown">
      <a class="btndropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img class='share-icon' src='./assets/icons/share-icon.png' alt="social sharing" />
      </a>
      <ul class="dropdown-menu dropdown-menu-dark">
        <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftheprank-movie.com%2F" target="_blank"
            rel="noopener">
            <img class="social-share-icons" src="./assets/icons/fb.svg" alt="facebook" />
          </a></li>
        <li><a
            href="https://twitter.com/intent/tweet?text=%23ThePrankMovie%2C%20The%20Prank%20Movie%20-%20Only%20in%20Theaters%20March%2015.&url=https%3A%2F%2Ftheprank-movie.com%2F"
            target="_blank" rel="noopener">
            <img class="social-share-icons" src="./assets/icons/tw.svg" alt="twitter" />
          </a></li>
      </ul>
    </div>

    <button class="col navbar-toggler main-toggle" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end navbar-offcanvas" tabindex="-1" id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel">

      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>

      <div class="offcanvas-body nav-container d-flex flex-column flex-grow-1 min-vh-100 mt-5">
        <ul class="navbar-nav text-center p-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#home">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#trailer">TRAILER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#streaming">STREAMING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#synopsis">SYNOPSIS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#info">MORE INFORMATION</a>
          </li>
          <li class="socials">
            <div class="hashtag pt-3">
              <a>#ThePrankMovie</a>
            </div>
            <div id="social" class="icons-container">
              <ul class="offcanvas-icons d-flex justify-content-evenly w-100 p-0 pt-3">
                <li class="facebook">
                  <a href="https://www.facebook.com/prankmovie" target="_blank" rel="noopener">
                    <button class="border">
                      <i class="fa fa-facebook"></i>
                    </button>
                  </a>
                </li>
                <li class="twitter">
                  <a class="tw-icon" href="https://twitter.com/theprank_movie" target="_blank" rel="noopener">
                    <button class="border"><i class="fa-brands fa-x-twitter"></i></button>
                  </a>

                </li>
                <li class="instagram">
                  <a class="ig-icon" href="https://www.instagram.com/theprankmovie/" target="_blank" rel="noopener">
                    <button class="border"><i class="fa fa-instagram"></i></button>
                  </a>
                </li>
              </ul>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<!--* MAIN -->
<main class="d-flex flex-column">
  <!--* HOME -->
  <!-- background container-->
  <div class="container">
    <div class="row">
      <div class="col-12 home-bg-box">
        <div class="page-bg">
          <!--*  poster bg via css -->
        </div>
      </div>
    </div>
  </div>
  <!-- titles and quote -->
  <section id="home" class="container titles-section flex-grow-1 min-vh-100">
    <div class="row top-row">
      <img class="col titles-headliners img-fluid" src="./assets/images/names.png"
        alt="Headline Actors: Connor Kalopsis, Ramona Young, and Rita Moreno" />
    </div>
    <div class="row middle-row justify-content-center">
      <h2 class="col titles-quote">
        "A performance of must-see deviousness and passive-aggressive glee by Rita Moreno."
        <span class="row justify-content-end">
          -Owen Gleiberman, Variety
        </span>
      </h2>
    </div>
    <div class="bottom-rows">
      <div class="row my-3 justify-content-center">
        <img class="col titles-small-title img-fluid" src="./assets/images/tt-sm.png"
          alt="The Prank - Some kids... they take it too far." />
      </div>
      <div class="row my-3 justify-content-center">
        <img class="col titles-main-title img-fluid" src="./assets/images/tt.png"
          alt="The Prank - Some kids... they take it too far." />
      </div>
      <div class="row my-3 justify-content-center quick-buttons">
        <a class="col-auto rainbow-button" href="/#trailer">TRAILER</a>
        <a class="col-auto rainbow-button" href="/#streaming">STREAM</a>
      </div>
      <div class="iconic-logo row justify-content-end">
        <img class="col img-fluid" src="./assets/images/iconic-logo.png" alt="Iconic Releasing logo" />
      </div>
    </div>

  </section>

  <!--* TRAILER -->
  <section id="trailer" class="trailer-section flex-grow-1 min-vh-100">
    <div class="container-fluid trailer-container">
      <div class="row justify-content-center align-items-center trailer-row">
        <div class="col-12 col-lg-10">
          <h2 class="trailer-h2 text-center">WATCH THE TRAILER</h2>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OrFl-CNHsu4?si=3KvGqE9uPzMrudYQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--* STREAMING -->
  <section id="streaming" class="streaming-section flex-grow-1 min-vh-100">
    <div class="row">
      <h2 class="streaming-h2 col">STREAMING NOW ON</h2>
    </div>
    <div class="row text-center">
      <div class="col streaming-icons-box">
        <a class="btn streaming-btn" type="button"
          href="https://www.amazon.com/Prank-Connor-Kalopsis/dp/B0CVKHH8XN?dib=eyJ2IjoiMSJ9.POqrHYHIX5_YSn1ouyrKtavbxAyKYP3YwxCTBhxiDhxZvM7UPtywp5iRHzxRtjKuiT4Z6XwVhfotemTlE7NBzihdTleIaxKY8OCmEuk7rkHTqvIMOz79TbP-r66Al1CR2tTrt8RiqPZmpcLdCQCEdlKF_DVB3J5q2OToV0g36rIaMUK4XDhV7Zyx8iY6BIgZs9uYyR08Pw8rdFrfZHMEOb2sr8FKsMmOV2FbXg9aZCE._qIhhPUs-5-3EEvb0-0YdDic5tuAT6BdKAO0yNgK0bw&dib_tag=se&s=instant-video"
          target="_blank" rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/prime-mini.png" alt="Prime Video" />
        </a>
        <a class="btn streaming-btn" type="button"
          href="https://tv.apple.com/us/movie/the-prank/umc.cmc.j7zkk1m7mwxnd80zyn65q22i?action=play" target="_blank"
          rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/appletv-mini.png" alt="AppleTV" />
        </a>
        <a class="btn streaming-btn" type="button" href="https://www.youtube.com/watch?v=zlLT_Xml00E" target="_blank"
          rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/youtube-mini.png" alt="youTube" />
        </a>
        <a class="btn streaming-btn" type="button"
          href="https://play.google.com/store/movies/details?id=avYzI9NigaE.P" target="_blank" rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/googleplay-mini.png" alt="Google Play" />
        </a>
        <a class="btn streaming-btn" type="button"
          href="https://www.microsoft.com/en-us/p/the-prank/8d6kgwxws6dq?activetab=pivot:overviewtab" target="_blank"
          rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/ms-mini.png" alt="Microsoft Store" />
        </a>
        <a class="btn streaming-btn" type="button"
          href="https://www.vudu.com/content/browse/details/The-Prank/3194611?cmp=OrganicSearch~Vudu~GoogleWatch"
          target="_blank" rel="noopener">
          <img class="streaming-icon" src="./assets/stream-btns/vudu-mini.png" alt="Vudu" />
        </a>
      </div>
    </div>
    <div class="row stream-bg">
      <img class="col img-fluid" src="./assets/images/prank-streaming-kalopsis.jpg">
    </div>

  </section>

  <!--* SYNOPSIS -->
  <section id="synopsis" class="synopsis-section flex-grow-1 min-vh-100">

    <div class="row text-center synopsis-headline mb-3">
      <h2 class="synopsis-h2 col">SYNOPSIS</h2>
    </div>

    <div class="row synopsis-poster">
      <img class="col img-fluid" src="./assets/images/synopsis-poster.jpg" alt="The Prank - movie poster" />
    </div>

    <div class="container synopsis-text-box">
      <div class="row">
        <p class="col">
          In their seemingly ordinary senior year at West Greenview High, the unexpected unfolds when overachiever
          Ben
          and his carefree bestie Tanner decide to exact revenge on their strict physics teacher, Mrs. Wheeler, by
          trying to ruin her life by framing her for the murder of a missing student on social media.
        </p>
      </div>

      <p class="row">
        <span class="col">Director</span>
        <span class="col text-end">
          <a class="synopsis-anchor"
            href="https://www.imdb.com/name/nm2043336/?ref_=nv_sr_srsg_0_tt_0_nm_1_q_Maureen%2520Bharoocha"
            target="_blank" rel="noopener">Maureen Bharoocha</a>
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Producer</span>
        <span class="col text-end">
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm0938145/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Steven J.
            Wolfe</a>
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Executive Producers</span>
        <span class="col text-end">
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm4981220/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Michael Y.
            Chow</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm0726572/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Glenn
            Rigberg</a>
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Writers</span>
        <span class="col text-end">
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm2033646/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Rebecca
            Flinn-White</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm1907229/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Zak
            White</a>
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Starring</span>
        <span class="col text-end">
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm0001549/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Rita
            Moreno</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm5318469/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Connor
            Kalopsis</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm5021372/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Ramona
            Young</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm0202966/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Keith
            David</a>,
          <a class="synopsis-anchor"
            href="https://www.imdb.com/name/nm0281212/?ref_=nv_sr_srsg_0_tt_1_nm_7_q_Kate%2520Flannery"
            target="_blank" rel="noopener">Kate Flannery</a>,
          <a class="synopsis-anchor"
            href="https://www.imdb.com/name/nm0001694/?ref_=nv_sr_srsg_0_tt_0_nm_1_q_Meredith%2520Salenger"
            target="_blank" rel="noopener">Meredith Salenger</a>,
          <a class="synopsis-anchor"
            href="https://www.imdb.com/name/nm0453996/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Jonathan%2520Kimmel"
            target="_blank" rel="noopener">Jonathan Kimmel</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm6400600/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Nathan
            Janak</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm4242016/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Talia
            Jackson</a>,
          <a class="synopsis-anchor"
            href="https://www.imdb.com/name/nm5083959/?ref_=nv_sr_srsg_0_tt_0_nm_8_q_Romel%2520DE%2520SILVA"
            target="_blank" rel="noopener">Romel De Silva</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm4161838/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Betsy
            Sodaro</a>,
          <a class="synopsis-anchor" href="https://www.imdb.com/name/nm2613100/?ref_=fn_al_nm_1" target="_blank"
            rel="noopener">Ahmed
            Bharoocha</a>
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Genres:</span>
        <span class="col text-end">
          Dark Comedy, Thriller
        </span>
        <span class="clearfix"></span>
      </p>
      <p class="row">
        <span class="col">Runtime:</span>
        <span class="col text-end">
          95 minutes
        </span>
      </p>
      <p class="row">
        <span class="col">Rating:</span>
        <span class="col text-end">
          <img class="img-fluid synopsis-rating-bug" src="./assets/icons/rating.png" alt="Rated R for some language.">
        </span>
      </p>
    </div>
  </section>

  <!--* INFO -->
  <section id="info" class="info-section text-center flex-grow-1 min-vh-100">
    <h3 class="row">
      <img class="col img-fluid mx-auto" src="./assets/images/tt-sm.png" alt="The Prank - main titling" />
    </h3>
    <div class="row p-5 m-5">
      <h2 class="col info-h2">
        FOR MORE INFORMATION, EMAIL US AT <a class="col info-link"
          href="mailto:theprankmovie@gmail.com?subject=The%20Prank%20-%20More%20Info">theprankmovie@gmail.com</a>
      </h2>
    </div>
    <div class="row my-3 justify-content-center quick-buttons">
      <a class="col-auto rainbow-button info-home-btn" href="/#home">top</a>
    </div>
  </section>
</main>

<!--* FOOTER -->
<footer>
  <div class="footer-rating-div">
    <img class="rating-bug image-fluid" src="./assets/icons/rating.png" alt="Rated R for some language." />
  </div>
  <div class="main-footer">
    <div class="footer-links">
      <a href="https://dx35vtwkllhj9.cloudfront.net/iconicreleasing/images/PrivacyPolicy_ICONIC_EVENTS_RELEASING_LLC.pdf"
        target="_blank" rel="noopener">Privacy Policy</a>
      <button class="btn credits-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom">CREDITS<span class="credits-btn-icon"></span></button>

    </div>
    <p class="copyright">© 2024 Iconic Releasing. ALL RIGHTS RESERVED.</p>
  </div>
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small credits-container">
      <div class="bugs">
        <img class="billing-block" src="./assets/icons/billing-block.png" alt="billing block" />
      </div>
      <div class="footer-links">
        <a href="https://dx35vtwkllhj9.cloudfront.net/iconicreleasing/images/PrivacyPolicy_ICONIC_EVENTS_RELEASING_LLC.pdf"
          target="_blank" rel="noopener">Privacy Policy</a>
      </div>
      <p class="copyright">© 2024 Iconic Releasing. ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</footer>
`

setupCounter(document.querySelector('#counter'))
