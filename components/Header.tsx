import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

export default function Header() {
    return (
        <AppBar position="static" sx={{backgroundColor: "#fff"}}>
            <Toolbar>
                <Link href="/" style={{flexGrow: 1}}>              
                    <Typography variant="h6" component="div" sx={{color:"black"}}>
                        Diagnosis
                    </Typography>
                </Link>
                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
  }
  