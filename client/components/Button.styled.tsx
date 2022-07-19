import styled from "styled-components";

export interface IButtonProps {
    variant?: "primary" | "secondary";
    size: "large";
}

export const Button = styled.button.attrs<Pick<IButtonProps, "size">>(
    (props) => {
        size: props?.size;
    }
)<IButtonProps>`
    background: ${(props) => 
        props?.variant === "primary" ? "#fb4959" : "#262632"};
    box-sizing: border-box;
    color: #F8F9FD;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    outline: 0 solid transparent;
    padding: ${(props) => (props?.size === "large" ? "10px 18px" : "8px 18px")};
    width: fit-content;
    word-break: break-word;
    border: 0;
    margin: 0.25em;

    animation-name: simple-animation;
    animation-duration: 0.4s;
    animation-iteration-count: initial;

    &:hover {
        background-color: #d8665e;
    }
    @keyframes simple-animation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    };
`;

export const FacebookButton = styled(Button)`
    background: #3a5a97;
    color: white;
`;