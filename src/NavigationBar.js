import { Box, Container, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";


//Create a react component

export default function NavigationBar() {
    return (

        <Container>
            <Toolbar>
                <Typography>
                    Ctecx Technologies Solutions

                </Typography>
                <Box>
                  { ['Home','Products','Services'].map((menuOption) => (
                     
                     <Link  
                      component={'button'}
                      variant="body1"
                     >
                     {menuOption.toUpperCase()}
                     </Link>
                      
                  ))}
                </Box>

            </Toolbar>

        </Container>

    );
}