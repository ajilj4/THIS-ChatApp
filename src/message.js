// import Common from "../components/common";
import React ,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './message.css'
import { Userdetail } from "./userdetails";
import axios from "axios";
import { UseSelector } from "react-redux";

const MIN_TEXTAREA_HEIGHT = 10;

const Contactus = () => {
 
  
  let cuser = useSelector(state=>state.counter.currentuser)
  console.log(cuser)

// const [istrue,setistrue]= useState(false)
  const textareaRef = React.useRef("hiii");
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);
  // let apidata = useSelector((state) => state.customer.apidata)
  let [isdisplay,setisdisplay] = useState(false);
  let [onclickuser,setonclickuser] = useState(0)
  let [apidata,setapidata] = useState([])
  console.log(apidata)
  console.log(onclickuser)
  let currentTime = new Date();
  let options = { timeStyle: 'short', hour12: true };
  let timeString = currentTime.toLocaleTimeString('en-US', options);

  // React.useLayoutEffect(() => {
  //   // Reset height - important to shrink on delete
  //   textareaRef.current.style.height = "inherit";
  //   // Set height
  //   textareaRef.current.style.height = `${Math.max(
  //     textareaRef.current.scrollHeight,
  //     MIN_TEXTAREA_HEIGHT
    
  //   )}px`;
    
  // }, [value]);

  // useEffect(()=>{

  for(let i=0;i<Userdetail.length;i++){
    // console.log(Userdetail[i].messages)
    Userdetail[i].lastmsg =Userdetail[i].messages[Userdetail[i].messages.length-1]
        // lastmsg : Userdetail[i].messages[Userdetail[i].messages.length-1]
      
      
    
  }
  // },[data])
// console.log('',data)

// const api =()=>{
//   axios.get(`http://127.0.0.1:5000/loginuser/${localStorage.getItem("userlogin")}`).then(function(res){
//   // console.log("",res.data)
//   setapidata(res.data)
  
// })
// }
// useEffect(()=>{
//   api()
// },[])
// axios.get(`http://127.0.0.1:5000/loginuser/${localStorage.getItem("userlogin")}`).then(function(res){
//   // console.log(res.data)
//   setapidata(res.data)
  
// })
// console.log(apidata)
// console.log(userdata)
  
  
let onlymsg = Userdetail[onclickuser].messages
  // console.log(onlymsg)
  onlymsg.sort(function (a, b) {
    // console.log("qf",a)
    return a.time.localeCompare(b.time);
});  

function pushnewmsg(){
  for(let i=0;i<Userdetail.length;i++){
    // console.log(Userdetail[i].id)
    if(Userdetail[i].id==(onclickuser+1)){
      // console.log(Userdetail[i].id,textareaRef.current.value)
      // console.log(Userdetail[i].messages)
      let newmsg = {
        time : timeString,
        msg : textareaRef.current.value
      }
      // setistrue(true)
      Userdetail[i].messages.push(newmsg)
      // console.log(Userdetail[i].messages)
      textareaRef.current.value=""
      
    }
    
  }
  // setistrue(false)
}
//  console.log("alldetails",Userdetail)
  return (
    <div>
    
      <div className="msgbox">
        <div className="leftmsgbox">
          <div className="leftheader">
            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
            <h4>Ajil<span>Total Member :4</span></h4>
          </div>
          <div className="msgsearch">
            <Form>
              <InputGroup className='my-3 search'>
                <Form.Control placeholder='Search contacts' />
              </InputGroup>
            </Form>
          </div>
          <div className="msgperson">
            
            {Userdetail.map((Member,i)=>(
              <a onClick={()=>{
                setonclickuser(Number(Member.id)-1)
                setisdisplay(true)
                }}><div className="perpersonmsg" key={i}>
              <img src={Member.image} alt="prof" onClick={()=>alert(`${Member.name}'s image`)}/>
              <h5>{Member.name}<span>{Member.lastmsg.msg}</span></h5>
            </div></a>
            ))}
          </div>
        </div>
        {isdisplay?<div className="rightmsgbox" style={{overflow: "scroll"}}>
       
          <div>
          
         <div className="rightmsgheader" >
            <h6>{Userdetail[onclickuser].name}</h6>
            <img src={Userdetail[onclickuser].image} alt="prof" />
          </div>
          <div className="rightscrollsection">
          <div className="rightmsgsection">
            <textarea
            className="textareamsg"
              placeholder="Type Message . . ."
              onChange={onChange}
              ref={textareaRef}
              style={{
                width: "100%",
                minHeight: MIN_TEXTAREA_HEIGHT,
                resize: "none"
              }}
              value={value}
            />
            <button className="btn btn-success" onClick={pushnewmsg} style={{marginLeft: "3px",borderRadius: 50, paddingLeft:30, paddingRight:30}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></button>
          </div>
         {onlymsg.toReversed().map((msges,i)=>{
// console.log(msges.msg)
          return(
          <div className="msglist">
              <img src={Userdetail[onclickuser].image} alt="prof" />
              <div className="msglistmsg">
              <p id="limitset">{msges.msg}</p>
                  
              </div>
              <p>{msges.time}</p>
          </div>)
})}          </div>

        </div>
        </div>:<img src="https://static.vecteezy.com/system/resources/previews/023/122/579/original/mobile-chat-app-tiny-people-chatting-in-mobile-smartphone-screen-online-communication-social-networking-messages-speech-bubbles-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" alt="bg"/>}
      </div>
    </div>
  )
}


export default Contactus;
