import React from 'react'
import styles from '../styles/HomeView.module.css'
import { stringLiteral } from '@babel/types'

export default function HomeView() {

    function scrollBottom() {
        window.scrollTo(0, 99999)
    }
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
    else if (window.attachEvent) window.attachEvent("onload", scrollBottom);

    return (
        <div className={styles.container}>
            <img className={styles.planet} alt="planet" src="planet.png"/>
        </div>
    )
}
