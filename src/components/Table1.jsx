import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const Table1 = ({ data }) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Details of the User</TableCaption>
                <Thead>
                    <Tr>
                        {Object.keys(data[0]).map((key) => {
                            return <Th>{key}</Th>
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item) => {
                        return <Tr>
                            {Object.values(item).map((val) => {
                                return <Td>{val}</Td>
                            })}
                        </Tr>


                    })}
                </Tbody>
               
            </Table>
        </TableContainer>
    )
}

export default Table1