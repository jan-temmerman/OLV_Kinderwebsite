import React, { useState, useEffect } from 'react';
import Body from '../components/body';
import { Label } from '../components/labels';
import { LabelConfig } from '../config';
import { shuffle, removeSpaces } from '../helpers';
import UIButton from '../components/UIButton';
import BackButton from '../components/BackButton';
import Title from '../components/Title';

export default function GameView() {
  const [selectedLabel, setLabel] = useState(null);
  const [selectedOrgan, setOrgan] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [labels, setLabels] = useState(null);
  const [matchedOrgans, setMatchedOrgans] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const organAmount = LabelConfig.organs.length;
  const gameTitleAudio = new Audio('/audio/lichaamsspel.wav');
  const audio = new Audio('/audio/lichaamsspel_uitl.wav');

  const setMatchedVisual = (label) => {
    const id = removeSpaces(label, '_');
    const organ = document.querySelector(`#organ__${id}`);
    const labelEl = document.querySelector(`#label__${id}`);

    organ.classList.add('matched');
    labelEl.classList.add('matched');
  };


  const removeSelectionFromLabel = () => {
    const currentSelected = document.querySelectorAll('.selected');
    if (currentSelected) {
      currentSelected.forEach((el) => { el.classList.remove('selected'); });
    }
  };

  const resetSelection = () => {
    removeSelectionFromLabel();
    setLabel(null);
    setOrgan(null);
  };

  const updateSelectedLabel = (label) => {
    removeSelectionFromLabel();
    const newSelected = document.querySelector(`#label__${removeSpaces(label, '_')}`);
    newSelected.classList.add('selected');
    setLabel(label);
  };

  const updateSelectedOrgan = (organ) => {
    removeSelectionFromLabel();
    const newSelected = document.querySelector(`#organ__${removeSpaces(organ, '_')}`);
    newSelected.classList.add('selected');
    setOrgan(organ);
  };

  /**
   * Hook that checks if there is a match between label and organ
   */
  useEffect(() => {
    if (selectedLabel && selectedOrgan) {
      setTotalClicks((prevTotal) => prevTotal + 1);
      if (selectedOrgan === selectedLabel) {
        const matchAudio = new Audio(`/audio/${removeSpaces(selectedLabel, '')}.wav`);
        matchAudio.play();
        setMatchedOrgans((prevCount) => prevCount + 1);
        setMatchedVisual(selectedLabel);
        resetSelection();
      } else {
        resetSelection();
      }
    }
  }, [selectedLabel, selectedOrgan]);

  /**
   * Hook that checks if the game has to be reset.
   */
  useEffect(() => {
    const { colors, organs } = LabelConfig;
    let colorCopy;
    if (!gameOver) {
      colorCopy = [...colors];
      const organArray = shuffle(organs);
      const newLabels = [[], []];
      organArray.forEach((organ, i) => {
        // Remove matched class from all organs.
        document.querySelector(`#organ__${removeSpaces(organ, '_')}`).classList.remove('matched');
        const colorIndex = Math.floor(Math.random() * colorCopy.length);
        const labelMargin = i < organs.length / 2 ? { marginLeft: `${(Math.random() * (60 - 40)) + 40}%` } : { marginLeft: `${(Math.random() * 40 - 20) + 20}%` };
        const newLabel = <Label key={organ} target={() => { updateSelectedLabel(organ); }} label={organ} labelStyle={{ ...labelMargin, background: `${colorCopy[colorIndex]} `, color: '#fefefe' }} />;
        if (i < organs.length / 2) {
          newLabels[0].push(newLabel);
        } else {
          newLabels[1].push(newLabel);
        }
        colorCopy.splice(colorIndex, 1);
      });
      setLabels(newLabels);
    } else {
      setLabels([[], []]);
    }
  }, [gameOver]);

  const gameOverModal = (
    <div className="body__gameOver">
      <div className="body__gameOver__content">
        <h1>Einde van het spel</h1>
        <p>Wil je nog eens spelen?</p>
        <div className="buttons">
          <UIButton action={() => { setMatchedOrgans(0); setGameOver(false); }} text="Ja" />
          <a href="/consultatie/spelletjes" className="UIButton">Nee</a>
        </div>
        <p>
          Jouw score:
          {' '}
          { ((LabelConfig.organs.length / totalClicks) * 100).toFixed(2) }
          %
        </p>
      </div>
    </div>
  );

  /**
   * Hook that checks if gameState has to be updated
   */
  useEffect(() => {
    if (matchedOrgans === organAmount) {
      setGameOver(true);
    }
  }, [matchedOrgans, organAmount]);

  if (gameOver && matchedOrgans === 0) {
    gameTitleAudio.play();
    gameTitleAudio.addEventListener('ended', () => {
      audio.play();
    });
    return (
      <div className="body__intro">
        <BackButton />
        <h1>Het Lichaamspel</h1>
        <p>Kan jij de verschillende lichaamsdelen aanduiden?</p>
        <UIButton
          action={() => {
            audio.pause();
            setGameOver(false);
          }}
          text="Start het spel"
        />
        <div className="body__instructions">
          <div>
            <span>1.</span>
            <img src="/games/lichaam/lichaamspel_svg2_1.svg" alt="Stap 1" />
          </div>
          <div>
            <span>2.</span>
            <img src="/games/lichaam/lichaamspel_svg1_1.svg" alt="Stap 1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {gameOver ? gameOverModal : ''}
      <Title />
      <div className="body__background">
        <div className="floor" />
        {/* <img src="/games/lichaam/kastje.svg" alt="kastje" className="body__background__kast" />
        <img src="/games/lichaam/bed.svg" alt="bed" className="body__background__bed" />
        <img src="/games/lichaam/deur.svg" alt="deur" className="body__background__deur" />
        <img src="/games/lichaam/klok.svg" alt="klok" className="body__background__klok" /> */}
      </div>
      <BackButton />
      <div className="body__game">
        <div className="body__labels --left">
          {labels ? labels[0] : ''}
        </div>
        <Body pickOrgan={updateSelectedOrgan} />
        <div className="body__labels --right">
          {labels ? labels[1] : ''}
        </div>
      </div>
    </>
  );
}
