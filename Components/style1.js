import styled from "styled-components";
import { View,Text,Image,TextInput,TouchableOpacity,ImageBackground} from "react-native";
import  Constants  from "expo-constants";

const StatusBarHeight=Constants.StatusBarHeight;

export const Colors={
    primary:"#ffffff",
    secondary:"#E5EFEB",
    tertiary:"#1F2937",
    darkLiht:"#9CA3AF",
    brand:"#7ADBCE",
    green:"#A23492",
    red:"#EF4444"
};

const {primary,secondary,tertiary,darkLiht,brand,green,red}=Colors;

export const StyledButton =styled.TouchableOpacity`
    padding:15px;
    background-color:;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    margin-vertical:5px;
    padding-horizontal:5px;
    height:50px;

    ${(props)=>props.google == true && `
        background-color:;
        flex-direction: row;
        justify-content: center;
    `}
`;
export const ButtonText=styled.Text`
    color:black;
    font-weight:bold,
    font-size:16px;

    ${(props)=>props.google == true && `
        background-color:;
    `}
`;

export const Line =styled.View`
    height:1px;
    width:100%;
    background-color:${darkLiht};
    margin-vetical: 10px;
`

export const Avatar =styled.Image`
    width:70px;
    height:70px;
    margin:auto;
    border-radius:50px;
    border-width:2px;
    border-color:${secondary};
    margin-bottom:10px;
    margin-top:10px;
`

export const Avatar1 =styled.Image`
    width:50px;
    height:50px;
    margin:auto;
    border-radius:50px;
    border-width:0px;
    border-color:${secondary};
    margin-bottom:10px;
    margin-top:10px;
`

export const Logo =styled.Image`
    width:50px;
    height:25px;
    margin:auto;
    border-radius:50px;
    border-width:2px;
    border-color:${secondary};
    margin-bottom:10px;
    margin-top:10px;
`
