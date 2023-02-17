import { WarningTwoIcon } from '@chakra-ui/icons'
import { Card } from '@chakra-ui/react'
import React from 'react'

function NoneData() {
    return (
        <div className='make-center' style={{
            marginBottom:'20px'
        }}>
            <div className='make-center2' style={{
                textAlign:'center'
            }}>
                <Card>
                    <div>
                        <WarningTwoIcon boxSize={'5em'} color={'red'}/>
                        <h3 style={{
                            fontSize:'30px',
                            fontWeight:'bolder'
                        }}>Data None</h3>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default NoneData