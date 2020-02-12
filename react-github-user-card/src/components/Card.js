import React from 'react'
import Styled from 'styled-components';

const CardContainer = Styled.div`
display: flex,
flex-flow: column;
justify-content: center;
align-items: center;
border: 2px solid black;
text-align: center;
width: 40%;
margin: 1% auto;
background-color: papayawhip;
`

const Grid = Styled.div`
display: grid;
grid-template-columns: repeat (3, 1fr);
text-align: center;
`



const Card = (props) => {
    return (
        <Grid>
            <CardContainer key={props.id}>
                <h2>{props.login}</h2>
                <img src={props.avatar} alt="github user" />
                <div>
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><button>View Profile</button></a>
                </div>
            </CardContainer>
        </Grid>
    )
}

export default Card;