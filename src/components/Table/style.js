import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    height: 100%;
`;

export const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    background-color: #09c6f9;
    color: white;
`;

export const Tr = styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;
    :hover {
        background-color: #ddd;
    }
    :nth-child(even) {
        background-color: #f2f2f2;
    }
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 3px;
`;
