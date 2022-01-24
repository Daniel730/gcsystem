import styled from "styled-components";

export const Sidebar = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 200px;
    position: fixed;
    height: 100%;
    overflow: auto;
    @media (max-width: 700px) {
        width: 100%;
        height: auto;
        position: relative;
        flex-direction: row;
    }
    background-color: #045de9;
    background-image: linear-gradient(0deg, #045de9 0%, #09c6f9 55%);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const SideHeader = styled.div`
    background-color: #045de9;
    position: absolute;
    padding: 10px;
    right: 0;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    @media (max-width: 700px) {
        position: unset;
    }
    cursor: default;
`;

export const SideContent = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 45px;
    @media (max-width: 700px) {
        position: unset;
    }
`;

export const SideFooter = styled.div`
    padding: 10px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
        display: none;
    }
`;

export const FooterText = styled.p`
    color: white;
    font-size: 12px;
    font-weight: bold;
    cursor: default;
`;

export const SideItem = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 16px;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    background-color: #09c6f9;
    color: white;
    cursor: pointer;

    :hover {
        background-color: #045de9;
        color: white;
    }

    @media (max-width: 700px) {
        float: left;
    }

    @media (max-width: 400px) {
        text-align: center;
        float: none;
    }
`;
