import { Button, Card, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const [data, setData] = useState({
        name:'',
        des:'',
    })

    const navigate = useNavigate();

    // handle Change in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };



    const handleSubmit = () => {
        try {
            axios.post('https://63e498bdc04baebbcda80821.mockapi.io/kel',{
                name: data.name,
                des: data.des
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='make-center' style={{
            height:'100vh',
            alignItems:'center'
        }}>
            <div className='make-center2'>
                <Card p={100}>
                    <Heading size='lg' pb={50}>Create</Heading>
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
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Create