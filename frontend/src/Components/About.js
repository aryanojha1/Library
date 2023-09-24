import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived not 
                        only five centuries.<br/>
                        <br/>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        Latin words, consectetur, from a Lorem Ipsum passage.<br/>
                        <br/>
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected 
                        humour<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
