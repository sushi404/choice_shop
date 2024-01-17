import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function printShop(nearbyShops) {
    if(nearbyShops) {

        return(
            <div>
                {nearbyShops.map((shop, index) => (
                    <div key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {shop.displayName.text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="text">
                                    < a href={shop.googleMapsUri} target="_blank" rel="noopener noreferrer">
                                        ここに行く
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        )
    } else {
        // Return null or some loading indicator as per your design
        return null;
    }
}

