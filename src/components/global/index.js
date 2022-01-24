import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgb(50 50 50 / 22%);
    margin: 10px;
    height: 90%;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.5);
`;
