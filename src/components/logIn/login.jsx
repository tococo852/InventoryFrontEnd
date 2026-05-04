import { Select, Switch, TextField, TextArea, Button, Card, Flex, Box, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import useAuth from "../../App/context/auth/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";
const Login =()=>{
    const navigate = useNavigate()
    const [userData,setUserData] = useState({username:'', password:''})
    const {login} = useAuth()
    
    const handleChange =(e)=>{

        setUserData({...userData, [e.target.name]:e.target.value})

    }

    const handleSubmit =  async (e)=>{

        e.preventDefault()
        const result = await login(userData)
        if (result.message === 'token recived and stored succesfully') {
        navigate('/home')
  }

    }
    return (
        <Box p='4' style={{ backgroundColor: '', width: '20vw', margin:'0 auto'}}>
            <Card variant="surface">
                <form onSubmit={handleSubmit}>

                <Flex direction={'column'} align={'center'} gap={'5'} p='2'>
                    <Text>Admin Login</Text>

                    <Box>
                        <Text>Username</Text>
                        <TextField.Root type="text" id="username" name="username" value={userData.username} onChange={handleChange} placeholder="your Username"/>
                    </Box>

                    <Box>
                        <Text>Password</Text>
                        <TextField.Root type="password" id="password" name="password" value={userData.password} onChange={handleChange} placeholder="your Password"/>
                    </Box>

                    <Button type="submit">LogIn</Button>

                </Flex>
                </form>

            </Card>

        </Box>

)
}

export default Login;
