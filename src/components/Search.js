import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NoneData from './NoneData'
import Tables from './Table'

function Search() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    // const [dataSearch, setDataSearch]  = useState([]);

    const keys = ["name", "des"]

    const getData = async () => {
        try {
            axios
                .get("https://63e498bdc04baebbcda80821.mockapi.io/kel")
                .then((res) =>setData(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDelete(id){
        try {
            await axios
                .delete(`https://63e498bdc04baebbcda80821.mockapi.io/kel/${id}`)
            getData();
        } catch (error) {
            console.log(error)
        }
    }

    const search = (data) => {
        return data?.filter((item) => 
            keys?.some((key) => item[key]?.toLowerCase().includes(query?.toLowerCase())) 
    )}

    // const search1 = () => {
    //     if(query !== ""){
    //         return data;
    //     }else{
    //         return dataSearch.filter((item) =>
    //             keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    //         )
    //     }
    // }

    const numberData = search(data)

    useEffect(() => {
        getData();
    },[])

    return (
        <div className='make-center' style={{
            flexDirection:'column'
        }}>
            <div className='make-center' style={{
                marginBottom:'20px'
            }}>
                <div className='make-center2'>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftAddon 
                                children={<SearchIcon color='gray.300'/>} 
                                pointerEvents='none'
                            />
                            <Input 
                                type='text' 
                                placeholder='Search somthing...' 
                                onChange={(e) => setQuery(e.target.value)} 
                            />
                        </InputGroup>
                    </Stack>
                </div>
            </div>
            <div style={{
                width:'85vw',
                display:'flex',
                justifyContent:'end',
                marginBottom:'20px',
            }}>
                <Button colorScheme='green' variant='outline' w={100} right={'max'}>
                        <Link to={'/create'}>
                            Create 
                        </Link>
                </Button>
            </div>
            {(numberData.length === 0) ? (
                <>
                    <NoneData />
                </>
            ):(
                <>
                    <Tables data={search(data)} handleDelete={handleDelete}/>
                </>
            )}
        </div>
    )
}

export default Search