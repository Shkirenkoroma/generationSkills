import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 1440px;
	min-height: 900px;
	background-color: #252424;
	margin: 0 auto;
`;

export const ContainerContent = styled.div`
	width: 100%;
	max-width: 1240px;
	min-height: 800px;
	margin: 0 auto;
	background-color: #6e3232;
`;

export const Top = styled.header`
	position: relative;
	background-size: 100px 100px;
	max-width: 1440px;
	width: 100%;
	height: 250px;
	margin: 0 auto;
`;

export const MiddlePart = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 1240px;
	width: 100%;
	min-height: 371px;
	background-color: #922424;
	margin: 0 auto;
`;

export const BurgerMenu = styled.div`
	position: relative;
	min-height: 25px;
	left: 100px;
	top: 50px;
	&:hover {
		cursor: pointer;
	}
`;

export const Lines = styled.span`
	display: inline-block;
	max-width: 33px;
	width: 100%;
	min-height: 3px;
	background-color: #ffffff;
	::before {
		content: '';
		position: absolute;
		top: 6px;
		left: 0;
		height: 3px;
		max-width: 33px;
		width: 100%;
		background-color: #ffffff;
	}
	::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		max-width: 33px;
		width: 100%;
		background-color: #ffffff;
	}
`;

export const ImageTopLine = styled.img`
	position: absolute;
`;

export const ImageBottomLine = styled.img``;

export const Forward = styled.button`
	width: 300px;
	height: 60px;
	border: none;
	background: linear-gradient(93.71deg, #7a0bc0 13.27%, #fa58b6 101.64%);
	border-radius: 30px;
	&:hover {
		cursor: pointer;
		background: linear-gradient(11.71deg, #7a0bc0 13.27%, #fa58b6 101.64%);
		background-position: 0;
		transition: all 700ms;
	}
`;

export const TextForward = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
`;

export const Title = styled.h1`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 59px;
	color: #ffe9f6;
`;

export const Describe = styled.p`
	max-width: 550px;
	width: 100%;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #ffe9f6;
`;

export const LevelOne = styled.button`
	width: 136px;
	height: 38px;
	background: transparent;
	border: 1px solid #ffffff;
	border-radius: 20px;
	margin-bottom: 50px;

	&:hover {
		background-color: #7a0bc0;
		cursor: pointer;
		transition: all 700ms;
	}
`;

export const LevelSecond = styled.button`
	width: 136px;
	height: 38px;
	background: transparent;
	border: 1px solid #ffffff;
	border-radius: 20px;
	margin-bottom: 50px;

	&:hover {
		background-color: #0b8ac0;
		cursor: pointer;
		transition: all 700ms;
	}
`;

export const LevelThird = styled.button`
	width: 136px;
	height: 38px;
	background: transparent;
	border: 1px solid #ffffff;
	border-radius: 20px;

	&:hover {
		background-color: #e105e5;
		cursor: pointer;
		transition: all 700ms;
	}
`;

export const LevelText = styled.span`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
`;

export const LevelGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Forwarding = styled.div``;

export const GenerationGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 564px;
	width: 100%;
	min-height: 371px;
`;
export const BowlGroup = styled.div`
	position: relative;
`;

export const BackBowl = styled.img``;
export const ShortLine = styled.img`
	position: absolute;
	top: 60px;
	right: 57px;
`;

export const Center = styled.img`
	position: absolute;
	top: 210px;
	right: 215px;
	z-index: 1;
`;
export const OpacityCycle = styled.img`
	position: absolute;
	top: 40px;
	right: 40px;
`;

export const Arrow = styled.img`
	position: absolute;
	top: 41px;
	right: 48px;
	transition: all 700ms;
	transform: rotate(${(props) => props.rotate}deg);
`;
