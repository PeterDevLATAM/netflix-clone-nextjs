import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./navbar.module.css";

export default function NavBar(props) {
  const { username } = props;
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image src={"/static/netflix.svg"} alt="Netflix Logo" width={"128px"}  height={"34px"}/>
            </div>
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p className={styles.username}>{username}</p>
              <Image src={"/static/expand_more.svg"} alt="expand more icon" width={"24px"}  height={"24px"} />
            </button>
          </div>
          {showDropdown && (
            <div className={styles.navDropdown}>
              <div>
                <Link href="/login">
                  <a className={styles.linkName}>Sign Out</a>
                </Link>
                <div className={styles.lineWrapper}> </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
