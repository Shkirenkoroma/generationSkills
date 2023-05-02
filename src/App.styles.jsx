import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1440px;
	min-height: 900px;
	margin: 0 auto;
	background-color: #252424;
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
	width: 100%;
	max-width: 1440px;
	height: 250px;
	margin: 0 auto;
	background-size: 100px 100px;
`;

export const MiddlePart = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	max-width: 1240px;
	min-height: 371px;
	margin: 0 auto;
	background-color: #922424;
`;

export const BurgerMenu = styled.div`
	position: relative;
	top: 50px;
	left: 100px;
	min-height: 25px;

	&:hover {
		cursor: pointer;
	}
`;

export const Lines = styled.span`
	display: inline-block;
	width: 100%;
	max-width: 33px;
	min-height: 3px;
	background-color: #ffffff;

	::before {
		content: '';
		position: absolute;
		top: 6px;
		left: 0;
		width: 100%;
		max-width: 33px;
		height: 3px;
		background-color: #ffffff;
	}

	::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 33px;
		height: 3px;
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
	border-radius: 30px;
	background: linear-gradient(93.71deg, #7a0bc0 13.27%, #fa58b6 101.64%);

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
	width: 100%;
	max-width: 550px;
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
	margin-bottom: 50px;
	border: 1px solid #ffffff;
	border-radius: 20px;
	background-color: ${(props) => (props.rotate === 1 ? '#7a0bc0' : 'transparent')};

	&:hover {
		cursor: pointer;
		background-color: #7a0bc0;
		transition: all 700ms;
	}
`;

export const LevelSecond = styled.button`
	width: 136px;
	height: 38px;
	margin-bottom: 50px;
	border: 1px solid #ffffff;
	border-radius: 20px;
	background-color: ${(props) => (props.rotate === 120 ? '#0b8ac0' : 'transparent')};

	&:hover {
		cursor: pointer;
		background-color: #0b8ac0;
		transition: all 700ms;
	}
`;

export const LevelThird = styled.button`
	width: 136px;
	height: 38px;
	border: 1px solid #ffffff;
	border-radius: 20px;
	background-color: ${(props) => (props.rotate === 240 ? '#e105e5' : 'transparent')};

	&:hover {
		cursor: pointer;
		background-color: #e105e5;
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
	justify-content: center;
	align-items: center;
`;

export const Forwarding = styled.div``;

export const GenerationGroup = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	max-width: 564px;
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

export const Center = styled.div`
  position: absolute;
  top:208px;
  right:214px;
  z-index:1;
  width: 40px;
	height: 40px;
  border-radius: 50%;
  background-color:${(props) => (props.rotate === 1 ? '#7a0bc0' : props.rotate === 120 ? '#0b8ac0' : '#e105e5')};
`;

export const OpacityCycle = styled.img`
	position: absolute;
	top: 40px;
	right: 40px;
`;

export const Arrow = styled.img`
	position: absolute;
	top: 40px;
	right: 49px;
  transform-origin:50%;
	transform: rotate(${(props) => props.rotate}deg);
	transition: all 700ms;
`;


export const Aside = styled.div`
position:absolute;
top:0;
width:100%;
max-width:320px;
height:100%;
min-height:400px;
background-color:black;
`
export const Cancel = styled.img`
position:absolute;
top:0;
left:0;

`