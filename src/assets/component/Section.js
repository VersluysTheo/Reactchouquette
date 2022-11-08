import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Datacard } from '../../data/DataCard';
import { CardActionArea } from '@mui/material';

export default function LaCarte() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <>
                {Datacard.map(donne => (
                    <CardActionArea>
                        <CardMedia>
                    <img class="img" src={donne.image}/>
                    </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <p>{donne.nom}</p>
                            <p>{donne.id}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                ))}
            </>
        </Card>
    );
}
