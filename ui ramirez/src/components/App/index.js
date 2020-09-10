import React from 'react';
import Button from '../Button'
import Paragraph from '../Paragraph'
import Div from '../Div'
import {Grid, Col} from '../Grid'
import { Inner } from '../Inner'


function App() {
  return (
    <>
      <Inner>
        <Div margin={90}>Ostras Miguel!</Div>
      </Inner>

      <Div margin={90}>
                <div className="highlight">
                    Texto destacado
                </div>
            </Div>

            <Inner>

      <Button
        primary={true}
      >jolines</Button>

      <Paragraph>
        Ola ola ola olaolaolaolaoasldjkasldkj asdlaksdñk
    </Paragraph>

      <h1>Titulo</h1>
      <Grid colGap={30} rowGap={40}>
        <Col desktop={3} tablet={6} mobile={12}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
    </Col>
        <Col desktop={3} tablet={6} mobile={12}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
    </Col>
        <Col desktop={3} tablet={6} mobile={12}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
    </Col>
        <Col desktop={3} tablet={6} mobile={12}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
    </Col>

      </Grid>
      </Inner>
    </>
  );
}
export default App;
