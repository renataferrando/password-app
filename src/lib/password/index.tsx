"use client";

import React, { useState, useEffect } from "react";
import { hasNumber, hasSpecialCharacter, hasUpperCase, hasConsecutiveLetters } from "./helpers";
import styles from "./styles.module.css";

type propTypes = {
  number?: boolean;
  character?: boolean;
  uppercase?: boolean;
  noConsecutiveLetter?: boolean,
};

type DescriptionType = {
  [key: string]: string;
};

const propsDescription: DescriptionType = {
  number: "Has a number 0-9",
  character: "Has a special char !@#$%^&*",
  uppercase: "Has uppercase Letter",
  noConsecutiveLetter: "Has consecutive letters"
};


const Password = (props: propTypes) => {
  const { number, character, uppercase, noConsecutiveLetter, ...r } = props;

  const [checkPassword, setCheckPassword] = useState({
    number: false,
    character: false,
    uppercase: false,
    noConsecutiveLetter: true,
  });
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    setCheckPassword({
      number: hasNumber(inputValue),
      character: hasSpecialCharacter(inputValue),
      uppercase: hasUpperCase(inputValue),
      noConsecutiveLetter: !hasConsecutiveLetters(inputValue)
    });
  }, [inputValue]);


  return (
    <div className={styles.passwordWrapper}>
      <h2>Password component</h2>
      <div className={styles.password}>
        <input
          type='text'
          id='name'
          name='name'
          value={inputValue}
          onChange={handleOnChange}
        />
        <div className={styles.validation}>
          {Object.keys(props).map((item) => (
            <div className={styles.checkmarkWrapper} key={item} role="helper">
              <span
                className={
                  checkPassword[`${item}` as keyof propTypes]
                    ? styles.checkmarkTrue
                    : styles.checkmarkFalse
                }
              >
                {checkPassword[`${item}` as keyof propTypes] ? "✓" : "x"}
              </span>
              <span>{propsDescription[`${item}`]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Password;
