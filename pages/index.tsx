import classes from "../styles/style.module.css";

export default function Home() {
  return (
      <div className={classes.main}>
          <h1 className={classes.baka}>
              とうふ
          </h1>
          <ul>
              <li >
                  <h2 className={classes.manuke}>詳細：</h2>
                  <ul>

                      <li>
                          <h3>強さ</h3>
                          <p className={classes.boke}>名前:とうふ</p>
                          <p className={classes.boke}>年齢:NaN</p>
                          <p className={classes.boke}>趣味:猫</p>
                          <p className={classes.boke}>友達の量：6人</p>
                          <p className={classes.boke}>TOEIC:300点</p>
                          <p className={classes.boke}>最終学歴:自称全国2位の高等専門幼稚園</p>
                          <p className={classes.boke}>mail:tk27344@gmail.com</p>
                      </li>
                      <li>
                          <h3>あしあと</h3>
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

      </div>
  )
}
