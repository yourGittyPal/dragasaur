import React from 'react'
import dino from './dino.png'

export class Dinosaur extends React.Component{

    constructor(){
        super({})

        this.state = {
            x: 0,
            y: 0,
            offsetx: 0,
            offsety: 0
        }

        this.dragStart = this.dragStart.bind(this)
        this.dragEnd = this.dragEnd.bind(this)
        this.click = this.click.bind(this)

    }  
    dragStart(event){
        event.target.style.opacity = '0'
    }

    dragEnd(event){
        event.target.style.opacity = '100'
        this.setState({
            x: event.clientX - this.state.offsetx,
            y: event.clientY - this.state.offsety
        })
    }

    click(event){
        if(event.button === 0) {
            this.setState({
                offsetx: event.clientX - this.state.x,
                offsety: event.clientY - this.state.y
            })
        }
    }

    render(){
        return(
            <div style = {{ 'left': this.state.x, 'top': this.state.y }} 
            className = 'dino' onMouseDown={this.click} onDragStart = {this.dragStart} onDragEnd={this.dragEnd}>
                <img src ={dino} alt = 'dino'/>
            </div>
        )
    }
}

