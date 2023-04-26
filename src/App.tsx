import { FC, useState } from 'react';
import * as S from './App.styles.jsx';
import topLine from './img/topborder.png';
import bottomLine from './img/bottomborder.png';
import cicle from './img/blackbowl.png';
import shortline from './img/linepop.png';
import center from './img/cycle.png';
import arrow from './img/arrow.png';
import opacitycycle from './img/fillopacity.png';

const App: FC = (): JSX.Element => {
	const [rotate, setRotate] = useState<number>(1);
console.log('rotate', rotate)
	const handleClick = (text: string): void => {
		text === 'firstLevel'
			? setRotate(1)
			: text === 'secondLevel'
			? setRotate(120)
			: setRotate(240);
	};

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
					<S.BurgerMenu>
						<S.Lines />
					</S.BurgerMenu>
				</S.Top>
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
							<S.BackBowl src={cicle} alt="" />
							<S.ShortLine src={shortline} alt="" />
							<S.Center src={center} />
							<S.OpacityCycle src={opacitycycle} />
							<S.Arrow src={arrow} rotate={rotate} />
						</S.BowlGroup>
						<S.LevelGroup>
							<S.LevelOne   rotate={rotate} onClick={() => handleClick('firstLevel')}>
								<S.LevelText>Level 1</S.LevelText>
							</S.LevelOne>
							<S.LevelSecond rotate={rotate}  onClick={() => handleClick('secondLevel')}>
								<S.LevelText>Level 2</S.LevelText>
							</S.LevelSecond>
							<S.LevelThird rotate={rotate}  onClick={() => handleClick('thirdLevel')}>
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
	);
};

export default App;
