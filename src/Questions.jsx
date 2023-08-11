import React, { useState ,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from "./Timer";
import './App.css';



function Questions({ question, options, i,callback,queslength}) {
    let [res, setres] = useState("")
    console.log(res)
    return (
        <>
        <Timer/>
        <div class="container bg-black">
        <div class="pt-2 pr-auto pl-auto m-5 bg-light shadow roundedn pb-5 ">
        <p className="text-center fs-4">Question<span class="fs-3" id="cquestion">{i+1}</span>/<span id="tquestion">{queslength}</span></p>
        <h2 id="question" >in{question}</h2>
    </div>
    <Container>
    <Row>
            {
                options.map((v, i) => {
                    return (
                        <>
                        
                        <Col lg={6} md={12} sm={12}> <Button style={{width:"100%",margin:"10px",fontSize:"20px"}} onClick={(e) => setres(v)} variant="primary"><input type="radio" name={{i}} /> {v}</Button></Col>
                     
                      </>
                    )
                    

                })
            }
             </Row>
            </Container>
            </div>
            <br />
            <Container className="text-center">
            <Button className=" ne_t w-50 col-md-12" variant="danger"
            onClick={()=>callback(res)}
            >Next</Button>
            </Container>
        </>
    )
}

export default Questions