import React, { useState } from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import ContactBox from './ContactBox'
import Message from './Message'

export default function Chat() {

    const [show, setShow] = useState("messages")
    const [contacts, setContacts] = useState([
        {
            id: 1, name: "David Beckham", img: "l-3.jpg", pm: [
                { how: 1, message: "What do you think about our plans for this product launch?" },
                { how: 1, message: "It looks to me like you have a lot planned before your deadline." },
                { how: 2, message: "I would suggest you discuss this further with the advertising team." },
            ]
        },
        { id: 2, name: "Mark Bosnich", img: "u1.jpg", pm: [] },
        { id: 3, name: "Pedro Moli", img: "l-4.jpg", pm: [] },
        { id: 4, name: "Fido Binichi", img: "l-2.jpg", pm: [] },
        { id: 5, name: "Xavi Beckham", img: "l-5.jpg", pm: [] },
        { id: 6, name: "Messi Beckham", img: "u2.jpg", pm: [] },
    ])
    const [mainChat, setMainChat] = useState({
        id: 1, name: "David Beckham", img: "l-3.jpg", pm: [
            { how: 1, message: "What do you think about our plans for this product launch?" },
            { how: 1, message: "It looks to me like you have a lot planned before your deadline." },
            { how: 2, message: "I would suggest you discuss this further with the advertising team." },
        ]
    })
    const [text, setText] = useState("")


    const submitHandler = () => {
        let newPm = [...mainChat.pm]
        newPm.push({ how: 2, message: text })
        setMainChat(prev => {
            return {
                ...prev,
                pm: newPm
            }
        })
        setText("")
    }

    return (
        <>
            <Breadcramp title="Chat" subTitle="Applicatins" sub="Chat" />
            <div className='main-container bg-main mt-3' >
                <div className='d-flex row'>
                    <div className="col-lg-8">
                        <header className='d-flex align-items-center mb-4 border-bottom pb-3'>
                            <img src={`/img/${mainChat.img}`} className='img-50 rounded-50 me-3' />
                            <div>
                                <p className='fw-600'>{mainChat.name}</p>
                                <p className='fs-12 p-coolor-4 mt-2'>Last seen today 15:24</p>
                            </div>
                        </header>
                        <div className='overflow-y-auto scroll' style={{ height: "42vh" }}>
                            {mainChat.pm.map((i , inx) => (<Message key={inx} img={mainChat.img} {...i} />))}

                        </div>
                        <footer className='p-3 bg-white'>
                            <div className='d-flex bg-white align-items-center p-2'>
                                <input
                                    onChange={(event) => {
                                        setText(event.target.value)
                                       
                                        
                                    }}
                                    onKeyDown={event => {
                                        if (event.keyCode == 13) {
                                            submitHandler()
                                        }
                                    }}
                                    value={text}
                                    className='form-control border-none fs-12'
                                    type="text" placeholder='Say somethings' />
                                <i class='bx bx-paperclip fs-3 border color-gold2 rounded-50 p-2 ms-2 pointer'></i>
                                <i class='bx bx-send fs-3 border color-gold2 rounded-50 p-2 ms-2 pointer'
                                    onClick={submitHandler}
                                ></i>
                            </div>
                        </footer>
                    </div>


                    <div className="col-lg-4 mt-3">
                        <div className='bg-white h-100 p-4 rounded-15p'>
                            <div className="d-flex justify-content-around mb-4 fs-14">
                                <p className={`hover-gold pointer  pb-2 ${show === "messages" && "border-bottom color-gold4"}`}
                                    onClick={() => setShow("messages")}
                                >Messages</p>
                                <p className={`hover-gold pointer  pb-2 ${show === "contacts" && "border-bottom color-gold4"}`}
                                    onClick={() => setShow("contacts")}
                                >Contacts</p>
                            </div>
                            <input type="text" class="form-control rounded-25p fs-12" placeholder="Search" />
                            {show === "messages" ? (
                                <div className='overflow-y-auto scroll py-4' style={{ height: "50vh" }}>
                                    <ContactBox img="l-3.jpg" name="David Beckham" />
                                </div>
                            ) : (
                                <div className='overflow-y-auto scroll py-4' style={{ height: "50vh" }}>
                                    {contacts.map(i => (<ContactBox {...i} key={i.id} setMainChat={setMainChat}/>))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
