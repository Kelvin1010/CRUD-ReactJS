import React, { useEffect, useState } from 'react';
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
    Card,
    Button,
    Avatar,
} from '@chakra-ui/react'
import { userData } from '../data/userData';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';

function Tables({data, getData, handleDelete}) {

    const [dt, setDt] = useState([]);

    const setToLocalStorage = (id,name,des) => {
        localStorage.setItem("name",name)
        localStorage.setItem("des",des)
    }


    return (
        <div style={{flexDirection:'column'}} className='make-center'>
            <div className='make-center'>
                <Card>
                    <TableContainer bgSize={'contain'} style={{width:'70vw'}}>
                        <Table variant='simple'>
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Avatar</Th>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th>Action</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {data?.map((item) => (
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>
                                            <Avatar src={item.img} name={item.name} />
                                        </Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.des}</Td>
                                        <Td>
                                            <div style={{
                                                display:'flex',
                                                justifyContent:'start'
                                            }}>
                                                <Link to={`/update/${item.id}`}>
                                                    <Button 
                                                        colorScheme='teal' 
                                                        marginRight={10}
                                                        onClick={() => 
                                                            setToLocalStorage(
                                                                item.name,
                                                                item.des
                                                            )
                                                        }
                                                    >Edit</Button>
                                                </Link>
                                                <Button 
                                                    colorScheme='red' 
                                                    onClick={()=> handleDelete(item.id)}
                                                >Delete</Button>
                                            </div>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </div>
        </div>
    )
}

export default Tables