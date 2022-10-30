import React from 'react'
import Title from '../components/Title'
import ServicesSection from '../components/ServicesSection'
import ServicesNoPic from '../components/ServicesNoPic'
import leadership from '../images/Leadershipweb.png'
import track from '../images/trackweb.png'
import Ilolo_Izu_SEC from '../images/Ilolo_Izu_SEC_Runner.jpeg'
import record from '../images/A_M_world_record_4x4.png'

export default function Accomplishments() {
    const blog3 = "https://miro.medium.com/max/1400/1*J0WDV6ub4ZMzJxNESkjsrA.jpeg"
    const blog1 = "https://miro.medium.com/max/1400/1*__qZBavJIRiMQHJf6AlFig.png"
  return (
    <div>
        <Title title={'Accomplishments'} span={'Accomplishments'} />
            <div className="servives-container">
                <br/><ServicesSection image={blog3} title={'Access Scholarship'} text={'Associated with Flatiron School · December 2021'} /> 
                <hr/><ServicesSection image={blog1} title={'NCAA Postgraduate Scholarship Award Recipient'} text={'Issued by NCAA · May 2021'} /> 
                <hr/><ServicesSection image={leadership} title={'Distinguished Letterman Award'} alt="Ilolo receiving the Distinguished Letterman's Award" 
                text={`Issued by Texas A&M Athletics · Apr 2019`}
                /> 
                <br/><ServicesNoPic title={'Distinguished Student, Fall 2018'} text={`Issued by College of Education and Human Development · Feb 2019`} /> 
                <br/><ServicesNoPic title={`Dean's List, Spring 2017`} text={`Issued by College of Education and Human Development · May 2017`} /> 
                <hr/>
                <ServicesSection image={record} alt={"Ilolo Izu, World Record"} title={'American and World Record Holder in the Indoor 4x400m Relay'} text={'Issued by IAAF, NCAA Athletics, USATF · March 2018'} /> 
                <br/><ServicesSection image={track} title={'3x First Team All-American, 1x 2nd Team All-American'} alt="Ilolo winning Texas Relays in the 400 meter hurdles"
                text={`Finished in the Top 8 of All Men's Division 1 NCAA Track and Field at the NCAA Championships. Indoors 2018, Outdoors 2018, Indoors 2019.
                2nd Team indicates a top 16 finish. Outdoors 2018.`}
                /> 
                <br/><ServicesSection image={Ilolo_Izu_SEC} alt={"Ilolo Izu, SEC Runner of the Week"} title={'2x SEC Athlete of the Week, 2018 and 2019'} text={'Issued by South Eastern Conference'} /> 
                <br/><ServicesNoPic title={`Athletic Director's Honor Roll`} text={'Issued by Texas A&M Athletics · Achieved a GPA above 3.0 over 7 semesters'} /> 
                <br/><ServicesNoPic title={`SEC Academic Honor Roll`} text={`Issued by South Eastern Conference · Achieved a GPA above 3.0 over 3 semesters of competition`} /> 
    

            </div>
    </div>
  )
}
