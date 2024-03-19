import Common from "./common.js";
import React, { useState, useRef, useEffect,useMemo } from "react";
import moment from 'moment';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './message.css'
import { Userdetail } from "./userdetails";


const MIN_TEXTAREA_HEIGHT = 10;

const Contactus = () => {



  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    return Userdetail.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [Userdetail, query])


  const persononclick = (personid) => {
    {
      const element = document.getElementById('rightmsgbox');
      setonclickuser(Number(personid) - 1)
      setisdisplay(true)
     
      
      if(window.innerWidth<900){
      document.getElementById('leftmsgbox').style.display='none'
      if (element == null){
        element.style.display='block'
      }
        
      // document.getElementById('rightmsgbox').style.width='100%'
    }}
  }

  const textareaRef = useRef("hiii");
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

  let [isdisplay, setisdisplay] = useState(false);
  let [onclickuser, setonclickuser] = useState(0)

  console.log(onclickuser)


  let currentTime = new Date();
  // let options = { timeStyle: 'short', hour12: true };
  // let timeString = currentTime.toLocaleTimeString('en-US', options);
  const dateTimeAgo = moment(new Date(currentTime)).startOf('day').fromNow();
  console.log(dateTimeAgo)


  for (let i = 0; i < Userdetail.length; i++) {

    Userdetail[i].lastmsg = Userdetail[i].messages[Userdetail[i].messages.length - 1]

  }

  let onlymsg = Userdetail[onclickuser].messages
  // console.log(onlymsg)
  onlymsg.sort(function (a, b) {
    // console.log("qf",a)
    return a.time.localeCompare(b.time);
  });

  function pushnewmsg() {
    for (let i = 0; i < Userdetail.length; i++) {
      // console.log(Userdetail[i].id)
      if (Userdetail[i].id === (onclickuser + 1)) {
        // console.log(Userdetail[i].id,textareaRef.current.value)
        // console.log(Userdetail[i].messages)
        let newmsg = {
          time: dateTimeAgo,
          msg: textareaRef.current.value
        }
        // setistrue(true)
        Userdetail[i].messages.push(newmsg)
        // console.log(Userdetail[i].messages)
        textareaRef.current.value = ""

      }

    }
    // setistrue(false)
  }
  //  console.log("alldetails",Userdetail)
  return (
    <div>
      <Common />
      <div className="msgbox">
        <div className="leftmsgbox" id="leftmsgbox">
          <div className="leftheader">
            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="prof" />
            <h4>{Userdetail[0].name}<span>Total Member :{Userdetail.length}</span></h4>
          </div>
          <div className="msgsearch">
            <Form>
              <InputGroup className='my-3 search'>
                <Form.Control placeholder='Search my name ....' value={query} onChange={e => setQuery(e.target.value)}/>
              </InputGroup>
            </Form>
          </div>
          <div className="msgperson">

            {filteredItems.map((Member, i) => (
              <a onClick={() => persononclick(Member.id)}><div className="perpersonmsg" key={i} id="perpersonmsg">
                <img src={Member.image} alt="prof" onClick={() => alert(`${Member.name}'s image`)} />
                <h5>{Member.name}<span>{Member.lastmsg.msg}</span></h5>
              </div></a>
            ))}
          </div>
        </div>
        {isdisplay ? <div className="rightmsgbox" id="rightmsgbox" style={{ overflow: "scroll" }}>

          <div>

            <div className="rightmsgheader" >
              <div className="d-flex ">
                { window.innerWidth <900?
                <a onClick={()=>{
                  document.getElementById('rightmsgbox').style.display = 'none'
                  document.getElementById('leftmsgbox').style.display = 'block'
                  document.getElementById('leftmsgbox').style.width = '100%'

                }
                }>
              <svg className="align-self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></a>:null}
              <h6 className="ms-2">{Userdetail[onclickuser].name}</h6>
              </div>
              <img src={Userdetail[onclickuser].image} className="border-img" alt="prof" />
            </div>
            <div className="rightscrollsection">
              <div className="rightmsgsection">
                <textarea
                  className="textareamsg"
                  placeholder="Type Message ... I can list message"
                  onChange={onChange}
                  ref={textareaRef}
                  style={{
                    width: "100%",
                    minHeight: MIN_TEXTAREA_HEIGHT,
                    resize: "none"
                  }}
                  value={value}
                />
                <button className="btn btn-success" onClick={pushnewmsg} style={{ marginLeft: "3px", borderRadius: 50, paddingLeft: 30, paddingRight: 30 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg></button>
              </div>
              {onlymsg.toReversed().map((msges, i) => {
                // console.log(msges.msg)
                return (
                  <div className="msglist">
                    <img src={Userdetail[onclickuser].image}  alt="prof" />
                    <div className="msglistmsg">
                      <p id="limitset" >{msges.msg}</p>

                    </div>
                    <p>{msges.time}</p>
                  </div>)
              })}          </div>

          </div>
        </div> : <img className="rightimg" src="https://static.vecteezy.com/system/resources/previews/023/122/579/original/mobile-chat-app-tiny-people-chatting-in-mobile-smartphone-screen-online-communication-social-networking-messages-speech-bubbles-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" alt="bg" />}
      </div>
    </div>
  )
}


export default Contactus;
