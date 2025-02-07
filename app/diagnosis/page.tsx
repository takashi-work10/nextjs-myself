import Button from '@mui/material/Button'
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Link from "next/link"


export default function Diagnosis() {
    return(
        <div>
            <ul>
                <li>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q1:「先々のこと」を考えて、根拠のない不安や焦りに襲われることが多い。</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value="1" control={<Radio />} label="1"></FormControlLabel>
                            <FormControlLabel value="2" control={<Radio />} label="2"></FormControlLabel>
                            <FormControlLabel value="3" control={<Radio />} label="3"></FormControlLabel>
                            <FormControlLabel value="4" control={<Radio />} label="4"></FormControlLabel>
                            <FormControlLabel value="5" control={<Radio />} label="5"></FormControlLabel>
                            <FormControlLabel value="6" control={<Radio />} label="6"></FormControlLabel>
                            <FormControlLabel value="7" control={<Radio />} label="7"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q2:人前で意見を言う場面を想像するだけで、体がこわばる。</FormLabel>
                        <RadioGroup row>
                        <FormControlLabel value="1" control={<Radio />} label="1"></FormControlLabel>
                            <FormControlLabel value="2" control={<Radio />} label="2"></FormControlLabel>
                            <FormControlLabel value="3" control={<Radio />} label="3"></FormControlLabel>
                            <FormControlLabel value="4" control={<Radio />} label="4"></FormControlLabel>
                            <FormControlLabel value="5" control={<Radio />} label="5"></FormControlLabel>
                            <FormControlLabel value="6" control={<Radio />} label="6"></FormControlLabel>
                            <FormControlLabel value="7" control={<Radio />} label="7"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </li>
                <li>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q3:「もし〇〇だとしたら？」と悪い方へ想像しすぎて、気づくと落ち込んでいる。</FormLabel>
                        <RadioGroup row>
                        <FormControlLabel value="1" control={<Radio />} label="1"></FormControlLabel>
                            <FormControlLabel value="2" control={<Radio />} label="2"></FormControlLabel>
                            <FormControlLabel value="3" control={<Radio />} label="3"></FormControlLabel>
                            <FormControlLabel value="4" control={<Radio />} label="4"></FormControlLabel>
                            <FormControlLabel value="5" control={<Radio />} label="5"></FormControlLabel>
                            <FormControlLabel value="6" control={<Radio />} label="6"></FormControlLabel>
                            <FormControlLabel value="7" control={<Radio />} label="7"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </li>
            </ul>
            <Link href="/result">
                <Button variant='contained' 
                sx={{
                    fontSize: "30px",
                    backgroundColor: "#CF9FFF",
                    color: "#fff",  
                }}>結果を見る</Button>
            </Link>
        </div>
    )
}