import { Button, Card, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

    const [data, setData] = useState({
        name:'',
        des:'',
    })
    const navigate = useNavigate();
    const {id} = useParams();

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    function handleUpdate(e) {
        e.preventDefault();
        try {
            axios.put(`https://63e498bdc04baebbcda80821.mockapi.io/kel/${id}`,{
                name: data.name,
                des: data.des
            }).then(() => {
                navigate('/')
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataById()
    },[])

    const getDataById = async () => {
        const res = await axios.get(`https://63e498bdc04baebbcda80821.mockapi.io/kel/${id}`);
        setData(res.data.name)
        setData(res.data.des)
    }

    return (
        <div className='make-center' style={{
            height:'100vh',
            alignItems:'center'
        }}>
            <div className='make-center2'>
                <Card p={100}>
                    <Heading size='lg' pb={50}>Edit</Heading>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            placeholder='Name' 
                            type={'text'}
                            name='name'
                            onChange={handleChange}
                            value={data.name}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input 
                            placeholder='Description' 
                            type={'text'}
                            name='des'
                            onChange={handleChange}
                            value={data.des}
                        />
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                        onClick={handleUpdate}
                    >
                        Update 
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Update