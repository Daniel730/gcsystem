import PropTypes from "prop-types";
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import Button from "../global/Button";
import { Th, Td, Tr, Table } from "./style";

export default function TableComponent(props) {
    const { th, tb, tableList } = props;
    const buttonEdit = () => <AiOutlineEdit size="20px" color="orange" />;
    const buttonDelete = () => <AiOutlineDelete size="20px" color="red" />;
    return (
        <Table>
            <thead
                style={{
                    display: "table",
                    width: "calc( 100% - 1em )",
                    tableLayout: "fixed",
                }}
            >
                <Tr>
                    {th.map((item) => (
                        <Th key={item}>{item}</Th>
                    ))}

                    {tableList ? (
                        <Th>
                            <Button
                                style={{ padding: "5px 10px", margin: "5px 0" }}
                                onClick={() => false}
                                text="Adicionar"
                            />
                        </Th>
                    ) : (
                        false
                    )}
                </Tr>
            </thead>
            <tbody
                style={{ display: "block", overflow: "auto", height: "90%" }}
            >
                {tb.map((item, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tr key={`${item.name}${key}`}>
                        <Td>{item.name}</Td>
                        <Td>{item.cost}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.quantity}</Td>
                        <Td
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button Icon={buttonEdit} iconButton />
                            <Button Icon={buttonDelete} iconButton />
                        </Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
}

TableComponent.propTypes = {
    th: PropTypes.instanceOf(Array),
    tb: PropTypes.instanceOf(Array),
    tableList: PropTypes.bool,
};

TableComponent.defaultProps = {
    th: [],
    tb: [],
    tableList: false,
};
