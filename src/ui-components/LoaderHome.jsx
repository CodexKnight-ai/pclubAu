import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="leap-frog">
        <div className="leap-frog__dot" />
        <div className="leap-frog__dot" />
        <div className="leap-frog__dot" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .leap-frog {
   --uib-size: 40px;
   --uib-speed: 2s;
   --uib-color: rgb(37, 37, 149);
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: var(--uib-size);
   height: var(--uib-size);
  }

  .leap-frog__dot {
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   width: 100%;
   height: 100%;
  }

  .leap-frog__dot::before {
   content: '';
   display: block;
   height: calc(var(--uib-size) * 0.22);
   width: calc(var(--uib-size) * 0.22);
   border-radius: 50%;
   background-color: var(--uib-color);
   will-change: transform;
  }

  .leap-frog__dot:nth-child(1) {
   animation: leapFrog var(--uib-speed) ease infinite;
  }

  .leap-frog__dot:nth-child(2) {
   transform: translateX(calc(var(--uib-size) * 0.4));
   animation: leapFrog var(--uib-speed) ease calc(var(--uib-speed) / -1.5)
      infinite;
  }

  .leap-frog__dot:nth-child(3) {
   transform: translateX(calc(var(--uib-size) * 0.8)) rotate(0deg);
   animation: leapFrog var(--uib-speed) ease calc(var(--uib-speed) / -3)
      infinite;
  }

  @keyframes leapFrog {
   0% {
    transform: translateX(0) rotate(0deg);
   }

   33.333% {
    transform: translateX(0) rotate(180deg);
   }

   66.666% {
    transform: translateX(calc(var(--uib-size) * -0.4)) rotate(180deg);
   }

   99.999% {
    transform: translateX(calc(var(--uib-size) * -0.8)) rotate(180deg);
   }

   100% {
    transform: translateX(0) rotate(0deg);
   }
  }`;

export default Loader;
