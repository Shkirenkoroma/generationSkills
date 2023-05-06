import { FC, useState } from 'react'
import * as S from './App.styles.jsx'
import topLine from './img/topborder.png'
import bottomLine from './img/bottomborder.png'
import cicle from './img/blackbowl.png'
import shortline from './img/linepop.png'
import center from './img/cycle.png'
import arrow from './img/arrow.png'
import opacitycycle from './img/fillopacity.png'
import cancel from './img/cancel.png'

const App: FC = (): JSX.Element => {
  const [rotate, setRotate] = useState<number>(1)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const handleClick = (text: string): void => {
    text === 'firstLevel'
      ? setRotate(1)
      : text === 'secondLevel'
      ? setRotate(120)
      : setRotate(240)
  }

  const handleMenu = (): void => {
    if (activeMenu === true) {
      setActiveMenu(false)
    } else setActiveMenu(true)
  }

  return (
    <S.Container>
      <S.ContainerContent>
        <S.Top>
          <S.ImageTopLine
            src={topLine}
            alt="variable line above main section"
            width="1240px"
            height="250px"
          />
          <S.BurgerMenu onClick={handleMenu}>
            <S.Lines />
          </S.BurgerMenu>
        </S.Top>
        <S.Aside activeMenu={activeMenu}>
          <S.Cancel
            src={cancel}
            alt="place for cancel button"
            onClick={handleMenu}
          />
        </S.Aside>
        <S.MiddlePart>
          <S.Forwarding>
            <S.Title>
              Hey, let`s choose <br /> a gift booster
            </S.Title>
            <S.Describe>
              The booster can include both a small set of gifts <br /> and a
              large one, depending on the selected level <br /> of the generator
            </S.Describe>
            <S.Forward>
              <S.TextForward>GO</S.TextForward>
            </S.Forward>
          </S.Forwarding>
          <S.GenerationGroup>
            <S.BowlGroup>
              <S.BackBowl src={cicle} alt="place for blackBowl" />
              <S.ShortLine src={shortline} alt="place for shortLine frame" />
              <S.Center
                src={center}
                rotate={rotate}
                alt="place for center position"
              />
              <S.OpacityCycle
                src={opacitycycle}
                alt="place for opacity shame"
              />
              <S.Arrow
                src={arrow}
                rotate={rotate}
                alt="place for arrow of generation"
              />
            </S.BowlGroup>
            <S.LevelGroup>
              <S.LevelOne
                rotate={rotate}
                onClick={() => handleClick('firstLevel')}
              >
                <S.LevelText>Level 1</S.LevelText>
              </S.LevelOne>
              <S.LevelSecond
                rotate={rotate}
                onClick={() => handleClick('secondLevel')}
              >
                <S.LevelText>Level 2</S.LevelText>
              </S.LevelSecond>
              <S.LevelThird
                rotate={rotate}
                onClick={() => handleClick('thirdLevel')}
              >
                <S.LevelText>Level 3</S.LevelText>
              </S.LevelThird>
            </S.LevelGroup>
          </S.GenerationGroup>
        </S.MiddlePart>
        <S.ImageBottomLine
          src={bottomLine}
          alt="variable line under main section"
          width="1240px"
          height="250px"
        />
      </S.ContainerContent>
    </S.Container>
  )
}

export default App
