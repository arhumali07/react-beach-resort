import React, { Component } from 'react'
import Title  from './Title'
import {FaCocktail,FaShuttleVan,FaHiking,FaBeer} from 'react-icons/fa'
 class Services extends Component {

    state={
        services:[
            {icon:<FaCocktail/>,
            title:"free cocktails",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
        {icon:<FaHiking/>,
            title:"Endless Hikin",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
        {icon:<FaShuttleVan/>,
            title:"free Shuttle",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},
        {icon:<FaBeer/>,
            title:"Stringest Beer",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service" >
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}

export default Services