import { StyleSheet } from "react-native";
import * as Colors from '@pxblue/colors';

export default StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",

    },
  card: {
    height: "65%",
    width: "100%",
    alignItems: "center",
    marginRight: 100,
    
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center"
  },
  logo1: {
    width: 60,
    height: 60,
    alignSelf: "center",
    resizeMode: "contain"
  },
  
    
    emailAddressAndPassword: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "-1px 0px 0px",
        padding: "7px 0px"
      },
      emailAddress: {
        color: "blue"
      },
      Password: {
        color: "blue"
      },
      
    
  
  footer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  loginButton: {
    alignSelf: "center",
  },

  rememberMe: {
      alignSelf: "center",
      fontSize: 20      
  },
  
  signUpAndPassword: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10
  },
  signUp: {
    color: "blue",
    fontSize: 20,
  },
  forgotPassword: {
    color: "blue",
    fontSize: 20,
  },
  termsAndConditions: {
    textAlign: "center"
  },
  link: {
    color: Colors.blue['500'],
  },
  registrationPage : {
    flex: 1,    
  },
  heading: {
      fontSize: 20,
      color: '#4da3d4',
      fontWeight: '700',
      marginBottom: 20,
  }
});