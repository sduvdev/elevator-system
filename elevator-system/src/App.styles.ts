import {css} from '@emotion/react';

export const floorStyles = css`
    background-color: silver;
    background-image: linear-gradient(335deg, #b00 23px, transparent 23px),
    linear-gradient(155deg, #d00 23px, transparent 23px),
    linear-gradient(335deg, #b00 23px, transparent 23px),
    linear-gradient(155deg, #d00 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
`;

export const metalStyles = css`
    position: relative;
    margin: 5px auto;
    outline: none;
    font: bold 4em "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
    text-align: center;
    color: hsla(0, 0%, 20%, 1);
    text-shadow: hsla(0, 0%, 40%, 0.5) 0 -1px 0, hsla(0, 0%, 100%, 0.6) 0 2px 1px;
    background-color: hsl(0, 0%, 90%);
    box-shadow: inset hsla(0, 0%, 15%, 1) 0 0px 0px 4px,
    inset hsla(0, 0%, 15%, 0.8) 0 -1px 5px 4px,
    inset hsla(0, 0%, 0%, 0.25) 0 -1px 0px 7px,
    inset hsla(0, 0%, 100%, 0.7) 0 2px 1px 7px, hsla(0, 0%, 0%, 0) 0 -5px 6px 4px,
    hsla(0, 0%, 100%, 0) 0 5px 6px 4px;
    transition: color 0.2s;
`;

export const radialStyles = css`
    ${metalStyles};
    width: 160px;
    height: 160px;
    line-height: 160px;
    border-radius: 80px;
    background-image: -webkit-radial-gradient(
            50% 0%,
            8% 50%,
            hsla(0, 0%, 100%, 0.5) 0%,
            hsla(0, 0%, 100%, 0) 100%
    ),
    -webkit-radial-gradient(50% 100%, 12% 50%, hsla(0, 0%, 100%, 0.6) 0%, hsla(0, 0%, 100%, 0) 100%),
    -webkit-radial-gradient(0% 50%, 50% 7%, hsla(0, 0%, 100%, 0.5) 0%, hsla(0, 0%, 100%, 0) 100%),
    -webkit-radial-gradient(100% 50%, 50% 5%, hsla(0, 0%, 100%, 0.5) 0%, hsla(0, 0%, 100%, 0) 100%),
    -webkit-repeating-radial-gradient(
            50% 50%,
            100% 100%,
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0) 3%,
            hsla(0, 0%, 0%, 0.1) 3.5%
    ),
    -webkit-repeating-radial-gradient(
            50% 50%,
            100% 100%,
            hsla(0, 0%, 100%, 0) 0%,
            hsla(0, 0%, 100%, 0) 6%,
            hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-radial-gradient(
            50% 50%,
            100% 100%,
            hsla(0, 0%, 100%, 0) 0%,
            hsla(0, 0%, 100%, 0) 1.2%,
            hsla(0, 0%, 100%, 0.2) 2.2%
    ),
    -webkit-radial-gradient(
            50% 50%,
            200% 50%,
            hsla(0, 0%, 90%, 1) 5%,
            hsla(0, 0%, 85%, 1) 30%,
            hsla(0, 0%, 60%, 1) 100%
    );

    &:before,
    &:after {
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background-image: -webkit-radial-gradient(
                50% 0%,
                10% 50%,
                hsla(0, 0%, 0%, 0.1) 0%,
                hsla(0, 0%, 0%, 0) 100%
        ),
        -webkit-radial-gradient(50% 100%, 10% 50%, hsla(0, 0%, 0%, 0.1) 0%, hsla(0, 0%, 0%, 0) 100%),
        -webkit-radial-gradient(0% 50%, 50% 10%, hsla(0, 0%, 0%, 0.1) 0%, hsla(0, 0%, 0%, 0) 100%),
        -webkit-radial-gradient(100% 50%, 50% 06%, hsla(0, 0%, 0%, 0.1) 0%, hsla(0, 0%, 0%, 0) 100%);
    }

    &:before {
        transform: rotate(65deg);
    }

    &:after {
        transform: rotate(-65deg);
    }
`;

export const linearStyles = css`
    ${metalStyles};
    width: 100px;
    font-size: 4em;
    height: 80px;
    border-radius: 0.5em;
    background-image: -webkit-repeating-linear-gradient(
            left,
            hsla(0, 0%, 100%, 0) 0%,
            hsla(0, 0%, 100%, 0) 6%,
            hsla(0, 0%, 100%, 0.1) 7.5%
    ),
    -webkit-repeating-linear-gradient(
            left,
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0) 4%,
            hsla(0, 0%, 0%, 0.03) 4.5%
    ),
    -webkit-repeating-linear-gradient(
            left,
            hsla(0, 0%, 100%, 0) 0%,
            hsla(0, 0%, 100%, 0) 1.2%,
            hsla(0, 0%, 100%, 0.15) 2.2%
    ),
    linear-gradient(
            180deg,
            hsl(0, 0%, 78%) 0%,
            hsl(0, 0%, 90%) 47%,
            hsl(0, 0%, 78%) 53%,
            hsl(0, 0%, 70%) 100%
    );
`;

export const ovalStyles = css`
    ${linearStyles};
    margin-top: 100px;
    width: 70px;
    height: 60px;
    line-height: 60px !important;
    border-radius: 50%;
    font: italic bold 3em/50px Georgia, "Times New Roman", Times, serif;
`;

export const activeStyles = css`
    color: hsl(210, 100%, 40%);
    text-shadow: hsla(210, 100%, 20%, 0.3) 0 -1px 0, hsl(210, 100%, 85%) 0 2px 1px,
    hsla(200, 100%, 80%, 1) 0 0 5px, hsla(210, 100%, 50%, 0.6) 0 0 20px;
    box-shadow: inset hsla(210, 100%, 30%, 1) 0 0px 0px 4px,
    inset hsla(210, 100%, 15%, 0.4) 0 -1px 5px 4px, inset hsla(210, 100%, 20%, 0.25) 0 -1px 0px 7px,
    inset hsla(210, 100%, 100%, 0.7) 0 2px 1px 7px, hsla(210, 100%, 75%, 0.8) 0 0px 3px 2px,
    hsla(210, 50%, 40%, 0) 0 -5px 6px 4px, hsla(210, 80%, 95%, 0) 0 5px 6px 4px;
`;