import Button from '@mui/material/Button'
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Link from "next/link"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"
import { SvgIcon, SvgIconProps } from '@mui/material'

function GreenFilledCircleIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </SvgIcon>
    )
  }

export default function Diagnosis() {
    return(
        <div className="DiagnosisMain">
            <ul>
            <li className="question-item">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q1:「先々のこと」を考えて、根拠のない不安や焦りに襲われることが多い。</FormLabel>
                        <div className="response-row">
                            <div className="side-text">
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row>
                            <Radio icon={<RadioButtonUncheckedIcon sx={{ fontSize: 70, color: "green" }} />} checkedIcon={<GreenFilledCircleIcon sx={{ fontSize: 70, color: "green" }} />} value="1" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 60,
                                    }
                                }} value="2" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 50,
                                    }
                                }} value="3" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 40,
                                    }
                                }} value="4" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 50,
                                    }
                                }} value="5" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 60,
                                    }
                                }} value="6" />
                                <Radio sx={{
                                    '& .MuiSvgIcon-root':{
                                        fontSize: 70,
                                    }
                                }} value="7" />
                            </RadioGroup>
                            <div className="side-text">
                                <p>反対する</p>
                            </div>
                        </div>
                    </FormControl>
                </li>
                <li className="question-item">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q2:人前で意見を言う場面を想像するだけで、体がこわばる。</FormLabel>
                        <div className="response-row">
                            <div className="side-text">
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row>
                                <Radio value="1" />
                                <Radio value="2" />
                                <Radio value="3" />
                                <Radio value="4" />
                                <Radio value="5" />
                                <Radio value="6" />
                                <Radio value="7" />
                            </RadioGroup>
                            <div className="side-text">
                                <p>反対する</p>
                            </div>
                        </div>
                    </FormControl>
                </li>
                <li className="question-item">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Q3:「もし〇〇だとしたら？」と悪い方へ想像しすぎて、気づくと落ち込んでいる。</FormLabel>
                        <div className="response-row">
                            <div className="side-text">
                                <p>賛成する</p>
                            </div>
                            <RadioGroup row>
                                <Radio value="1" />
                                <Radio value="2" />
                                <Radio value="3" />
                                <Radio value="4" />
                                <Radio value="5" />
                                <Radio value="6" />
                                <Radio value="7" />
                            </RadioGroup>
                            <div className="side-text">
                                <p>反対する</p>
                            </div>
                        </div>
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