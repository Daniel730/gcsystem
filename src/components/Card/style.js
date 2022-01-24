import styled from "styled-components";

export const CardBody = styled.div`
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 400px;
    transition: all 0.3s ease-out;
    background-color: #09c6f9;
    :hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
    color: white;
    border-left: 3px solid white;
    border-bottom: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const CardText = styled.h2``;
