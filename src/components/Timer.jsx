import React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'

function Timer() {

    const [timer,setTimer]=useState("00:00:00")
  return (
    <div className={styles.box}>
        <div>
            <div>
                <div className={styles.title}>
                    {/* //title part */}
                    Timer
                </div>

                <div className={styles.timer}>
                    {/* //timer part */}
                    <div>
                        {timer}
                    </div>

                </div>
                <div className={styles.btn_div}>
                    {/* //button part */}

                    <button>Start</button>
                    <button>Stop</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timer
