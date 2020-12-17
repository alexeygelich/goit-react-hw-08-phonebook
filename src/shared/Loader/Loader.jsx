import React from "react";
import PropTypes from "prop-types";
import styles from './Loader.module.css';

const Loader = (props) => (
  <div class={styles.ldsSpinner}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
