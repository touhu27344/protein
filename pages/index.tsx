import classes from "../styles/style.module.css";

export default function Home() {
  return (
      <div >
          <header className={classes.header}>
              <button  type="button" onClick={clickDisplayAlert} >
                  <strong>あじぇんだ～＾</strong>
              </button>
          </header>

          <nav className={classes.neko}>
              <ul >
                  <li><a href="#">Aho</a></li>
                  <li><a href="#">BAKA</a></li>
                  <li><a href="#">MANUKE</a></li>
                  <li><a href="#">NEKO</a></li>
              </ul>
          </nav>

          <body className={classes.body}>
              <h1 className={classes.baka}>
                  とうふ
              </h1>


              <ul>
                  <li  className={classes.manuke} >
                      <h2 >詳細：</h2>
                      <ul>

                          <li>
                              <h3><strong>強さ</strong></h3>
                              <p className={classes.boke}>名前:とうふ</p>
                              <p className={classes.boke}>年齢:NaN</p>
                              <p className={classes.boke}>趣味:猫</p>
                              <p className={classes.boke}>友達の量：6人</p>
                              <p className={classes.boke}>TOEIC:300点</p>
                              <p className={classes.boke}>最終学歴:自称全国2位の高等専門幼稚園</p>
                              <p className={classes.boke}>mail:tk27344@gmail.com</p>
                          </li>
                          <li>
                              <h3><strong>あしあと</strong></h3>
                              <p className={classes.boke}>wicon 脱退</p>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <h2>URL:</h2>
                      <ul>
                          <li className={classes.aho}>
                              <h3>Twitter:</h3>
                              <a href="https://twitter.com/aroevera27344">twitter.com/aroevera27344</a>
                          </li>
                          <li className={classes.aho}>
                              <h3>Instagram:</h3>
                              <a href="https://www.instagram.com/toohu27344">www.instagram.com/toohu27344</a>
                          </li>
                          <li className={classes.aho}>
                              <h3>github:</h3>
                              <a href="https://github.com/touhu27344">github.com/touhu27344</a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </body>
        </div>
  )
}
function clickDisplayAlert(){
    alert("カラビナが一番！");
}

