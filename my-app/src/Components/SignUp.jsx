import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import styles from './styles/SignUp.module.css'


const getUser = () =>{
  return axios.post(`https://ill-lime-cummerbund.cyclic.app/users`)
}


function SignUp() {

  const [userData,setUserData] = useState("")

const CheckUser = () =>{
  
}

const handleLogin = () =>{


}
  
    return (
      <Box className={styles.MainBox}>
        <Text fontWeight="700" fontSize="22px" color="#9D6A37">SignUP</Text>
        <Box>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormLabel>Mobile No</FormLabel>
            <Input type="number" />
            <FormLabel>Password</FormLabel>
            <Input />
          </FormControl>
          <Button colorScheme="#EB5934" bg="#EB5934">Submit</Button>

      
        </Box>
      
      </Box>
    )
  }
  export default SignUp