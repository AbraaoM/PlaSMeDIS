import React from 'react';  
import {createAppContainer} from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from '../pages/home';
import Recomendado from '../pages/recomendado'; 
import Postagem from '../pages/postagemFiltro'

  
const TabNavigatorF = createMaterialTopTabNavigator(  
    {  
        Início: Postagem,  
        Recomendados: Recomendado,    
    },  
    {  
        tabBarOptions: {  
            activeTintColor: '#31788A',
            inactiveTintColor: '#31788A',
            indicatorStyle: {
                backgroundColor: '#31788A',
                padding: 2,
                borderRadius: 3,
                width: 130,
                marginLeft: 25
            },
            labelStyle:{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 15,
                lineHeight: 18,
                textAlign: 'center',
                letterSpacing: -0.333333
            },
            style: {  
                backgroundColor:'#fafafa' , 
                padding: -52,
            }  
        },  
    },
)  

const TabF = createAppContainer(TabNavigatorF);  
export default TabF;  
