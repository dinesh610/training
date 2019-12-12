import React from 'react';
import {Image, Label, Card} from './components/common'
import sampleImage from './assets/sample.jpg'


const products = [{name: 'fireworks', imageUri:'https://thumbs.dreamstime.com/z/beautiful-colorful-firework-display-night-celebrate-anniversary-166189071.jpg'}]


function Main(){

    return (
        <div style={{width: '100%', height: '50vh', display: 'flex', flexWrap: 'wrap'}}>
            {products.map((item)=>(<Card>
            <Image src={item.imageUri}/>
<Label>{item.name}</Label>
            </Card>))}
        

                    

        </div>
    )
}

export default Main;