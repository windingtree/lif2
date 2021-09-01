import { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

export interface FireWorksProps {
  duration?: number;
}

const BangFwAnimation = keyframes`
  to {
    box-shadow: 33px -171px #00ff04, -17px -189px #ff004d, 120px -146px #ff1500, -68px -90px #9100ff, -200px -27px #7700ff, -159px -140px #ff000d, -177px -59px #00aeff, 131px 41px #ff2200, -19px 35px #ff5100, -46px 6px #0400ff, -197px -169px #ff00f7, -127px -277px #ff2600, 171px -193px #cc00ff, 143px -219px #0011ff, 96px -265px #00ff2b, 20px 38px #2f00ff, -35px -375px #00ffdd, -232px -90px #6200ff, -231px -166px #ff0062, -34px -254px #ff0022, -55px -332px #00ff55, -234px -196px #d900ff, 142px -309px #ff00e1, 168px -271px #bf00ff, -114px -254px #00ff55, 114px -398px #ffea00, 91px -155px #ff0044, 63px -265px #ff0051, -241px -27px #0055ff, 72px -8px #ffea00, -95px -174px #f200ff, 195px -301px #11ff00, -201px 81px #9900ff, 247px -76px #ffaa00, 68px -206px #ff00a2, -73px -214px #00ffbf, -249px -396px #00c4ff, -124px -268px #00ff55, -213px -296px #ff0015, -166px -383px #00c4ff, -231px -306px #a2ff00, -86px -228px #ffcc00, -242px -339px #001aff, 64px -283px #0080ff, -212px 70px #5100ff, -90px -348px #1aff00, -198px -382px darkorange, -118px -96px #ffb700, -43px -10px #00a2ff, 54px 83px #2200ff, 76px -270px #ffae00;
  }
`;

const GravityFwAnimation = keyframes`
  to {
    transform: translateY(200px);
    opacity: 0;
  }
`;

const PositionFwAnimation = keyframes`
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
`;

const FireWorksWrapper = styled.div`
  position: relative;
  display: flex;

  .pyro > .before, .pyro > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
    animation: 1s ${BangFwAnimation} ease-out infinite backwards, 1s ${GravityFwAnimation} ease-in infinite backwards, 5s ${PositionFwAnimation} linear infinite backwards;
  }

  .pyro > .after {
    animation-delay: 1.25s, 1.25s, 1.25s;
    animation-duration: 1.25s, 1.25s, 6.25s;
  }
`;

export const FireWorks = ({ duration }: FireWorksProps) => {
  const [started, setStarted] = useState(true);

  const scheduleStop = useCallback(() => {
    if (duration && duration !== 0) {
      setTimeout(() => setStarted(false), duration);
    }
  }, [duration]);

  useEffect(() => scheduleStop(), [scheduleStop]);

  if (!started) {
    return null;
  }

  return (
    <FireWorksWrapper>
      <div className='pyro'>
          <div className='before'></div>
          <div className='after'></div>
      </div>
    </FireWorksWrapper>
  )
};
