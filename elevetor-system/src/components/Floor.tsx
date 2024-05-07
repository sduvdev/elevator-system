import React from 'react';
import styled from 'styled-components';

type FloorProps = {
    floorNumber: number;
    floorHeight: number;
    onCallElevator: (floorNumber: number) => void;
};

const FloorWrapper = styled.div<{ floorHeight: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: ${({ floorHeight }) => floorHeight}px;
    background-color: silver;
    background-image: linear-gradient(335deg, #b00 23px, transparent 23px),
                      linear-gradient(155deg, #d00 23px, transparent 23px),
                      linear-gradient(335deg, #b00 23px, transparent 23px),
                      linear-gradient(155deg, #d00 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0 2px, 4px 35px, 29px 31px, 34px 6px;
    border-top: 3.5px solid #000;
    padding: 10px;
`;

const CallButton = styled.button`
    width: 70px;
    height: 60px;
    border-radius: 30%;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    color: hsl(210, 100%, 40%);
    text-shadow: hsla(210,100%,20%,.3) 0 -1px 0,
                 hsl(210,100%,85%) 0 2px 1px,
                 hsla(200,100%,80%,1) 0 0 5px,
                 hsla(210,100%,50%,.6) 0 0 20px;
    box-shadow: inset hsla(210,100%,30%, 1) 0 0 0 4px, /* border */
                inset hsla(210,100%,15%, .4) 0 -1px 5px 4px, /* soft SD */
                inset hsla(210,100%,20%,.25) 0 -1px 0 7px, /* bottom SD */
                inset hsla(210,100%,100%,.7) 0 2px 1px 7px, /* top HL */
                      hsla(210,100%,75%, .8) 0 0 3px 2px, /* outer SD */
                      hsla(210,50%,40%, .0) 0 -5px 6px 4px, /* outer SD */
                      hsla(210,80%,95%, 0) 0 5px 6px 4px; /* outer HL */
`;

const Floor: React.FC<FloorProps> = ({ floorNumber, floorHeight, onCallElevator }) => {
    return (
        <FloorWrapper floorHeight={floorHeight}>
            <CallButton onClick={() => onCallElevator(floorNumber)}>
                {floorNumber}
            </CallButton>
        </FloorWrapper>
    );
};

export default Floor;