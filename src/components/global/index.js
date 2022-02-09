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
    position: relative;
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

export const Title = styled.h2``;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const ButtonDefault = styled.button`
    width: 100%;
    background-color: #09c6f9;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 0.1px solid white;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #045de9;
    }
`;

export const ButtonIcon = styled.button`
    margin: auto 10px;
`;
