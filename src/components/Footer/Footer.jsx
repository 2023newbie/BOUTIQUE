import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <header>CUSTOMER SERVICES</header>
        <li>
          <Link>Help & Contact Us</Link>
        </li>
        <li>
          <Link>Returns & Refunds</Link>
        </li>
        <li>
          <Link>Online Stores</Link>
        </li>
        <li>
          <Link>Terms & Conditions</Link>
        </li>
      </ul>
      <ul>
        <header>COMPANY</header>
        <li>
          <Link>What We Do</Link>
        </li>
        <li>
          <Link>Available Services</Link>
        </li>
        <li>
          <Link>Latest Posts</Link>
        </li>
        <li>
          <Link>FAQs</Link>
        </li>
      </ul>
      <ul>
        <header>SOCIAL MEDIA</header>
        <li>
          <Link>
            <i class="fa-brands fa-twitter"></i>&nbsp;Twitter
          </Link>
        </li>
        <li>
          <Link>
            <i class="fa-brands fa-square-instagram"></i>&nbsp;Instagram
          </Link>
        </li>
        <li>
          <Link>
            <i class="fa-brands fa-facebook"></i>&nbsp;Facebook
          </Link>
        </li>
        <li>
          <Link>
            <i class="fa-brands fa-pinterest"></i>&nbsp;Pinterest
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
